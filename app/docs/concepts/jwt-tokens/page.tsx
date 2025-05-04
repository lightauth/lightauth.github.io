import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "JWT Tokens - Light-Auth Documentation",
  description: "Understanding JWT tokens and how they work in Light-Auth.",
}

export default function JwtTokensPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">JWT Tokens</h1>
      <p className="text-lg text-muted-foreground">
        Understanding JSON Web Tokens (JWT) and how they're used in Light-Auth.
      </p>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">What are JWT Tokens?</h2>
        <p>
          JSON Web Tokens (JWT) are an open standard (RFC 7519) that defines a compact and self-contained way for
          securely transmitting information between parties as a JSON object. This information can be verified and
          trusted because it is digitally signed.
        </p>

        <h2 className="text-2xl font-semibold mt-8">JWT Structure</h2>
        <p>A JWT consists of three parts separated by dots (.), which are:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            <strong>Header</strong> - Contains the type of token and the signing algorithm being used.
          </li>
          <li>
            <strong>Payload</strong> - Contains the claims or the JWT's data.
          </li>
          <li>
            <strong>Signature</strong> - Used to verify that the sender of the JWT is who it says it is and to ensure
            that the message wasn't changed along the way.
          </li>
        </ul>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-semibold mb-2">Example JWT Token</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-100 p-3 rounded">
              <h4 className="font-medium text-sm mb-2">Header</h4>
              <div className="bg-white p-2 rounded text-xs font-mono">
                {`{
  "alg": "HS256",
  "typ": "JWT"
}`}
              </div>
            </div>
            <div className="bg-green-100 p-3 rounded">
              <h4 className="font-medium text-sm mb-2">Payload</h4>
              <div className="bg-white p-2 rounded text-xs font-mono">
                {`{
  "sub": "1234567890",
  "name": "John Doe",
  "iat": 1516239022,
  "exp": 1516242622
}`}
              </div>
            </div>
            <div className="bg-purple-100 p-3 rounded">
              <h4 className="font-medium text-sm mb-2">Signature</h4>
              <div className="bg-white p-2 rounded text-xs font-mono">
                HMACSHA256(
                <br />
                base64UrlEncode(header) +
                <br />
                "." +
                <br />
                base64UrlEncode(payload),
                <br />
                secret
                <br />)
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8">How Light-Auth Uses JWT</h2>
        <p>Light-Auth uses JWT tokens for authentication and authorization in the following ways:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            <strong>Authentication</strong> - When a user logs in, Light-Auth generates a JWT token containing the
            user's identity and permissions.
          </li>
          <li>
            <strong>Authorization</strong> - The JWT token is included in subsequent API requests, allowing the server
            to verify the user's identity and permissions without querying the database.
          </li>
          <li>
            <strong>Stateless Sessions</strong> - Since JWTs contain all necessary information, Light-Auth can implement
            stateless authentication, reducing database load.
          </li>
          <li>
            <strong>Security</strong> - Light-Auth signs JWTs with a secret key to ensure they cannot be tampered with.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">JWT Best Practices</h2>
        <p>When working with JWT tokens in Light-Auth, follow these best practices:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            <strong>Keep tokens secure</strong> - Store tokens securely and transmit them over HTTPS.
          </li>
          <li>
            <strong>Set appropriate expiration times</strong> - Use short-lived tokens to minimize the impact of token
            theft.
          </li>
          <li>
            <strong>Implement token refresh</strong> - Use refresh tokens to obtain new access tokens without requiring
            the user to log in again.
          </li>
          <li>
            <strong>Validate tokens</strong> - Always validate tokens on the server side before granting access to
            protected resources.
          </li>
          <li>
            <strong>Don't store sensitive data</strong> - Avoid storing sensitive information in JWT payloads, as they
            can be decoded (though not modified without detection).
          </li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Working with JWTs in Light-Auth</h2>
        <p>Light-Auth provides several methods for working with JWT tokens:</p>
        <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-4">
          <code>{`// Verify a token
const payload = await auth.verifyToken(token);

// Decode a token without verification
const decodedToken = auth.decodeToken(token);

// Refresh an expired token
const newToken = await auth.refreshToken(expiredToken);`}</code>
        </pre>

        <p className="mt-6">
          For more information on JWT token methods, see the{" "}
          <a href="/docs/api-reference" className="text-blue-600 hover:underline">
            API Reference
          </a>
          .
        </p>
      </div>
    </div>
  )
}
