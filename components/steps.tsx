import type * as React from "react";
import { cn } from "@/lib/utils";

export function Steps({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("w-full", className)}>
      <div className="relative space-y-8 pl-8 before:absolute before:inset-y-0 before:left-4 before:w-0.5 before:bg-gray-200">
        {children}
      </div>
    </div>
  );
}

export function Step({
  index,
  title,
  description,
  children,
}: {
  index: number;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="absolute -left-8 flex h-8 w-8 items-center justify-center rounded-full border-2 border-blue-600 bg-white text-blue-600">
        <span className="text-sm font-medium">{index}</span>
      </div>
      <div className="pl-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
