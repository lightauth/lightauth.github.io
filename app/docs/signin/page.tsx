import { CodeBlock } from "@/components/code-block";
import { Callout } from "@/components/ui/callout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BellRing, BookOpen, Code, FileText, Info, ScreenShare, Shield, ShieldCheck, UserRound } from "lucide-react";
import type { Metadata } from "next";
import { ThemeToggle } from "@/components/theme-toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Image from "next/image";
import { Bullet } from "@/components/bullet";
import { ExternalLink } from "@/components/external-link";
export const metadata: Metadata = {
  title: "Authentication Flow - Light-Auth Documentation",
  description: "Understanding the authentication flow in Light-Auth.",
};

export default function SsrRequirementsPage() {
  return (
    <div className="space-y-6">
      <h1>Sign In & Sign Out</h1>
      <p className="text-lg text-muted-foreground">How Light-Auth handles sign in and sign out flows.</p>

      <h2>
        <BookOpen className="text-blue-600 mr-2" />
        Login Process Overview
      </h2>

      <div className="space-y-4">
        <p className="text-slate-700 dark:text-slate-300">
          Light-Auth provides two different patterns for implementing the login process in your application. Both approaches achieve the same result but offer
          different integration options depending on your application's architecture.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardContent className="mt-4">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                  <ScreenShare className="text-blue-600 dark:text-blue-200" />
                </div>
                <h3>Server-Side Approach</h3>
              </div>
              <p className="mb-4">
                Using the <code>signIn()</code> function exported from <code>CreateLightAuth()</code> to perform a server-side redirect. This is typically used
                within form actions or server components.
              </p>
              <div className="flex items-start space-x-2 text-sm text-slate-500 dark:text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                <span>Server-side redirect</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="mt-4">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                  <UserRound className="text-blue-600 dark:text-blue-200" />
                </div>
                <h3>Client-Side Approach</h3>
              </div>
              <p>
                Using the <code>signIn()</code> function exported from <code>CreateLightAuthClient()</code>. This approach still uses the server-side logic but
                provides a more convenient API for client components.
              </p>
              <div className="flex items-start space-x-2 text-sm text-slate-500 dark:text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                <span>Client-side redirect</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Callout variant="info">
          Both login patterns ultimately redirect the user to the OAuth provider's authorization page. After authentication, the user is redirected back to your
          application through the callback URL configured in your provider setup.
        </Callout>
      </div>

      <h2>
        <BookOpen className="text-blue-600 mr-2" />
        Login patterns
      </h2>

      <Tabs defaultValue="form" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="form">Pattern 1: Server side</TabsTrigger>
          <TabsTrigger value="direct">Pattern 2: Client side</TabsTrigger>
        </TabsList>

        <TabsContent value="form">
          <h3 className="mb-4">Using the server components</h3>
          <p className="mb-4">
            The <code>signIn</code> function is imported from your Light-Auth configuration (when calling <code>CreateLightAuth()</code>) and can be used to
            programmatically initiate the login process. This approach is ideal for server components or server actions.
          </p>
          <CodeBlock lang="ts" className="mb-4" title="./src/app/auth.ts">
            {`import { CreateLightAuth } from "@light-auth/nextjs";

export const { 
  providers,  
  handlers,   
  signIn,     // <--------- signIn function
  signOut,    
  getAuthSession, 
  getUser     
} = CreateLightAuth({providers: [googleProvider]});`}
          </CodeBlock>
          <h3 className="mb-2">
            <Bullet>1</Bullet> Basic Usage Using Server Actions (Next.js App Router)
          </h3>
          <CodeBlock lang="tsx" className="mb-4" title="./src/app/login-form.tsx">
            {`import { signIn } from "@/lib/auth";

export default function LoginPage() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Google (using a form action)</button>
      </form>
    </div>
  );
}`}
          </CodeBlock>
          <h3 className="mb-2">
            <Bullet>2</Bullet>Using Server Actions and a client component
          </h3>
          <CodeBlock lang="ts" className="mb-4" title="/app/api/login/action.ts (Server Action)">
            {`"use server";

import { signIn, signOut } from "@/lib/auth";

export async function login(providerName: string, callbackUrl: string = "/") {
  return await signIn(providerName, callbackUrl);
}

export async function logout(callbackUrl: string = "/", revokeToken: boolean = false) {
  return await signOut(revokeToken, callbackUrl);
}`}
          </CodeBlock>
          <h3 className="mb-2">Call from a client component</h3>
          <CodeBlock lang="ts" className="mb-4" title="/components/client-login-action-button.tsx">
            {`"use client";

import { login } from "@/app/api/login/action";

export function ClientLoginActionButton({ children, providerName, callbackUrl }: { children: React.ReactNode; providerName: string; callbackUrl: string }) {
  return (
    <button type="button" onClick={() => login(providerName, callbackUrl)}>
      {children}
    </button>
  );
}`}
          </CodeBlock>
        </TabsContent>

        <TabsContent value="direct">
          <h3 className="mb-2">Using client components</h3>
          <p className="mb-4">
            If you prefer to use a client-side approach, you can create a client component that handles the login process. This method is more straightforward
            and allows for easier integration with client-side libraries and frameworks.
          </p>

          <Callout variant="info" className="mb-4">
            <strong>Note:</strong> The client-side approach still relies on the server-side logic provided by Light-Auth
            <br />
            You still need to configure your providers and handlers in the server-side code, but you can use the client component to trigger the login process.
          </Callout>
          <CodeBlock lang="ts" className="mb-4" title="./src/app/auth.ts">
            {`import { CreateLightAuth } from "@light-auth/nextjs";

export const {providers, handlers} = CreateLightAuth({providers: [googleProvider]});`}
          </CodeBlock>
          <h3 className="mb-2">Add client components</h3>
          <p className="mb-4">
            As a convenient way to organize your code, you can create a client <code>auth-client.ts</code> file in your components directory. This file will
            contain the client components that handle the login process. You can then import and use these components in your application.
          </p>
          <CodeBlock lang="ts" className="mb-4" title="/app/lib/auth-client.ts">
            {`"use client";

import { CreateLightAuthClient } from "@light-auth/nextjs/client";

export const { getAuthSession, getUser, signIn, signOut } = CreateLightAuthClient();`}
          </CodeBlock>
          <h3 className="mb-2">Create a Login Button</h3>

          <CodeBlock lang="tsx" className="mb-4" title="./src/components/login-button.tsx">
            {`"use client";

import { signIn } from "@/lib/auth-client";

export function LoginButton() {
  const handleLogin = async () => {
    // Call the client-side signIn function
    await signIn("google", { callbackUrl: "/dashboard" });
  };
  
  return (
    <button onClick={handleLogin}>Sign in with Google</button>
  );
}`}
          </CodeBlock>
        </TabsContent>
      </Tabs>
      <h3>URL Parameters</h3>

      <div className="overflow-x-auto">
        <Table className="w-full border">
          <TableHeader>
            <TableRow className="bg-slate-100 dark:bg-slate-800">
              <TableHead>Parameter</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <code>providerName</code>
              </TableCell>
              <TableCell>string</TableCell>
              <TableCell>provider name to use</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>callbackUrl</code>
              </TableCell>
              <TableCell>string</TableCell>
              <TableCell>URL to redirect to after successful authentication (default to "/")</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <h2>
        <BookOpen className="text-blue-600 mr-2" />
        Logout Process Overview
      </h2>
      <p className="text-slate-700 dark:text-slate-300">
        Similar to the login process, Light-Auth provides two different patterns for implementing logout in your application. Both approaches achieve the same
        result but offer different integration options.
      </p>

      <Tabs defaultValue="form" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="form">Pattern 1: Server side</TabsTrigger>
          <TabsTrigger value="direct">Pattern 2: Client side</TabsTrigger>
        </TabsList>

        <TabsContent value="form">
          <h3 className="mb-4">Using server components</h3>
          <p className="text-slate-700 dark:text-slate-300">
            The <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">signOut</code> function is imported from your Light-Auth
            configuration and can be used to programmatically initiate the logout process. This approach is ideal for server components or server actions.
          </p>
          <h3 className="mb-2">Basic Usage Using Server Actions (Next.js App Router)</h3>

          <CodeBlock lang="tsx" className="mb-4" title="./src/app/logout-form.tsx">
            {`import { signOut } from "@/lib/auth";

export default function LogoutPage() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Logout (using a form action)</button>
      </form>
    </div>
  );
}`}
          </CodeBlock>
        </TabsContent>

        <TabsContent value="direct">
          <h3 className="mb-2">Using client components</h3>
          <p className="mb-4">
            If you prefer to use a client-side approach, you can create a client component that handles the login process. This method is more straightforward
            and allows for easier integration with client-side libraries and frameworks.
          </p>

          <Callout variant="info" className="mb-4">
            <strong>Note:</strong> The client-side approach still relies on the server-side logic provided by Light-Auth
            <br />
            You still need to configure your providers and handlers in the server-side code, but you can use the client component to trigger the login process.
          </Callout>
          <CodeBlock lang="ts" className="mb-4" title="./src/app/auth.ts">
            {`import { CreateLightAuth } from "@light-auth/nextjs";

export const {providers, handlers} = CreateLightAuth({providers: [googleProvider]});`}
          </CodeBlock>
          <h3 className="mb-2">Add client components</h3>
          <p className="mb-4">
            As a convenient way to organize your code, you can create a client <code>auth-client.ts</code> file in your components directory. This file will
            contain the client components that handle the login process. You can then import and use these components in your application.
          </p>
          <CodeBlock lang="ts" className="mb-4" title="/app/lib/auth-client.ts">
            {`"use client";

import { CreateLightAuthClient } from "@light-auth/nextjs/client";

export const { getAuthSession, getUser, signIn, signOut } = CreateLightAuthClient();`}
          </CodeBlock>
          <h3 className="mb-2">Create a Logout Button</h3>

          <CodeBlock lang="tsx" className="mb-4" title="./src/components/logout-button.tsx">
            {`"use client";

import { signOut } from "@/lib/auth-client";

export function LogoutButton() {
  const handleLogout = async () => {
    // Call the client-side signOut function
    await signOut(false, "/dashboard");
  };
  
  return (
    <button onClick={handleLogout}>Sign out</button>
  );
}`}
          </CodeBlock>
        </TabsContent>
      </Tabs>

      <h3 className="text-lg font-medium text-slate-900 dark:text-white">signOut Function Options</h3>
      <div className="overflow-x-auto">
        <Table className="w-full border">
          <TableHeader>
            <TableRow className="bg-slate-100 dark:bg-slate-800">
              <TableHead>Option</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <code>revokeToken</code>
              </TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>Whether to revoke the consent from the provider (if available)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <code>callbackUrl</code>
              </TableCell>
              <TableCell>string</TableCell>
              <TableCell>URL to redirect to after successful logout (default to "/")</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
