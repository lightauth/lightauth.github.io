"use client"

import type React from "react"
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar"
import { DocsSidebar } from "@/components/docs-sidebar"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <DocsSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center border-b px-6">
          <SidebarTrigger className="mr-4 md:hidden" />
          <div className="ml-auto flex items-center gap-4">
            <a
              href="https://github.com/light-auth/light-auth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
            <a href="/docs/api-reference" className="text-sm text-muted-foreground hover:text-foreground">
              API
            </a>
          </div>
        </header>
        <main className="container max-w-4xl py-6 md:py-12">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  )
}
