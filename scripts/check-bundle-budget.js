#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");

const buildLog = process.argv[2] || "build-output.txt";
const budgetPath = process.argv[3] || ".perf-budget.json";

if (!fs.existsSync(buildLog)) {
  console.error(`[budget] Build log not found: ${buildLog}`);
  process.exit(2);
}
if (!fs.existsSync(budgetPath)) {
  console.error(`[budget] Budget file not found: ${budgetPath}`);
  process.exit(2);
}

const budget = JSON.parse(fs.readFileSync(budgetPath, "utf8"));
const log = fs.readFileSync(buildLog, "utf8");

const routePattern =
  /[├└┌]\s+[○●ƒλ]\s+(\/\S*)\s+\S+\s+(?:B|kB)\s+(\S+)\s+(B|kB)/g;
const sharedPattern = /First Load JS shared by all\s+(\S+)\s+(B|kB)/;

const routes = {};
let m;
while ((m = routePattern.exec(log)) !== null) {
  const [, route, value, unit] = m;
  routes[route] = unit === "B" ? Number(value) / 1024 : Number(value);
}

const sharedMatch = sharedPattern.exec(log);
const shared = sharedMatch
  ? sharedMatch[2] === "B"
    ? Number(sharedMatch[1]) / 1024
    : Number(sharedMatch[1])
  : null;

if (!shared || Object.keys(routes).length === 0) {
  console.error("[budget] Could not parse build output. Routes found:", routes);
  console.error(
    "[budget] If this is a build failure, fix the build first. If parsing is wrong, the regex needs an update.",
  );
  process.exit(2);
}

const checks = [];
const sharedBudget = budget.first_load_js_kb.shared;
checks.push({
  name: "First Load JS shared",
  actual: shared,
  budget: sharedBudget,
  ok: shared <= sharedBudget,
});

const routeKeyMap = {
  "/": "/",
  "/blog": "/blog",
  "/blog/[slug]": "/blog/[slug]",
  "/recursos": "/recursos",
};

for (const [route, key] of Object.entries(routeKeyMap)) {
  const budgetVal = budget.first_load_js_kb[key];
  const actual = routes[route];
  if (actual === undefined) {
    console.warn(`[budget] Route not found in build output: ${route}`);
    continue;
  }
  if (budgetVal === undefined) continue;
  checks.push({
    name: `Route ${route}`,
    actual,
    budget: budgetVal,
    ok: actual <= budgetVal,
  });
}

let failed = 0;
for (const c of checks) {
  const sym = c.ok ? "✓" : "✗";
  const delta = (c.actual - c.budget).toFixed(2);
  const sign = delta >= 0 ? "+" : "";
  console.log(
    `${sym} ${c.name.padEnd(28)} actual=${c.actual.toString().padStart(6)} kB  budget=${c.budget.toString().padStart(6)} kB  delta=${sign}${delta} kB`,
  );
  if (!c.ok) failed++;
}

console.log("");
if (failed > 0) {
  console.error(
    `[budget] FAIL — ${failed} route(s) exceed perf budget. Update .perf-budget.json deliberately if intended, or reduce bundle.`,
  );
  process.exit(1);
}
console.log("[budget] OK — all routes within perf budget.");
