import { CodeBlock } from "@/components/code-block";
import { Callout } from "@/components/ui/callout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BellRing, BookOpen, Code, FileText, Info, Shield, ShieldCheck } from "lucide-react";
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
                  <ShieldCheck className="text-blue-600 dark:text-blue-200" />
                </div>
                <h3>Pattern 1: signIn Function</h3>
              </div>
              <p className="mb-4">
                Using the <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">signIn()</code> function from Light-Auth to perform a
                server-side redirect. This is typically used within form actions or server components.
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
                  <BellRing className="text-blue-600 dark:text-blue-200" />
                </div>
                <h3>Pattern 2: Direct URL Redirect</h3>
              </div>
              <p>
                Using a direct browser redirect to{" "}
                <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">/api/auth/signin/:providerName</code>. This approach works well for
                client-side components.
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
          <TabsTrigger value="form">Pattern 1: signIn Function</TabsTrigger>
          <TabsTrigger value="direct">Pattern 2: Direct URL</TabsTrigger>
        </TabsList>

        <TabsContent value="form">
          <h3>Using the signIn Function</h3>
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
  getSession, 
  getUser     
} = CreateLightAuth({providers: [googleProvider]});`}
          </CodeBlock>

          <div className="space-y-6">
            <h3>Basic Usage Using Server Actions (Next.js App Router)</h3>
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
          </div>
        </TabsContent>

        <TabsContent value="direct">
          <h3>Using Direct URL Redirect</h3>
          <p className="mb-4">
            The direct URL approach involves redirecting the user's browser to the Light-Auth authentication endpoint. This method is simple and works well for
            client-side components.
          </p>

          <div className="space-y-6">
            <p className="text-slate-700 dark:text-slate-300"></p>

            <h3 className="text-lg font-medium text-slate-900 dark:text-white">Basic Usage</h3>
            <CodeBlock lang="tsx" className="mb-4" title="./src/components/login-button.tsx">
              {`"use client";

export function LoginButton() {
  const handleLogin = () => {
    // Direct redirect to the authentication endpoint
    window.location.href = "/api/auth/signin/google";
  };
  
  return (
    <button
      onClick={handleLogin}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Sign in with Google
    </button>
  );
}`}
            </CodeBlock>

            <h3>With Callback URL</h3>

            <CodeBlock lang="tsx" className="mb-4" title="./src/components/login-button.tsx">
              {`"use client";

export function LoginButton({ callbackUrl = "/dashboard" }) {
  const handleLogin = () => {
    // Add callbackUrl as a query parameter
    window.location.href = \`/api/auth/signin/google?callbackUrl=\${encodeURIComponent(callbackUrl)}\`;
  };
  
  return (
    <button
      onClick={handleLogin}
      className="px-4 py-2 bg-blue-600 text-white rounded"
    >
      Sign in with Google
    </button>
  );
}`}
            </CodeBlock>
          </div>
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

      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardContent className="mt-4">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                  <ShieldCheck className="text-blue-600 dark:text-blue-200" />
                </div>
                <h3>Pattern 1: signOut Function</h3>
              </div>
              <p>
                Using the <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">signOut</code> function from Light-Auth to perform a
                server-side logout. This is typically used within form actions or server components.
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
                <span>Server-side logout</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="mt-4">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                  <BellRing className="text-blue-600 dark:text-blue-200" />
                </div>
                <h3>Pattern 2: Direct URL Redirect</h3>
              </div>
              <p>
                Using a direct browser redirect to <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">/api/auth/signout</code>. This
                approach works well for client-side components.
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
      </div>

      <Tabs defaultValue="form" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="form">Pattern 1: signOut Function</TabsTrigger>
          <TabsTrigger value="direct">Pattern 2: Direct URL</TabsTrigger>
        </TabsList>

        <TabsContent value="form">
          <h3>Using the signOut Function</h3>
          <p className="text-slate-700 dark:text-slate-300">
            The <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">signOut</code> function is imported from your Light-Auth
            configuration and can be used to programmatically initiate the logout process. This approach is ideal for server components or server actions.
          </p>
          <div className="space-y-6">
            <h3 className="text-lg font-medium text-slate-900 dark:text-white">Basic Usage Using Server Actions (Next.js App Router)</h3>

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
          </div>
        </TabsContent>

        <TabsContent value="direct">
          <h3>Using Direct URL Redirect for Logout</h3>
          <p>
            The direct URL approach for logout involves a form submission from the user's browser to the Light-Auth logout endpoint. This method is simple and
            works well for client-side components.
          </p>

          <div className="space-y-6">
            <Callout variant="warning">
              <strong>Important:</strong> Unlike the login endpoint which accepts GET requests, the logout endpoint requires a POST request for security
              reasons. This means you'll need to use a form submission or fetch API to properly logout.
            </Callout>

            <h3>Basic Usage with Form</h3>

            <CodeBlock lang="tsx" className="mb-4" title="./src/components/logout-client.tsx">
              {`"use client";

export function LogoutForm() {
  return (
    <form action="/api/auth/signout" method="POST">
      <input type="hidden" name="callbackUrl" value="/" />
      <button
        type="submit"
        className="px-4 py-2 bg-red-600 text-white rounded"
      >
        Sign out
      </button>
    </form>
  );
}`}
            </CodeBlock>

            <h3 className="text-lg font-medium text-slate-900 dark:text-white">Using Fetch API</h3>

            <CodeBlock lang="tsx" className="mb-4" title="./src/components/logout-client.tsx">
              {`"use client";

export function LogoutButton() {
  const handleLogout = async () => {
    const response = await fetch("/api/auth/signout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        callbackUrl: "/",
        revokeToken: true, // Optional: revoke the consent from the provider
      }),
    });
    
    if (response.ok) {
      window.location.href = "/";
    }
  };
  
  return (
    <button
      onClick={handleLogout}
      className="px-4 py-2 bg-red-600 text-white rounded"
    >
      Sign out
    </button>
  );
}`}
            </CodeBlock>
          </div>
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
                <code>callbackUrl</code>
              </TableCell>
              <TableCell>string</TableCell>
              <TableCell>URL to redirect to after successful logout (default to "/")</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
                <code>revokeToken</code>
              </TableCell>
              <TableCell>boolean</TableCell>
              <TableCell>Whether to revoke the consent from the provider (if available)</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
