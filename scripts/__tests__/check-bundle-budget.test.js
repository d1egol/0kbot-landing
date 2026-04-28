import { describe, it, expect } from "vitest";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { writeFileSync, mkdtempSync, rmSync } from "node:fs";
import os from "node:os";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const SCRIPT = path.resolve(__dirname, "..", "check-bundle-budget.js");
const FIX = path.join(__dirname, "fixtures");

function run(buildLog, budgetJsonPath) {
  return spawnSync("node", [SCRIPT, buildLog, budgetJsonPath], {
    encoding: "utf8",
  });
}

function makeTempBudget(json) {
  const dir = mkdtempSync(path.join(os.tmpdir(), "budget-test-"));
  const file = path.join(dir, "budget.json");
  writeFileSync(file, JSON.stringify(json), "utf8");
  return { file, cleanup: () => rmSync(dir, { recursive: true, force: true }) };
}

describe("check-bundle-budget.js", () => {
  it("exit 0 cuando todas las rutas están dentro del budget", () => {
    const { file, cleanup } = makeTempBudget({
      first_load_js_kb: {
        shared: 90,
        "/": 145,
        "/blog": 110,
        "/blog/[slug]": 110,
        "/recursos": 115,
      },
    });
    try {
      const r = run(path.join(FIX, "build-log-ok.txt"), file);
      expect(r.status).toBe(0);
      expect(r.stdout).toContain("OK");
    } finally {
      cleanup();
    }
  });

  it("exit 1 cuando alguna ruta excede el budget", () => {
    const { file, cleanup } = makeTempBudget({
      first_load_js_kb: {
        shared: 90,
        "/": 145, // será excedido por 200 del fixture fail
        "/blog": 110,
        "/blog/[slug]": 110,
        "/recursos": 115,
      },
    });
    try {
      const r = run(path.join(FIX, "build-log-fail.txt"), file);
      expect(r.status).toBe(1);
      expect(r.stderr + r.stdout).toContain("FAIL");
    } finally {
      cleanup();
    }
  });

  it("exit 2 cuando el build-log no parsea (rutas/shared no encontrados)", () => {
    const { file, cleanup } = makeTempBudget({
      first_load_js_kb: { shared: 90, "/": 145 },
    });
    try {
      const r = run(path.join(FIX, "build-log-empty.txt"), file);
      expect(r.status).toBe(2);
      expect(r.stderr).toContain("Could not parse");
    } finally {
      cleanup();
    }
  });

  it("exit 2 cuando el build-log no existe", () => {
    const { file, cleanup } = makeTempBudget({
      first_load_js_kb: { shared: 90 },
    });
    try {
      const r = run(path.join(FIX, "no-existe.txt"), file);
      expect(r.status).toBe(2);
      expect(r.stderr).toContain("Build log not found");
    } finally {
      cleanup();
    }
  });

  it("exit 2 cuando el budget JSON no existe", () => {
    const r = run(path.join(FIX, "build-log-ok.txt"), "no-existe-budget.json");
    expect(r.status).toBe(2);
    expect(r.stderr).toContain("Budget file not found");
  });
});
