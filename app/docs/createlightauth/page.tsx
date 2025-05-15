import { CodeBlock } from "@/components/code-block";
import { ExternalLink } from "@/components/external-link";
import { Badge } from "@/components/ui/badge";
import { Callout } from "@/components/ui/callout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Info } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication Flow - Light-Auth Documentation",
  description: "Understanding the authentication flow in Light-Auth.",
};

export default function CreateLightAuthPage() {
  return (
    <div className="space-y-6">
      <h1>Create Light Auth</h1>
      <p className="text-lg text-muted-foreground">
        Understanding how to call the <code>CreateLightAuth</code> method.
      </p>

      <section id="overview" className="mb-12 mx-auto">
        <h2>
          <BookOpen className="text-blue-600 mr-2" />
          Overview
        </h2>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          The <code>CreateLightAuth()</code> method is the entry point for initializing Light-Auth in your application. It allows you to configure
          authentication providers and set up the necessary options for your authentication flow.
        </p>
        <Callout variant="default" className="mb-4">
          Light-Auth uses{" "}
          <ExternalLink href="https://arcticjs.dev/" target="_blank">
            Arctic v3
          </ExternalLink>{" "}
          for OAuth provider integration. Arctic is a collection of OAuth 2.0 clients for popular providers.
        </Callout>
        <div className="space-y-6">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-medium mr-3">
              1
            </div>
            <div>
              <h3 className="font-medium text-slate-900 dark:text-white">Configure Providers</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Set up one or more authentication providers (Google, Microsoft, GitHub, etc.) with their respective credentials.
              </p>
            </div>
          </div>

          <div className="flex">
            <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-medium mr-3">
              2
            </div>
            <div>
              <h3 className="font-medium text-slate-900 dark:text-white">Call CreateLightAuth</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">
                Initialize Light-Auth with your providers and configuration options to get access to authentication methods and utilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="providers" className="mb-12 mx-auto">
        <h2>
          <BookOpen className="text-blue-600 mr-2" />
          Configuring Providers
        </h2>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          To configure providers, you need to create an instance of the <code>Provider</code> class for each provider you want to use. Each provider requires
          specific credentials and options.
        </p>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          More information about the providers and their options can be found in the{" "}
          <ExternalLink href="https://arcticjs.dev" target="_blank">
            Arctic documentation
          </ExternalLink>
          .
        </p>
        <CodeBlock lang="ts" className="mb-4" title="./src/app/auth.ts">
          {`import { Google, MicrosoftEntraId } from "arctic";
import { CreateLightAuth } from "@light-auth/nextjs";
import { LightAuthProvider } from "@light-auth/core";

// Configure Google provider
const googleProvider: LightAuthProvider = {
  providerName: "google",
  arctic: new Google(
    GOOGLE_CLIENT_ID, 
    GOOGLE_CLIENT_SECRET, 
    "http://localhost:3000/api/auth/callback/google"),
  searchParams: new Map([["access_type", "offline"]]),
};

// Configure Microsoft provider
const microsoftProvider: LightAuthProvider = {
  providerName: "microsoft",
  arctic: new MicrosoftEntraId(
    process.env.MICROSOFT_ENTRA_ID_TENANT_ID,
    process.env.MICROSOFT_ENTRA_ID_CLIENT_ID,
    process.env.MICROSOFT_ENTRA_ID_CLIENT_SECRET,
    "http://localhost:3000/api/auth/callback/microsoft"
  ),
  scopes: ["offline_access"],
};`}
        </CodeBlock>
        <Callout variant="success" className="mb-4">
          The two previous code snippets are also configuring each provider for offline access. <br />
          This means that the access token will be refreshed automatically when it expires, allowing you to make API calls without requiring the user to log in
          again.
          <br />
          More information about offline access can be found in the{" "}
          <ExternalLink href="/docs/offline-access" target="_blank">
            offline access documentation
          </ExternalLink>
          .
        </Callout>

        <Table className="w-full border-collapse">
          <TableHeader>
            <TableRow className="bg-slate-100 dark:bg-slate-800">
              <TableHead className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                Option
              </TableHead>
              <TableHead className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                Type
              </TableHead>
              <TableHead className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
                providerName
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <code>string</code>
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                Unique identifier for the provider
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
                arctic
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <code>ArcticProvider</code>
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                Instance of an Arctic OAuth provider
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
                scopes
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <code>string[]</code>
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <Badge variant={"outline"} className="mr-2">
                  Optional
                </Badge>{" "}
                Additional OAuth scopes to request
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
                searchParams
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <code>Map&lt;string, string&gt;</code>
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <Badge variant={"outline"} className="mr-2">
                  Optional
                </Badge>{" "}
                Additional parameters for the authorization URL
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
                headers
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <code>Map&lt;string, string&gt;</code>
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <Badge variant={"outline"} className="mr-2">
                  Optional
                </Badge>{" "}
                Additional headers for the authorization request
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
      <section id="overview" className="mb-12 mx-auto">
        <h2>
          <BookOpen className="text-blue-600 mr-2" />
          CreateLightAuth
        </h2>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          After configuring your providers, call the <code>CreateLightAuth</code> method to initialize Light-Auth and get access to authentication utilities:
        </p>
        <CodeBlock lang="ts" className="mb-4" title="./src/app/auth.ts">
          {`import { CreateLightAuth } from "@light-auth/nextjs";
import { LightAuthProvider } from "@light-auth/core";
import { Google, MicrosoftEntraId } from "arctic";

// Provider configurations (from previous step)
const googleProvider: LightAuthProvider = { /* ... */ };
const microsoftProvider: LightAuthProvider = { /* ... */ };

export const { 
  providers,  // Array of configured providers
  handlers,   // API route handlers
  signIn,     // Function to initiate sign-in
  signOut,    // Function to sign out
  getSession, // Function to get the current session
  getUser     // Function to get the complete user data
} = CreateLightAuth({
  providers: [googleProvider, microsoftProvider],

  // Optional configuration options:
  basePath : "/api/auth",
  env : process.env,
  router :  exampleRouter ,
  sessionStore : exampleSessionStore,
  userAdapter : exampleUserAdapter,

  // Optional callbacks:
  onSessionSaving: async (session, tokens) => {},
  onSessionSaved: async (session, tokens) => {},
  onUserSaving: async (user, tokens) => {},
  onUserSaved: async (user, tokens) => {},

});`}
        </CodeBlock>

        <Table className="w-full border-collapse mb-2">
          <TableHeader>
            <TableRow className="bg-slate-100 dark:bg-slate-800">
              <TableHead className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                Option
              </TableHead>
              <TableHead className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                Type
              </TableHead>
              <TableHead className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
                providers
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <code>LightAuthProvider</code>
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                List of configured providers
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
                basePath
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <code>string</code>
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <Badge variant={"outline"} className="mr-2">
                  Optional
                </Badge>{" "}
                Base path for the API routes. Default: "/api/auth"
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
                env
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <code>{` [key: string]: string | undefined `}</code>
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <Badge variant={"outline"} className="mr-2">
                  Optional
                </Badge>{" "}
                Additional OAuth scopes to request
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
                router
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <code>LightAuthRouter</code>
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <Badge variant={"outline"} className="mr-2">
                  Optional
                </Badge>{" "}
                Router instance for handling redirects and navigation.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
                sessionStore
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <code>LightAuthSessionStore</code>
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <Badge variant={"outline"} className="mr-2">
                  Optional
                </Badge>{" "}
                Session store instance for persisting user sessions.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
                userAdapter
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <code>LightAuthUserAdapter</code>
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <Badge variant={"outline"} className="mr-2">
                  Optional
                </Badge>{" "}
                <Badge variant={"outline"} className="mr-2">
                  Default NULL
                </Badge>{" "}
                User adapter instance for handling user data.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Callout variant="info" className="mb-4">
          All the optional features are implemented by your specific <strong>light-auth</strong> package (e.g., <code>light-auth-nextjs</code>,{" "}
          <code>light-auth-express</code>, <code>light-auth-astro</code>) except for the user adapter, which is null by default.
        </Callout>

        <Table className="w-full border-collapse mb-2">
          <TableHeader>
            <TableRow className="bg-slate-100 dark:bg-slate-800">
              <TableHead className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                Option
              </TableHead>
              <TableHead className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                Type
              </TableHead>
              <TableHead className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-left text-sm font-medium text-slate-700 dark:text-slate-300">
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
                onSessionSaving
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <code>{`(session, claims) => LightAuthSession`}</code>
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <Badge variant={"outline"} className="mr-2">
                  Optional
                </Badge>{" "}
                Callback for modifying the session before saving it.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
                onSessionSaved
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <code>{`(session) => void`}</code>
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <Badge variant={"outline"} className="mr-2">
                  Optional
                </Badge>{" "}
                Callback for actions after the session is saved.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
                onUserSaving
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <code>{`(user, claims) => LightAuthUser`}</code>
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <Badge variant={"outline"} className="mr-2">
                  Optional
                </Badge>{" "}
                Callback for modifying the user before saving it.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300 font-mono">
                onUserSaved
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <code>{`(user) => void`}</code>
              </TableCell>
              <TableCell className="border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-300">
                <Badge variant={"outline"} className="mr-2">
                  Optional
                </Badge>{" "}
                Callback for actions after the user is saved.
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
