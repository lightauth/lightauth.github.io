import { CodeBlock } from "@/components/code-block";
import { FileText, Info } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication Flow - Light-Auth Documentation",
  description: "Understanding the authentication flow in Light-Auth.",
};

export default function SessionPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Sesion</h1>
      <p className="text-lg text-muted-foreground">Understanding how session is working.</p>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p>Light-Auth implements a secure, modern authentication flow based on JWT tokens.</p>
        <p>
          This page explains what is the session token and the difference between the session object, retrieved with getSession() and the user object, retrieved
          with getUser().
        </p>
        <h2 className="text-2xl font-semibold mt-8">Authentication Process</h2>

        <p>The authentication process in Light-Auth is designed to be simple and secure. It involves the following steps:</p>

        <div className="mt-6 bg-gray-50 p-6 rounded-lg border">
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
        </div>

        <h2 className="text-2xl font-semibold mt-8">Session Object</h2>

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
      <h2 className="text-2xl font-semibold mt-8">Get the Session object </h2>
      <p>
        You can get the session object by using the <code>getSession()</code> function. This function is available in the <code>auth</code> module.
      </p>
      <CodeBlock lang="ts" title="src/app/home.tsx">
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
        From the client side you can make a request to the{" "}
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">/api/auth/session</code> endpoint to get the session
        object. <br />
        This endpoint is automatically created by Light-Auth and is used to get the session object from the server.
      </p>
      <p>Here is an example of how to get the session object from the client side, using a react hook:</p>
      <CodeBlock lang="ts" title="src/app/client-component.tsx">
        {`'use client';
export function useSession() {
    const [session, setSession] = useState<Session | null>(null);

    useEffect(() => {
        async function fetchSession() {
        const response = await fetch('/api/auth/session');
        const data = await response.json();
        setSession(data);
        }
        fetchSession();
    }, []);

    return session;
}`}
      </CodeBlock>

      <div className="flex items-center gap-3 rounded-md border border-green-500 bg-green-50 px-4 py-3 text-green-800">
        <FileText className="h-5 w-5 flex-shrink-0" />
        <span className="flex-1 text-left">
          the <code>useSession</code> function is already part of the <code>light-auth-nextjs-client</code> module. See documentation for more details.
        </span>
      </div>

      <h2 className="text-2xl font-semibold mt-8">Session object vs User object</h2>
      <p>
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
      </p>

      <h2 className="text-2xl font-semibold mt-8">Add session properties</h2>
      <p>
        You can add custom properties to the session object by using the <code>onSessionSaving</code> function in the configuration.
      </p>
      <p>This function is called before the session object is saved in the cookie.</p>
      <p>
        Here is an example where we get the <code>given_name</code> and <code>family_name</code> from the <code>idToken</code> and add them to the session
        object:
      </p>

      <CodeBlock lang="ts" title="src/app/auth.ts">{`export const { providers, handlers, signIn, signOut, getSession, getUser } =
  CreateLightAuth({
    providers: [googleProvider, microsoftProvider],
    onSessionSaving: async (session, tokens) => {
      if (!tokens) return session;
      if (!tokens.idToken()) return session;

      // optional: Add custom claims to the session
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
  });`}</CodeBlock>

      <h2 className="text-2xl font-semibold mt-8">Session Store</h2>

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
