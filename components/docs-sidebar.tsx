"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Search,
  BookOpen,
  FileText,
  Code,
  Lightbulb,
  BookMarked,
  Home,
  LogIn,
  LogOut,
  Cross,
  Settings,
  KeyRound,
  Brain,
  ListRestart,
  Shield,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

interface DocsSidebarProps {
  className?: string;
}

export function DocsSidebar({ className }: DocsSidebarProps) {
  const pathname = usePathname();

  return (
    <Sidebar className={className}>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2 px-2 py-3">
          <div className="rounded-full bg-blue-100 p-1">
            <BookMarked className="h-5 w-5 text-blue-600" />
          </div>
          <span className="font-semibold">Light-Auth Docs</span>
        </Link>
        <form className="mt-2">
          <SidebarGroup className="py-0">
            <SidebarGroupContent className="relative">
              <SidebarInput placeholder="Search documentation..." />
              <Search className="pointer-events-none absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 select-none opacity-50" />
            </SidebarGroupContent>
          </SidebarGroup>
        </form>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive={pathname === "/docs"}>
                <Link href="/docs">
                  <Home className="h-4 w-4" />
                  <span>Introduction</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Getting Started</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/docs/get-started"}>
                  <Link href="/docs/get-started">
                    <FileText className="h-4 w-4" />
                    <span>Get Started</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/docs/installation" || pathname.startsWith("/docs/installation/")}>
                  <Link href="/docs/installation">
                    <Code className="h-4 w-4" />
                    <span>Installation</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/docs/auth" || pathname.startsWith("/docs/auth/")}>
                  <Link href="/docs/auth">
                    <KeyRound className="h-4 w-4" />
                    <span>Create Light Auth</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/docs/handlers" || pathname.startsWith("/docs/handlers/")}>
                  <Link href="/docs/handlers">
                    <Brain className="h-4 w-4" />
                    <span>API Handlers</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/docs/signin" || pathname.startsWith("/docs/signin/")}>
                  <Link href="/docs/signin">
                    <LogIn className="h-4 w-4" />
                    <span>Sign In</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/docs/signout" || pathname.startsWith("/docs/signout/")}>
                  <Link href="/docs/signout">
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/docs/metadata" || pathname.startsWith("/docs/metadata/")}>
                  <Link href="/docs/metadata">
                    <Lightbulb className="h-4 w-4" />
                    <span>metadata</span>
                  </Link>
                </SidebarMenuButton>
                {pathname === "/docs/metadata" || pathname.startsWith("/docs/metadata/") ? (
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={pathname === "/docs/metadata/session"}>
                        <Link href="/docs/metadata/session">
                          <Shield className="h-4 w-4" />
                          Session
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={pathname === "/docs/metadata/user"}>
                        <Link href="/docs/metadata/user">
                          <User className="h-4 w-4" />
                          User
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/docs/session" || pathname.startsWith("/docs/signout/")}>
                  <Link href="/docs/session">
                    <Shield className="h-4 w-4" />
                    <span>Session</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Client Side</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/docs/refresh" || pathname.startsWith("/docs/refresh/")}>
                  <Link href="/docs/refresh">
                    <KeyRound className="h-4 w-4" />
                    <span>Create Light Auth Client</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/docs/tutorial" || pathname.startsWith("/docs/tutorial/")}>
                  <Link href="/docs/tutorial">
                    <BookOpen className="h-4 w-4" />
                    <span>Tutorial</span>
                  </Link>
                </SidebarMenuButton>
                {pathname === "/docs/tutorial" || pathname.startsWith("/docs/tutorial/") ? (
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={pathname === "/docs/tutorial/basic-setup"}>
                        <Link href="/docs/tutorial/basic-setup">Basic Setup</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={pathname === "/docs/tutorial/authentication"}>
                        <Link href="/docs/tutorial/authentication">Authentication</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={pathname === "/docs/tutorial/authorization"}>
                        <Link href="/docs/tutorial/authorization">Authorization</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Reference</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/docs/concepts" || pathname.startsWith("/docs/concepts/")}>
                  <Link href="/docs/concepts">
                    <Lightbulb className="h-4 w-4" />
                    <span>Concepts</span>
                  </Link>
                </SidebarMenuButton>
                {pathname === "/docs/concepts" || pathname.startsWith("/docs/concepts/") ? (
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={pathname === "/docs/concepts/jwt-tokens"}>
                        <Link href="/docs/concepts/jwt-tokens">JWT Tokens</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={pathname === "/docs/concepts/authentication-flow"}>
                        <Link href="/docs/concepts/authentication-flow">Authentication Flow</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild isActive={pathname === "/docs/concepts/security-best-practices"}>
                        <Link href="/docs/concepts/security-best-practices">Security Best Practices</Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname === "/docs/api-reference"}>
                  <Link href="/docs/api-reference">
                    <Code className="h-4 w-4" />
                    <span>API Reference</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="px-3 py-2">
          <div className="rounded-md bg-blue-50 p-3">
            <div className="flex items-center gap-3">
              <div className="rounded-full bg-blue-100 p-1">
                <Lightbulb className="h-4 w-4 text-blue-600" />
              </div>
              <div className="text-sm font-medium">Need help?</div>
            </div>
            <div className="mt-2 text-xs">Our support team is available 24/7 to assist you with any questions or issues.</div>
            <div className="mt-3">
              <Link
                href="/support"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-700"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
