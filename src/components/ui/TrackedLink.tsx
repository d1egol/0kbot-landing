"use client";

import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";

interface TrackedLinkProps {
  href: string;
  ctaName: string;
  location: string;
  className?: string;
  children: React.ReactNode;
  prefetch?: boolean;
}

export default function TrackedLink({
  href,
  ctaName,
  location,
  className,
  children,
  prefetch,
}: TrackedLinkProps) {
  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={className}
      onClick={() => trackCTAClick(ctaName, location)}
    >
      {children}
    </Link>
  );
}
