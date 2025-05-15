import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication Flow - Light-Auth Documentation",
  description: "Understanding the authentication flow in Light-Auth.",
};

export default function AuthenticationFlowPage() {
  return (
    <div className="space-y-6">
      <h1>Authentication Flow</h1>
      <p className="text-lg text-muted-foreground">Understanding how authentication works in Light-Auth from end to end.</p>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p>
          Light-Auth implements a secure, modern authentication flow based on JWT tokens. This page explains the complete authentication process from
          credentials submission to secure sessions.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Authentication Process</h2>
        <div className="mt-6 space-y-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold">1. User Registration</h3>
            <p className="mt-2">The process begins when a user registers for an account. Light-Auth securely handles the registration process:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>User submits registration information (email, password, etc.)</li>
              <li>Light-Auth validates the input and checks for existing accounts</li>
              <li>Password is hashed using bcrypt with a unique salt</li>
              <li>User account is created in the database</li>
              <li>A verification email may be sent (if email verification is enabled)</li>
              <li>A JWT token is generated and returned to the client</li>
            </ol>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold">2. User Login</h3>
            <p className="mt-2">When a registered user logs in, Light-Auth verifies their credentials and establishes a session:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>User submits login credentials (email and password)</li>
              <li>Light-Auth retrieves the user record from the database</li>
              <li>The submitted password is verified against the stored hash</li>
              <li>If multi-factor authentication is enabled, the user is prompted for a second factor</li>
              <li>Upon successful verification, a JWT token is generated</li>
              <li>The token is returned to the client for storage and future use</li>
            </ol>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold">3. Authenticated Requests</h3>
            <p className="mt-2">After authentication, the client includes the JWT token in subsequent requests:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>Client includes the JWT token in the Authorization header</li>
              <li>Server middleware verifies the token's signature and expiration</li>
              <li>If valid, the user's identity and permissions are extracted from the token</li>
              <li>The request proceeds with the authenticated user context</li>
              <li>If invalid, the server returns a 401 Unauthorized response</li>
            </ol>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold">4. Token Refresh</h3>
            <p className="mt-2">JWT tokens have an expiration time for security. Light-Auth implements token refresh to maintain sessions:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>When a token is about to expire, the client requests a new token</li>
              <li>The client sends the current token to the refresh endpoint</li>
              <li>Light-Auth verifies the token and checks if the user is still valid</li>
              <li>A new token with a new expiration time is generated</li>
              <li>The new token is returned to the client</li>
            </ol>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold">5. Logout</h3>
            <p className="mt-2">When a user logs out, Light-Auth handles the session termination:</p>
            <ol className="list-decimal pl-6 space-y-2 mt-4">
              <li>Client calls the logout endpoint</li>
              <li>If using a token blacklist, the current token is added to the blacklist</li>
              <li>Client removes the token from local storage</li>
              <li>User is redirected to the login page or home page</li>
            </ol>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8">Authentication Flow Diagram</h2>
        <div className="mt-6 bg-gray-50 p-6 rounded-lg border">
          <div className="flex flex-col items-center">
            <div className="w-full my-8">
              <div className="relative">
                {/* Authentication Flow Diagram */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
                  {/* Client */}
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-20 bg-blue-100 rounded-lg flex items-center justify-center border border-blue-200">
                      <span className="font-medium text-blue-800">Client</span>
                    </div>
                    <span className="text-sm text-gray-500 mt-2">Browser/App</span>
                  </div>

                  {/* Arrows */}
                  <div className="flex flex-col items-center">
                    <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                    <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                    <div className="text-xs text-gray-500 my-1">1. Auth Request</div>
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
                    <div className="text-xs text-gray-500 my-1">2. Verify</div>
                    <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                    <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                  </div>

                  {/* Database */}
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                      <span className="font-medium text-gray-800">User DB</span>
                    </div>
                    <span className="text-sm text-gray-500 mt-2">Secure Storage</span>
                  </div>
                </div>

                {/* Return Flow */}
                <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
                  {/* Client */}
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-20 bg-blue-100 rounded-lg flex items-center justify-center border border-blue-200">
                      <span className="font-medium text-blue-800">Client</span>
                    </div>
                  </div>

                  {/* Arrows */}
                  <div className="flex flex-col items-center">
                    <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                    <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                    <div className="text-xs text-gray-500 my-1">4. JWT Token</div>
                    <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                    <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                  </div>

                  {/* Light-Auth */}
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-20 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="font-medium text-white">Light-Auth</span>
                    </div>
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
                      <span className="font-medium text-gray-800">User DB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8">Security Considerations</h2>
        <p>Light-Auth implements several security measures in its authentication flow:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            <strong>Password Security</strong> - Passwords are hashed using bcrypt with appropriate work factors.
          </li>
          <li>
            <strong>Rate Limiting</strong> - Login attempts are rate-limited to prevent brute force attacks.
          </li>
          <li>
            <strong>Token Expiration</strong> - JWT tokens have a configurable expiration time.
          </li>
          <li>
            <strong>HTTPS Only</strong> - All authentication traffic is encrypted using HTTPS.
          </li>
          <li>
            <strong>CSRF Protection</strong> - Cross-Site Request Forgery protection is implemented for all authentication endpoints.
          </li>
          <li>
            <strong>XSS Prevention</strong> - Tokens are stored securely to prevent Cross-Site Scripting attacks.
          </li>
        </ul>

        <p className="mt-6">
          For more information on security best practices, see the{" "}
          <a href="/docs/concepts/security-best-practices" className="text-blue-600 hover:underline">
            Security Best Practices
          </a>{" "}
          guide.
        </p>
      </div>
    </div>
  );
}
