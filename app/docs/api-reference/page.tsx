import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "API Reference - Light-Auth Documentation",
  description: "Complete API reference for Light-Auth's authentication framework.",
}

export default function ApiReferencePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">API Reference</h1>
      <p className="text-lg text-muted-foreground">
        Complete documentation of all Light-Auth methods, options, and configurations.
      </p>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Core API</h2>
        <p>The core API includes the main LightAuth class and its methods for authentication and token management.</p>

        <div className="space-y-8 mt-6">
          <div className="border-b pb-6">
            <h3 className="text-xl font-semibold">LightAuth Constructor</h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-4">
              <code>{`new LightAuth(options: LightAuthOptions): LightAuth`}</code>
            </pre>
            <div className="mt-4">
              <h4 className="font-medium">Parameters:</h4>
              <table className="w-full mt-2 border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-medium border">Name</th>
                    <th className="px-4 py-2 text-left text-sm font-medium border">Type</th>
                    <th className="px-4 py-2 text-left text-sm font-medium border">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 text-sm border">options</td>
                    <td className="px-4 py-2 text-sm border">LightAuthOptions</td>
                    <td className="px-4 py-2 text-sm border">Configuration options for Light-Auth</td>
                  </tr>
                </tbody>
              </table>

              <h4 className="font-medium mt-4">Options Object:</h4>
              <table className="w-full mt-2 border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-medium border">Property</th>
                    <th className="px-4 py-2 text-left text-sm font-medium border">Type</th>
                    <th className="px-4 py-2 text-left text-sm font-medium border">Required</th>
                    <th className="px-4 py-2 text-left text-sm font-medium border">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 text-sm border">apiKey</td>
                    <td className="px-4 py-2 text-sm border">string</td>
                    <td className="px-4 py-2 text-sm border">Yes</td>
                    <td className="px-4 py-2 text-sm border">Your Light-Auth API key</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm border">domain</td>
                    <td className="px-4 py-2 text-sm border">string</td>
                    <td className="px-4 py-2 text-sm border">Yes</td>
                    <td className="px-4 py-2 text-sm border">Your application domain</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm border">tokenExpiration</td>
                    <td className="px-4 py-2 text-sm border">number</td>
                    <td className="px-4 py-2 text-sm border">No</td>
                    <td className="px-4 py-2 text-sm border">Token expiration time in seconds (default: 3600)</td>
                  </tr>
                </tbody>
              </table>

              <h4 className="font-medium mt-4">Example:</h4>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-2">
                <code>{`const auth = new LightAuth({
  apiKey: process.env.LIGHT_AUTH_API_KEY,
  domain: 'example.com',
  tokenExpiration: 7200 // 2 hours
});`}</code>
              </pre>
            </div>
          </div>

          <div className="border-b pb-6">
            <h3 className="text-xl font-semibold">login</h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-4">
              <code>{`auth.login(email: string, password: string): Promise<string>`}</code>
            </pre>
            <p className="mt-4">Authenticates a user with email and password, returns a JWT token.</p>
            <div className="mt-4">
              <h4 className="font-medium">Parameters:</h4>
              <table className="w-full mt-2 border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-medium border">Name</th>
                    <th className="px-4 py-2 text-left text-sm font-medium border">Type</th>
                    <th className="px-4 py-2 text-left text-sm font-medium border">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 text-sm border">email</td>
                    <td className="px-4 py-2 text-sm border">string</td>
                    <td className="px-4 py-2 text-sm border">User's email address</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm border">password</td>
                    <td className="px-4 py-2 text-sm border">string</td>
                    <td className="px-4 py-2 text-sm border">User's password</td>
                  </tr>
                </tbody>
              </table>

              <h4 className="font-medium mt-4">Returns:</h4>
              <p className="mt-2">A Promise that resolves to a JWT token string.</p>

              <h4 className="font-medium mt-4">Example:</h4>
              <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto mt-2">
                <code>{`try {
  const token = await auth.login('user@example.com', 'password123');
  console.log('Login successful:', token);
} catch (error) {
  console.error('Login failed:', error);
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8">Additional APIs</h2>
        <p>
          Light-Auth provides additional APIs for specific frameworks and environments. See the framework-specific
          documentation for more details.
        </p>

        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            <a href="/docs/api-reference/react" className="text-blue-600 hover:underline">
              React Hooks API
            </a>
          </li>
          <li>
            <a href="/docs/api-reference/vue" className="text-blue-600 hover:underline">
              Vue Composables API
            </a>
          </li>
          <li>
            <a href="/docs/api-reference/node" className="text-blue-600 hover:underline">
              Node.js Middleware API
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
