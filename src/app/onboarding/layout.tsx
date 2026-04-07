import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pre-reunión de diagnóstico",
  description:
    "Formulario previo a tu diagnóstico gratuito con 0kbot. Cuéntanos sobre tu operación para que lleguemos preparados.",
  alternates: { canonical: "https://0kbot.com/onboarding" },
  robots: {
    index: false,
    follow: false,
  },
};

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
