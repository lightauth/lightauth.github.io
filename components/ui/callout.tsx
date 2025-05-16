import type React from "react";
import { cn } from "@/lib/utils";
import { CircleAlert, CircleCheck, FileWarning, Info, TriangleAlert } from "lucide-react";

interface CalloutProps {
  variant?: "default" | "info" | "warning" | "error" | "success";
  children?: React.ReactNode;
  className?: string;
}

export function Callout({ variant = "default", children, className }: CalloutProps) {
  const variantStyles = {
    default: "bg-slate-100 border-slate-200 text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100",
    info: "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-950/30 dark:border-blue-800 dark:text-blue-100",
    warning: "bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/30 dark:border-amber-800 dark:text-amber-100",
    error: "bg-red-50 border-red-200 text-red-900 dark:bg-red-950/30 dark:border-red-800 dark:text-red-100",
    success: "bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-950/30 dark:border-emerald-800 dark:text-emerald-100",
  };

  const iconStyles = {
    default: "text-slate-900 dark:text-slate-100",
    info: "text-blue-900 dark:text-blue-100",
    warning: "text-amber-900 dark:text-amber-100",
    error: "text-red-900 dark:text-red-100",
    success: "text-emerald-900 dark:text-emerald-100",
  };

  const icon = {
    default: <Info className={cn("h-5 w-5 mr-2 inline", iconStyles[variant])} />,
    info: <Info className={cn("h-5 w-5 mr-2 inline", iconStyles[variant])} />,
    warning: <TriangleAlert className={cn("h-5 w-5 mr-2 inline", iconStyles[variant])} />,
    error: <CircleAlert className={cn("h-5 w-5 mr-2 inline", iconStyles[variant])} />,
    success: <CircleCheck className={cn("h-5 w-5 mr-2 inline", iconStyles[variant])} />,
  };

  return (
    <div className={cn("p-4 rounded-lg border flex flex-row items-start auto-cols-fr", variantStyles[variant], className)}>
      <div>{icon[variant]}</div>
      <div>{children}</div>
    </div>
  );
}
