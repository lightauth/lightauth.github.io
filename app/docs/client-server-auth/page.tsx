import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Callout } from "@/components/ui/callout";
import { KeyRound, LucideScreenShare, ScreenShare, ScreenShareOff, Shield, ShipWheel, UserRound, WindIcon } from "lucide-react";
import { CodeBlock } from "@/components/code-block";

export default function ClientServerAuthPage() {
  return (
    <div className="space-y-6">
      <h1>Client and Server components</h1>

      <p>Understanding the two approaches for implementing authentication with Light-Auth</p>

      <Callout variant="info" className="mb-8">
        <strong>Light-Auth</strong> requires an SSR framework for all authentication logic. The server-side configuration is mandatory, but you have flexibility
        in how you implement the login/logout UI in your application.
      </Callout>

      <h1>Server-Side and Client-Side components: Understanding the Difference</h1>
      <h3>Light-Auth offers two approaches for implementing authentication in your application</h3>
      <p>
        Light-Auth is designed for server-side rendered (SSR) applications, where the core authentication logic runs on the server. However, you have
        flexibility in how you implement the user interface for login and logout operations:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <Card>
          <CardHeader className="py-3">
            <CardTitle className="flex items-center gap-4">
              <ScreenShare className="text-blue-600 dark:text-blue-200" />
              <h3>Server-Side Approach</h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start mb-4 gap-4">
            <div>
              Using the exported functions from your server configuration directly in server components, API routes, or server actions. This approach delegates
              all authentication logic to the server.
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
              <Shield className="text-blue-600 dark:text-blue-200" size={16} />
              <span>Maximum security</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="py-3">
            <CardTitle className="flex items-center gap-4">
              <UserRound className="text-blue-600 dark:text-blue-200" />
              <h3>Client-Side Approach</h3>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-start mb-4 gap-4">
            <div>
              Using the client-side wrapper functions to call authentication methods directly from client components. This approach still uses the server-side
              logic but provides a more convenient API for client components.
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
              <ShipWheel className="text-blue-600 dark:text-blue-200" size={16} />
              <span>Better developer experience</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Callout variant="warning" className="mb-8">
        <strong>Important:</strong> Regardless of which approach you choose, Light-Auth still requires server-side rendering and the server-side configuration.
        The client-side approach is just a convenient wrapper around the server-side functionality.
      </Callout>

      <Tabs defaultValue="server-side" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="server-side">Server-Side Approach</TabsTrigger>
          <TabsTrigger value="client-side">Client-Side Approach</TabsTrigger>
        </TabsList>

        <TabsContent value="server-side">
          <Card>
            <CardHeader>
              <CardTitle>Server-Side Components</CardTitle>
              <CardDescription>Using server components, API routes, or server actions for authentication</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                With the server-side approach, you use the functions exported from your Light-Auth configuration directly in server components, API routes, or
                server actions.
              </p>
              <p>This approach starts all the logic from the server.</p>

              <h3 className="mb-2">Server-Side Configuration</h3>

              <CodeBlock lang="ts" className="mb-4" title="/app/auth.ts">
                {`import { Google } from "arctic";
import { CreateLightAuth } from "@light-auth/nextjs";

const googleProvider = {
  providerName: "google",
  arctic: new Google(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "http://localhost:3000/api/auth/callback/google"
  ),
};

export const { providers, handlers, signIn, signOut, getAuthSession, getUser } = CreateLightAuth({providers: [googleProvider]});`}
              </CodeBlock>

              <h3 className="mb-2">Using Server Actions</h3>
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

              <h3 className="mb-2">Form Submission from a page using inline action</h3>
              <CodeBlock lang="ts" className="mb-4" title="login/page.tsx">
                {`import { signIn } from "@/lib/auth";
export default function LoginPage() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("google", "/profile");
        }}
      >
        <button type="submit">login using a form action</button>
      </form>
    </div>
  );
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

              <h3 className="mb-2">Advantages of Server-Side Approach</h3>
              <ul className="list-disc pl-5 space-y-2 ">
                <li>Maximum security as all authentication logic stays on the server</li>
                <li>Cleaner separation of concerns between client and server</li>
                <li>Better for applications with complex authentication requirements</li>
                <li>Easier to implement server-side redirects and error handling</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="client-side">
          <Card>
            <CardHeader>
              <CardTitle>Client-Side Authentication</CardTitle>
              <CardDescription>Using client components with the Light-Auth client wrapper</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                With the client-side approach, you use the{" "}
                <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">CreateLightAuthClient()</code> function to get client-side versions
                of the authentication functions.
                <br />
                <strong>This approach still uses the server-side logic</strong> but provides a more convenient API for client components.
              </p>

              <Callout variant="info" className="mb-4">
                <p>
                  <strong>Note:</strong> The client-side approach still requires the server-side configuration to be set up. The client-side functions are just
                  wrappers that make API calls to the server.
                  <br />
                  Don't forget to set up the server-side configuration first!
                </p>
              </Callout>

              <h3 className="mb-2">Client-Side Configuration</h3>

              <CodeBlock lang="ts" className="mb-4" title="/app/lib/auth-client.ts">
                {`"use client";

import { CreateLightAuthClient } from "@light-auth/nextjs/client";

export const { getAuthSession, getUser, signIn, signOut } = CreateLightAuthClient();`}
              </CodeBlock>

              <h3 className="mb-2">Client-Side login component</h3>
              <CodeBlock lang="tsx" className="mb-4" title="/app/components/login-button.tsx (Client Component)">
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

              <h3 className="mb-2">Using Client-Side User Data</h3>
              <CodeBlock lang="ts" className="mb-4" title="/app/components/login-button.tsx (Client Component)">
                {`"use client";

import { useEffect, useState } from "react";
import { getUser } from "@/lib/auth-client";

export function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await getUser();
        setUser(userData);
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchUser();
  }, []);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
    return <div>Please log in</div>;
  }
  
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <img src={user.picture || "/placeholder.svg"} alt={user.name} />
      <p>Email: {user.email}</p>
    </div>
  );
}`}
              </CodeBlock>

              <h3 className="text-lg font-medium text-slate-900 dark:text-white">Advantages of Client-Side Approach</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                <li>Better developer experience for client-side components</li>
                <li>Easier to integrate with client-side state management</li>
                <li>More familiar API for frontend developers</li>
                <li>Simpler implementation for basic authentication flows</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Choosing the Right Approach</CardTitle>
          <CardDescription>Guidelines for deciding between server-side and client-side authentication</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-slate-700 dark:text-slate-300">
              Both approaches have their strengths and can be used together in the same application. Here are some guidelines to help you choose the right
              approach for your needs:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Choose Server-Side When:</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                  <li>You need maximum security for authentication flows</li>
                  <li>You're working primarily with server components</li>
                  <li>You need complex authentication logic with custom validation</li>
                  <li>You want to minimize client-side JavaScript</li>
                  <li>You're implementing middleware for route protection</li>
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-6">
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">Choose Client-Side When:</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
                  <li>You're working primarily with client components</li>
                  <li>You need to integrate with client-side state management</li>
                  <li>You want a more interactive user experience</li>
                  <li>You're a frontend developer</li>
                  <li>You need to update UI based on authentication state</li>
                </ul>
              </div>
            </div>

            <Callout variant="success" className="mt-6">
              For most applications, a hybrid approach works best. Use server-side authentication for critical operations and route protection, and use
              client-side authentication for interactive UI components and user experience enhancements.
            </Callout>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
