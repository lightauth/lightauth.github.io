"use client";

import type React from "react";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { DocsSidebar } from "@/components/docs-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Header } from "@/components/header";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DocsSidebar />
      <SidebarInset>
        <Header />
        <main className="container py-6 md:py-12">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
