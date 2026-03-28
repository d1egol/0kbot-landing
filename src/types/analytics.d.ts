// Global type declarations for GA4 and Meta Pixel
// These are injected by next/script in layout.tsx

interface GtagParams {
  event_category?: string;
  event_label?: string;
  value?: number;
  source?: string;
  cta_name?: string;
  location?: string;
  [key: string]: string | number | boolean | undefined;
}

interface FbqParams {
  content_name?: string;
  [key: string]: string | number | boolean | undefined;
}

declare function gtag(
  command: "event",
  eventName: string,
  params?: GtagParams
): void;
declare function gtag(
  command: "config",
  targetId: string,
  params?: Record<string, unknown>
): void;
declare function gtag(command: "js", date: Date): void;

declare function fbq(
  command: "track",
  eventName: string,
  params?: FbqParams
): void;
declare function fbq(command: "init", pixelId: string): void;

declare interface Window {
  gtag?: typeof gtag;
  fbq?: typeof fbq;
}
