import { Bullet } from "@/components/bullet";
import { CodeBlock } from "@/components/code-block";
import { Callout } from "@/components/ui/callout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Info } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication Flow - Light-Auth Documentation",
  description: "Understanding the authentication flow in Light-Auth.",
};

export default function MetadataPage() {
  return (
    <div className="space-y-6">
      <h1>User management</h1>
      <p className="text-lg text-muted-foreground">Understanding how user information is handled by light-auth.</p>

      <section id="user-object-overview" className="mb-12">
        <div className="mx-auto">
          <h2>
            <BookOpen className="text-blue-600 mr-2" />
            User Object Overview
          </h2>

          <p className="mb-4">
            The <code>user</code> object is a core component of <strong>Light-Auth</strong> that stores complete user information retrieved from authentication
            providers.
            <br />
            It extends the <code>session</code> object, inheriting its essential authentication properties while adding additional metadata from the{" "}
            <strong>JWT token</strong>.
          </p>
          <h3 className="text-lg font-medium text-slate-900 dark:text-white mt-6 mb-3">Inheritance Structure</h3>
          <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 mb-6">
            <div className="flex flex-col items-center">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-md mb-2">Session Object</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-slate-400 my-1"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
              <div className="bg-blue-500 text-white px-4 py-2 rounded-md">User Object</div>
            </div>
          </div>
          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">Properties</h3>
          <div className="mb-6">
            <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">Inherited from Session</h4>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 mb-4">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-start">
                  <span className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs px-2 py-1 rounded mr-2 font-mono">userId</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">User's unique identifier</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs px-2 py-1 rounded mr-2 font-mono">name</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">User's display name</span>
                </li>{" "}
                <li className="flex items-start">
                  <span className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs px-2 py-1 rounded mr-2 font-mono">email</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">User's email address</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs px-2 py-1 rounded mr-2 font-mono">
                    providerName
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Name of the authentication provider</span>
                </li>
              </ul>
            </div>

            <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">User-specific Properties</h4>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              The properties below are specific to the User object and are not inherited from the Session object. They contain additional metadata and
              information about the user.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              Be careful, these properties depends on the authentication provider used. For example, the <code>picture</code> property may not be available for
              all providers.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              <code>refreshToken</code> is only retrieved if the provider supports it, and is configured for offline access. If not, it will be{" "}
              <code>undefined</code>.
            </p>

            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 mb-4">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <li className="flex items-start">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded mr-2 font-mono">picture</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">URL to user's profile picture</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded mr-2 font-mono">accessToken</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">OAuth access token for API calls</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded mr-2 font-mono">
                    accessTokenExpiresAt
                  </span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Expiration timestamp for access token</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded mr-2 font-mono">refreshToken</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Token used to refresh the access token</span>
                </li>
              </ul>
            </div>

            <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">NOT Inherited from Session</h4>
            <p className="text-slate-700 dark:text-slate-300 mb-3">
              Certain session-specific properties, such as <code>id</code> and <code>expiresAt</code>, exist only for the duration of the session and are not
              passed on to the User object:
            </p>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 mb-4">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 line-through">
                <li className="flex items-start">
                  <span className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs px-2 py-1 rounded mr-2 font-mono">id</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400 ">Session Id</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs px-2 py-1 rounded mr-2 font-mono">expiresAt</span>
                  <span className="text-sm text-slate-600 dark:text-slate-400">Session expiration timestamp</span>
                </li>
              </ul>
            </div>
          </div>
          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">User Object Example</h3>
          <CodeBlock lang="json">
            {`{
  // Inherited from Session
  "userId": "user_123456",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "providerName": "google",
  
  // User-specific properties
  "picture": "https://example.com/profile.jpg",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "accessTokenExpiresAt": "2023-06-30T23:59:59Z",
  "refreshToken": "rt_abcdefghijklmnopqrstuvwxyz",
  
  // Provider-specific data
  "firstName": "John",
  "lastName": "Doe",
  "locale": "en-US"
}`}
          </CodeBlock>
          <Callout variant="info" className="mt-4">
            The User object can contain additional provider-specific properties that vary depending on the authentication provider used (Google, GitHub,
            Microsoft, etc.).
          </Callout>
        </div>
      </section>
      <section id="user-object-usage" className="mb-12">
        <div className="mx-auto">
          <h2>
            <BookOpen className="text-blue-600 mr-2" />
            Configuration
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">Add the user adapter to your config and retrieve it from your page.</p>

          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">Add User Adapter to your configuration</h3>

          <Callout variant="success" className="mb-4">
            This example demonstrates how to assign a user adapter using the <code>userAdapter</code> property in your configuration.
            <br />
            While the code is redundant—since this behavior occurs by default—it is included to highlight how to explicitly set a user adapter.
          </Callout>

          <CodeBlock lang="tsx" title="./src/auth.ts" className="mb-4">
            {`export const { providers, handlers, signIn, signOut, getSession, getUser } =
  CreateLightAuth({
    providers: [googleProvider, microsoftProvider],
    userAdapter: createLightAuthUserAdapter({ base: "./users_db", isEncrypted: false })
  })`}
          </CodeBlock>

          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">Retrieving the user object from your web application</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Like the session object, the user object is easily accessible using the <code>getUser()</code> method.
          </p>
          <CodeBlock lang="tsx" title="./src/app/home.tsx">
            {`import { getSession, getUser } from "@/lib/auth";
import { Avatar, AvatarImage } from "./ui/avatar";

export default async function Home() {
  const session = await getSession();
  const user = await getUser();

  return (
    <div>
      {session != null ? (
        <div>
          <p>✅ You are logged in!</p>
          {user != null && (
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.picture} alt={user.name} />
            </Avatar>
            )}        
        </div>
      ) : (
        <div>
          <p>⚠️ You are not logged in</p>
          <a href="/login"> Go to Login Page </a>
        </div>
      )}
    </div>
  );
}`}
          </CodeBlock>
        </div>
      </section>

      <section id="user-object-extending" className="mb-12">
        <h2>
          <BookOpen className="text-blue-600 mr-2" />
          Add custom User properties
        </h2>
        <div>
          <p>You can add custom properties to the User object by:</p>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li className="flex items-start">
              <Bullet>1</Bullet>
              Extending the <code>User</code> object with a custom interface
            </li>
            <li className="flex items-start">
              <Bullet>2</Bullet>
              Using the <code>onUserSaving</code> function in the configuration.
            </li>
          </ul>
        </div>
        <p>Here is an example where we get additional properties from the id token and add them to the user object.</p>

        <h3 className="mb-2">Add some custom properties to the user object by extending the user interface:</h3>

        <CodeBlock lang="ts" title="src/app/auth.ts">{`import { LightAuthSession, LightAuthUser } from "@light-auth/core";

export type MyLightAuthUser = LightAuthUser<LightAuthSession> & {
  // Add any additional properties you want to include in your custom user type
  email_verified?: boolean;
  iss?: string;
  sub?: string;
};
`}</CodeBlock>

        <h3 className="mb-2">Get custom properties from the authentication providers:</h3>

        <p>
          Add the custom properties values to the user object by using the <code>onUserSaving</code> function in the configuration:
        </p>

        <CodeBlock lang="ts" title="src/app/auth.ts">{`export const { providers, handlers, signIn, signOut, getSession, getUser } =
  CreateLightAuth<LightAuthSession, MyLightAuthUser>({
    providers: [googleProvider, microsoftProvider],

  onUserSaving: async (user, tokens) => {
    if (!tokens) return user;
    if (!tokens.idToken()) return user;

    // optional: Add custom claims to the user
    const idToken = JSON.parse(Buffer.from(tokens.idToken().split(".")[1], "base64").toString());

    if ("iss" in idToken && typeof idToken.iss === "string") user.iss = idToken.iss;
    if ("email_verified" in idToken && typeof idToken.email_verified === "boolean") user.email_verified = idToken.email_verified;
    if ("sub" in idToken && typeof idToken.sub === "string") user.sub = idToken.sub;

    return user;
  },    
  });`}</CodeBlock>
      </section>

      <section id="user-adapter" className="mb-12">
        <div className="mx-auto">
          <h2>
            <BookOpen className="text-blue-600 mr-2" />
            The UserAdapter
          </h2>

          <p className="text-slate-700 dark:text-slate-300 mb-4">
            The UserAdapter is an abstract class that defines how User objects are stored and retrieved in Light-Auth. It provides a consistent interface for
            different storage backends, allowing you to choose the most appropriate storage solution for your application.
          </p>

          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">Built-in Adapters</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
              <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">FileUserAdapter</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Stores user data in JSON files on the server's file system.</p>
              <ul className="list-disc pl-5 text-xs text-slate-500 dark:text-slate-400">
                <li>Simple setup with no additional dependencies</li>
                <li>Good for development or small applications</li>
                <li>Not suitable for distributed environments</li>
              </ul>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
              <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">DatabaseUserAdapter</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Stores user data in a database through a configurable database connector.</p>
              <ul className="list-disc pl-5 text-xs text-slate-500 dark:text-slate-400">
                <li>Scalable and suitable for production</li>
                <li>Works with various database backends</li>
                <li>Supports distributed environments</li>
              </ul>
            </div>
          </div>

          <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">UserAdapter Interface</h3>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            The UserAdapter abstract class defines the following methods that must be implemented by any concrete adapter:
          </p>
          <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 mb-6">
            <CodeBlock lang="ts">
              {`export interface LightAuthUserAdapter {
  getUser: (args: { config: LightAuthConfig; userId: string; [key: string]: unknown }) => LightAuthUser | null | Promise<LightAuthUser | null>;
  setUser: (args: { config: LightAuthConfig; user: LightAuthUser; [key: string]: unknown }) => Promise<void>;
  deleteUser: (args: { config: LightAuthConfig; user: LightAuthUser; [key: string]: unknown }) => Promise<void>;
}`}
            </CodeBlock>
          </div>
        </div>
      </section>
    </div>
  );
}
