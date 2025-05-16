import { cn } from "@/lib/utils";
import { ExternalLink as LucideExternalLink } from "lucide-react";
import Link from "next/link";
import { HTMLAttributeAnchorTarget } from "react";

export function ExternalLink({
  href,
  children,
  target = "_blank",
  className,
}: {
  href: string;
  children: React.ReactNode;
  target?: HTMLAttributeAnchorTarget;
  className?: string;
}) {
  return (
    <Link href={href} className={cn(`text-blue-600 hover:underline inline-flex`, className)} target={target}>
      {children}
      <LucideExternalLink className="ml-2 h-4 w-4 self-center" />
    </Link>
  );
}
