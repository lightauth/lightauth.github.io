import { Bullet } from "@/components/bullet";
import { CodeBlock } from "@/components/code-block";
import { Callout } from "@/components/ui/callout";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Check, ExternalLink, FileText, Info, SplineIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Authentication Flow - Light-Auth Documentation",
  description: "Understanding the authentication flow in Light-Auth.",
};

export default function SessionPage() {
  return (
    <div className="space-y-6">
      <h1>Session</h1>
      <p className="text-lg text-muted-foreground">Understanding how session is working.</p>

      <div className="space-y-4">
        <h2>
          <BookOpen className="text-blue-600 mr-2" />
          Overview
        </h2>
        <p>Light-Auth implements a secure, modern authentication flow based on JWT tokens.</p>
        <p>
          This page explains what is the session token and the difference between the session object, retrieved with getSession() and the user object, retrieved
          with getUser().
        </p>
        <h2>
          <BookOpen className="text-blue-600 mr-2" />
          Authentication flow
        </h2>

        <p>The authentication process in Light-Auth is designed to be simple and secure. It involves the following steps:</p>

        <Card>
          <CardContent>
            <div className="flex flex-col items-center">
              <div className="w-full my-8">
                <div className="relative">
                  {/* Authentication Flow Diagram */}
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
                    {/* Web App */}
                    <div className="flex flex-col items-center">
                      <div className="w-32 h-20 bg-blue-100 rounded-lg flex items-center justify-center border border-blue-200">
                        <span className="font-medium text-blue-800">Your Web App</span>
                      </div>
                      <span className="text-sm text-gray-500 mt-2">NextJS, Astro, Nuxt ...</span>
                    </div>

                    {/* Arrows */}
                    <div className="flex flex-col items-center">
                      <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                      <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                      <div className="text-xs text-gray-500 my-1">1. Authentication Request</div>
                      <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                      <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                    </div>

                    {/* Light-Auth */}
                    <div className="flex flex-col items-center">
                      <div className="w-32 h-20 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="font-medium text-white">Light-Auth</span>
                      </div>
                      <span className="text-sm text-gray-500 mt-2">Authentication Service</span>
                    </div>

                    {/* Arrows */}
                    <div className="flex flex-col items-center">
                      <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                      <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                      <div className="text-xs text-gray-500 my-1">2. OpenID Connect</div>
                      <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                      <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                    </div>

                    {/* Provider */}
                    <div className="flex flex-col items-center">
                      <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                        <span className="font-medium text-gray-800">Provider</span>
                      </div>
                      <span className="text-sm text-gray-500 mt-2">Google, Github, Microsoft...</span>
                    </div>
                  </div>

                  {/* Return Flow */}
                  <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
                    {/* Client */}
                    <div className="flex flex-col items-center">
                      <div className="w-32 h-20 bg-blue-100 rounded-lg flex items-center justify-center border border-blue-200">
                        <span className="font-medium text-blue-800">You Web App</span>
                      </div>
                    </div>

                    {/* Arrows */}
                    <div className="flex flex-col items-center">
                      <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                      <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                      <div className="text-xs text-gray-500 my-1">4. JWT Token / Cookies</div>
                      <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                      <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                    </div>

                    {/* Light-Auth */}
                    <div className="flex flex-col items-center">
                      <div className="w-32 h-20 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="font-medium text-white">Light-Auth</span>
                      </div>
                      <span className="text-sm text-gray-500 mt-2">Authentication Service</span>
                    </div>

                    {/* Arrows */}
                    <div className="flex flex-col items-center">
                      <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                      <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                      <div className="text-xs text-gray-500 my-1">3. Response</div>
                      <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                      <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                    </div>

                    {/* Database */}
                    <div className="flex flex-col items-center">
                      <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                        <span className="font-medium text-gray-800">Provider</span>
                      </div>
                      <span className="text-sm text-gray-500 mt-2">Google, Github, Microsoft...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2>
          <BookOpen className="text-blue-600 mr-2" />
          Session object
        </h2>

        <p>
          The session object represents the current user's session. It contains the minimal amount of information about the user's authentication status and
          session expiration.
        </p>
        <p>
          The session object is filled with the information returned by the provider, contained in the JWT token. <br />
          It is important to note that the session object does not contain any sensitive information, such as the access token or refresh token or any other
          private data.
        </p>
        <p>
          The session object is returned by the <code>getSession()</code> function. It contains the following fields:
        </p>

        <CodeBlock lang="json">
          {`"session": {
  "id": "abc123",
  "userId": "provider-user-id",
  "email": "john.doe@contoso.com",
  "name": "John Doe",
  "providerName": "google",
  "expiresAt": "2023-10-01T00:00:00Z"
}`}
        </CodeBlock>

        <p>
          By default, (you can change this in the configuration) the session object is stored in a crypted and secure cookie. <br />
        </p>

        <p>
          All the others information are stored in the user object, and the user object is not store in a cookie, but in a datastore (Redis, MongoDB, etc.).{" "}
          <br />
          The user object is returned by the <code>getUser()</code> function. See documentation
        </p>
      </div>
      <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">Get the Session object </h3>
      <p>
        You can get the session object by using the <code>getSession()</code> function. This function is available in the <code>auth</code> module.
      </p>
      <CodeBlock lang="tsx" title="src/app/home.tsx">
        {`import { getSession } from "@/lib/auth";

export default async function Home() {
  const session = await getSession();

  return (
    <div>
      {session != null ? (
        <div>
          <p>✅ You are logged in!</p>
          <div>Session Id: {session.id}</div>
          <div>Session Email: {session.email}</div>
          <div>Session Name: {session.name}</div>
          <div>Session Provider: {session.providerName}</div>
          <div>Session UserId: {session.userId}</div>
          <div>Session Expiration: {session.expiresAt.toString()}</div>
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

      <p>
        From the client side you can get the client session object by using the <code>getSession()</code> function from the client sdk, using the{" "}
        <code>CreateLightAuthClient</code> function.
      </p>
      <p>Here is an example of how to get the session object from the client side, using a react hook:</p>
      <CodeBlock lang="tsx" title="src/app/client-component.tsx">
        {`"use client";

import { CreateLightAuthClient } from "@light-auth/nextjs/client";

export const { getSession, getUser } = CreateLightAuthClient();

export function useSession() {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        async function fetchSession() {
          const session = await getSession();
          setSession(session);
        }
        fetchSession();
    }, []);

    return session;
}`}
      </CodeBlock>

      <Callout variant="success" className="mt-4">
        The <code>CreateLightAuthClient</code> function is used to create a client-side instance of Light-Auth. It provides the same functions as the
        server-side instance, but is designed to work in a client-side environment. <br />
        You may probably create a <code>/app/auth-client.ts</code> file to export the client instance, and use it in your client components.
      </Callout>

      <h2>
        <BookOpen className="text-blue-600 mr-2" />
        Session vs User
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          The session object is a lightweight representation of the user's session, while the user object contains more detailed information about the user.
        </li>
        <li>
          The session object is used to manage the user's session, while the user object is used to manage the user's profile and other related information.
        </li>
        <li>The session object is stored in a secure cookie, while the user object is stored in a datastore.</li>
        <li>
          The session object is returned by the <code>getSession()</code> function, while the user object is returned by the <code>getUser()</code> function.
        </li>
      </ul>
      <p>
        More information about the user object can be found in the{" "}
        <Link href="/docs/metadata/user" className="text-blue-600 hover:underline inline-flex">
          User documentation
          <ExternalLink className="ml-2 h-4 w-4 self-center" />
        </Link>
        .
      </p>

      <h2>
        <BookOpen className="text-blue-600 mr-2" />
        Add custom Session and User properties
      </h2>
      <div>
        <p>You can add custom properties to the Session (or User) object by:</p>
        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
          <li className="flex items-start">
            <Bullet>1</Bullet>
            Extending the <code>Session</code> (or / and the <code>User</code>) object with a custom interface
          </li>
          <li className="flex items-start">
            <Bullet>2</Bullet>
            Using the <code>onSessionSaving</code> (or / and the <code>onUserSaving</code>) function in the configuration.
          </li>
        </ul>
      </div>
      <p>
        Here is an example where we get the <code>given_name</code> and <code>family_name</code> from the <code>idToken</code> and add them to the session
        object.
        <br />
        Then we get others properties from the idToken and add them to the user object:
      </p>

      <h3>Add some custom properties to the session object by extending the session interface:</h3>

      <CodeBlock lang="ts" title="src/app/auth.ts">{`import { LightAuthSession, LightAuthUser } from "@light-auth/core";

export type MyLightAuthSession = LightAuthSession & {
  // Add any additional properties you want to include in your custom session type
  firstName?: string;
  lastName?: string;
};

export type MyLightAuthUser = LightAuthUser<MyLightAuthSession> & {
  // Add any additional properties you want to include in your custom user type
  email_verified?: boolean;
  iss?: string;
  sub?: string;
};
`}</CodeBlock>

      <h3>Get custom properties from the authentication providers:</h3>

      <p>
        Add the custom properties values to the session object by using the <code>onSessionSaving</code> and to the user object using the{" "}
        <code>onUserSaving</code> function in the configuration:
      </p>

      <CodeBlock lang="ts" title="src/app/auth.ts">{`export const { providers, handlers, signIn, signOut, getSession, getUser } =
  CreateLightAuth<MyLightAuthSession, MyLightAuthUser>({
    providers: [googleProvider, microsoftProvider],
    onSessionSaving: async (session, tokens) => {
      if (!tokens) return session;
      if (!tokens.idToken()) return session;

      // Add custom claims to the session
      // This example adds the first and last name from the idToken to the session
      const idToken = JSON.parse(
        Buffer.from(tokens.idToken().split(".")[1], "base64").toString()
      );

      if ("given_name" in idToken && typeof idToken.given_name === "string")
        session["firstName"] = idToken.given_name;

      if ("family_name" in idToken && typeof idToken.family_name === "string")
        session["lastName"] = idToken.family_name;

      return session;
    },

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

      <h2>
        <BookOpen className="text-blue-600 mr-2" />
        Session Store
      </h2>

      <p>
        The session store is a secure cookie that contains the session object. The session store is used to manage the user's session and is automatically
        created when the user logs in.
      </p>
      <p>You can change the default session store by modifying the configuration:</p>

      <CodeBlock lang="ts" title="src/app/auth.ts">
        {`export const { providers, handlers, signIn, signOut, getSession, getUser } =
  CreateLightAuth({
    providers: [googleProvider, microsoftProvider],
    sessionStore: redisSessionStore,
  });
`}
      </CodeBlock>

      <p>
        The session store can be any object that implements the <code>SessionStore</code> interface:
      </p>

      <CodeBlock lang="ts" title="src/app/auth.ts">
        {`export interface LightAuthSessionStore {
  getSession: (args: { config: LightAuthConfig; [key: string]: unknown }) => Promise<LightAuthSession | null>;
  setSession: (args: { config: LightAuthConfig; session: LightAuthSession; [key: string]: unknown }) => Promise<BaseResponse>;
  deleteSession: (args: { config: LightAuthConfig; [key: string]: unknown }) => Promise<BaseResponse>;
  generateSessionId: () => string;
}`}
      </CodeBlock>
    </div>
  );
}
