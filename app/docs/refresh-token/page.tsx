import { CodeBlock } from "@/components/code-block";
import { Callout } from "@/components/ui/callout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Info } from "lucide-react";
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
      <h1>Refresh Token</h1>
      <p className="text-lg text-muted-foreground">How Light-Auth automatically refreshes access tokens.</p>

      <div className="space-y-4">
        <p>
          Light-Auth includes a built-in mechanism to automatically refresh OAuth access tokens when they are nearing expiration. This process happens
          transparently in the background, ensuring your users remain authenticated without interruption.
        </p>

        <Callout className="mb-6" variant="info">
          Automatic token refresh is a key feature that distinguishes <strong>Light-Auth</strong> from simpler authentication solutions.
          <br />
          It helps maintain continuous user sessions and prevents abrupt authentication failures.
        </Callout>

        <h2>
          <BookOpen className="text-blue-600 mr-2" />
          How Token Refresh Works
        </h2>

        <Card>
          <CardHeader>
            <h3>Token Refresh Process</h3>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center">
              <Bullet>1</Bullet>
              <p>
                When <code>getUser()</code> is called, Light-Auth checks the expiration time of the current access token.
              </p>
            </div>
            <div className="flex items-center">
              <Bullet>2</Bullet>
              <p>If the token is set to expire within approximately 10 minutes, Light-Auth initiates a refresh process.</p>
            </div>
            <div className="flex items-center">
              <Bullet>3</Bullet>
              <p>Using the refresh token (if available), Light-Auth makes a request to the OAuth provider to obtain a new access token.</p>
            </div>
            <div className="flex items-center">
              <Bullet>4</Bullet>
              <p>If the token is set to expire within approximately 10 minutes, Light-Auth initiates a refresh process.</p>
            </div>
            <div className="flex items-center">
              <Bullet>5</Bullet>
              <p>This process is completely transparent to the user, who remains authenticated without interruption.</p>
            </div>
          </CardContent>
        </Card>

        <h2>
          <BookOpen className="text-blue-600 mr-2" />
          Enabling Token Refresh
        </h2>
        <h3>Configuring your providers to support offline access for token refresh</h3>

        <p>
          For automatic token refresh to work, your OAuth providers must be configured to support "<strong>offline access</strong>" or explicitly provide
          refresh tokens. Here's how to configure various providers:
        </p>

        <Tabs defaultValue="google" className="mb-6">
          <TabsList className="mb-4">
            <TabsTrigger value="google">Google</TabsTrigger>
            <TabsTrigger value="microsoft">Microsoft</TabsTrigger>
            <TabsTrigger value="github">GitHub</TabsTrigger>
            <TabsTrigger value="other">Other Providers</TabsTrigger>
          </TabsList>

          <TabsContent value="google" className="p-4 rounded-lg border bg-card mb-4">
            <h4 className=" mb-2">Google OAuth Configuration</h4>
            <p className="mb-4">
              To enable offline access for Google, add the <code>access_type=offline</code> parameter to your authorization request:
            </p>
            <CodeBlock lang="ts">
              {`import { Google } from "arctic";
import { LightAuthProvider } from "@light-auth/core";

const googleProvider: LightAuthProvider = {
  providerName: "google",
  artic: new Google(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "http://localhost:3000/api/auth/callback/google"
  ),
  // This parameter is crucial for receiving refresh tokens
  searchParams: new Map([["access_type", "offline"]])
};`}
            </CodeBlock>

            <Callout variant="warning" className="mt-4">
              <p>
                Google only provides a refresh token on the first authorization unless you include the <code>prompt=consent</code> parameter, which forces the
                consent screen to appear each time.
              </p>
            </Callout>
          </TabsContent>

          <TabsContent value="microsoft" className="p-4 rounded-lg border bg-card mb-4">
            <h4 className=" mb-2">Microsoft Entra ID Configuration</h4>
            <p className="mb-4">
              For Microsoft Entra ID, you need to include the <code>offline_access</code> scope:
            </p>
            <CodeBlock lang="ts">
              {`import { MicrosoftEntraId } from "arctic";
import { LightAuthProvider } from "@light-auth/core";

const microsoftProvider: LightAuthProvider = {
  providerName: "microsoft",
  artic: new MicrosoftEntraId(
    process.env.MICROSOFT_ENTRA_ID_TENANT_ID ,
    process.env.MICROSOFT_ENTRA_ID_CLIENT_ID ,
    process.env.MICROSOFT_ENTRA_ID_CLIENT_SECRET,
    "http://localhost:3000/api/auth/callback/microsoft"
  ),
  // This scope is required for refresh tokens
  scopes: ["offline_access"],
};`}
            </CodeBlock>
          </TabsContent>

          <TabsContent value="github" className="p-4 rounded-lg border bg-card mb-4">
            <h4 className=" mb-2">GitHub OAuth Configuration</h4>
            <p className="mb-4">GitHub provides refresh tokens by default with a standard configuration:</p>
            <CodeBlock lang="ts">
              {`import { GitHub } from "arctic";
import { LightAuthProvider } from "@light-auth/core";

const githubProvider: LightAuthProvider = {
  providerName: "github",
  artic: new GitHub(
    process.env.GITHUB_CLIENT_ID ,
    process.env.GITHUB_CLIENT_SECRET,
    "http://localhost:3000/api/auth/callback/github"
  )
};`}
            </CodeBlock>

            <Callout variant="info" className="mt-4">
              GitHub automatically provides refresh tokens with the standard OAuth flow, so no special configuration is needed.
            </Callout>
          </TabsContent>

          <TabsContent value="other" className="p-4 rounded-lg border bg-card mb-4">
            <h4 className=" mb-2">Configuration for Other Providers</h4>
            <p className="mb-4">
              For other <strong>OAuth providers</strong>, refer to their specific documentation to determine how to request refresh tokens. Most providers have
              an "<code>offline access</code>" scope or similar parameter.
            </p>
            <p className="mb-4">
              Consult the <ExternalLink href="https://arcticjs.dev/">Arctic documentation</ExternalLink> for provider-specific details on enabling offline
              access.
            </p>

            <Callout variant="info" className="mt-4">
              <p>Light-Auth will automatically use refresh tokens when they are available in the OAuth response, regardless of the specific provider.</p>
            </Callout>
          </TabsContent>
        </Tabs>

        <h2>
          <BookOpen className="text-blue-600 mr-2" />
          Token Refresh Mechanics
        </h2>
        <h3>Understanding when and how Light-Auth performs token refresh</h3>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-slate-900 dark:text-white">When Token Refresh Occurs</h3>
          <p>
            Light-Auth checks the expiration time of the access token every time the{" "}
            <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">getUser()</code> method is called. If the token is set to expire within
            approximately 10 minutes, Light-Auth will automatically attempt to refresh it.
          </p>

          <CodeBlock lang="ts">
            {`// Example: This will trigger a token check and potential refresh
import { getUser } from "@/lib/auth";

export async function ProfilePage() {
  // If the access token is expiring soon, it will be refreshed before
  // the user data is returned
  const user = await getUser();
  
  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      {/* ... */}
    </div>
  );
}`}
          </CodeBlock>

          <h3>Refresh Logic Flow</h3>
          <div className="bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 p-4">
            <div className="space-y-3">
              <p>Light-Auth follows this process when checking and refreshing tokens:</p>

              <ol className="space-y-2 text-slate-700 dark:text-slate-300 list-decimal pl-5">
                <li>Check if the current user payload contains an access token</li>
                <li>Gets the access token expiration time</li>
                <li>If the token expires in less than 10 minutes, check if a refresh token is available</li>
                <li>If a refresh token exists, make a request to the OAuth provider's token endpoint to get a new access token</li>
                <li>Update the user payload with the new access token and refresh token (if provided)</li>
                <li>
                  Save the new user payload in the data store using the <code>UserAdapter</code> configured
                </li>
                <li>Continue with the original request using the new access token</li>
              </ol>
            </div>
          </div>
        </div>

        <h2>
          <BookOpen className="text-blue-600 mr-2" />
          Troubleshooting Token Refresh
        </h2>
        <h3>Common issues and solutions for token refresh problems</h3>

        <div className="space-y-4">
          <p>If you're experiencing issues with token refresh, here are some common problems and solutions:</p>

          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
              <h4 className=" mb-2">Refresh Token Not Being Provided</h4>
              <p className="mb-2">If your provider isn't returning refresh tokens:</p>
              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400 space-y-1">
                <li>Ensure you've configured the provider with the correct parameters for offline access</li>
                <li>Check if the provider requires additional scopes or permissions for refresh tokens</li>
                <li>Some providers (like Google) only send a refresh token on the first authentication unless forced to show the consent screen again</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
              <h4 className=" mb-2">Token Refresh Failing</h4>
              <p className="mb-2">If the token refresh process is failing:</p>
              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400 space-y-1">
                <li>Verify that your client secrets and IDs are correct</li>
                <li>Check if the refresh token has expired (some providers have expiring refresh tokens)</li>
                <li>Ensure your application has the necessary permissions in the provider's developer console</li>
                <li>Look for error messages in your server logs that might provide more details about the failure</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
              <h4 className=" mb-2">Users Logged Out Unexpectedly</h4>
              <p className="mb-2">If users are being logged out when they shouldn't be:</p>
              <ul className="list-disc pl-5 text-slate-600 dark:text-slate-400 space-y-1">
                <li>Check that your session configuration doesn't have a too-short expiration time</li>
                <li>
                  Verify that your application calls <code>getUser()</code> regularly enough to trigger refreshes
                </li>
                <li>Ensure that cookies are being properly stored and sent with requests (check for SameSite, Secure, or other cookie policy issues)</li>
              </ul>
            </div>
          </div>
        </div>

        <h2>
          <BookOpen className="text-blue-600 mr-2" />
          Best Practices for Token Refresh
        </h2>
        <h3>Recommendations for optimal token refresh implementation</h3>

        <div className="space-y-4">
          <h3 className="text-lg font-medium text-slate-900 dark:text-white">Optimizing Token Refresh in Your Application</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <h4>
                  Use <code>getUser()</code> Strategically.
                </h4>
              </CardHeader>
              <CardContent>
                Call <code>getUser()</code> at key points in your application where fresh authentication is important, such as before making critical API
                requests.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h4>Implement Error Handling</h4>
              </CardHeader>
              <CardContent>
                Add proper error handling for cases where token refresh might fail, providing users with a graceful way to re-authenticate.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h4>Configure Session Timeouts Appropriately</h4>
              </CardHeader>
              <CardContent>
                Set session timeouts based on your application's security requirements. Longer sessions are more convenient for users but might pose additional
                security considerations.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h4>Respect Provider Limitations</h4>
              </CardHeader>
              <CardContent>
                Be aware that different providers have different refresh token behaviors and limitations. Some have expiring refresh tokens, while others might
                revoke them after a period of inactivity.
              </CardContent>
            </Card>
          </div>

          <Callout variant="success" className="mt-4">
            <h4 className="font-medium text-emerald-800 dark:text-emerald-300">Light-Auth's Automatic Advantage</h4>
            <p className="text-sm text-emerald-700 dark:text-emerald-400 mt-1">
              One of Light-Auth's key benefits is that token refresh happens automatically without requiring any special code in your application. Just ensure
              your providers are configured for offline access, and Light-Auth will handle the rest.
            </p>
          </Callout>
        </div>
      </div>
    </div>
  );
}
