"use client";

import { ReactLenis } from "lenis/react";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: true,
        // No smooth touch — respeta scroll nativo en mobile (mejor UX iOS/Android)
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
