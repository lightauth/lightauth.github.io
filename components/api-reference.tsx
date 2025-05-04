"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ApiReference() {
  const [activeTab, setActiveTab] = useState("javascript")

  return (
    <section id="api-reference" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">API Reference</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive documentation for all Light-Auth methods and configurations
          </p>
        </div>
        <div className="mt-12">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
              <TabsTrigger value="go">Go</TabsTrigger>
            </TabsList>

            <TabsContent value="javascript" className="mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Authentication</CardTitle>
                    <CardDescription>Methods for user authentication</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">login(email, password)</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Authenticates a user with email and password, returns a JWT token.
                      </p>
                      <pre className="bg-gray-100 p-2 rounded-md text-xs mt-2">
                        <code>const token = await auth.login('user@example.com', 'password');</code>
                      </pre>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">register(user)</h3>
                      <p className="text-sm text-gray-600 mt-1">Creates a new user account and returns a JWT token.</p>
                      <pre className="bg-gray-100 p-2 rounded-md text-xs mt-2">
                        <code>{`const user = {
  email: 'user@example.com',
  password: 'password',
  name: 'John Doe'
};
const token = await auth.register(user);`}</code>
                      </pre>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">logout()</h3>
                      <p className="text-sm text-gray-600 mt-1">Logs out the current user and invalidates the token.</p>
                      <pre className="bg-gray-100 p-2 rounded-md text-xs mt-2">
                        <code>await auth.logout();</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Token Management</CardTitle>
                    <CardDescription>Methods for JWT token handling</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">verifyToken(token)</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Verifies a JWT token and returns the decoded payload.
                      </p>
                      <pre className="bg-gray-100 p-2 rounded-md text-xs mt-2">
                        <code>const payload = await auth.verifyToken(token);</code>
                      </pre>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">refreshToken(token)</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        Refreshes an expired JWT token and returns a new one.
                      </p>
                      <pre className="bg-gray-100 p-2 rounded-md text-xs mt-2">
                        <code>const newToken = await auth.refreshToken(expiredToken);</code>
                      </pre>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">decodeToken(token)</h3>
                      <p className="text-sm text-gray-600 mt-1">Decodes a JWT token without verifying its signature.</p>
                      <pre className="bg-gray-100 p-2 rounded-md text-xs mt-2">
                        <code>const payload = auth.decodeToken(token);</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>User Management</CardTitle>
                    <CardDescription>Methods for managing user accounts</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">getUser(id)</h3>
                      <p className="text-sm text-gray-600 mt-1">Retrieves a user by their ID.</p>
                      <pre className="bg-gray-100 p-2 rounded-md text-xs mt-2">
                        <code>const user = await auth.getUser('user_id');</code>
                      </pre>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">updateUser(id, data)</h3>
                      <p className="text-sm text-gray-600 mt-1">Updates a user's information.</p>
                      <pre className="bg-gray-100 p-2 rounded-md text-xs mt-2">
                        <code>{`await auth.updateUser('user_id', {
  name: 'New Name',
  email: 'new@example.com'
});`}</code>
                      </pre>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">deleteUser(id)</h3>
                      <p className="text-sm text-gray-600 mt-1">Deletes a user account.</p>
                      <pre className="bg-gray-100 p-2 rounded-md text-xs mt-2">
                        <code>await auth.deleteUser('user_id');</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Multi-factor Authentication</CardTitle>
                    <CardDescription>Methods for MFA implementation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold">enableMFA(userId, method)</h3>
                      <p className="text-sm text-gray-600 mt-1">Enables multi-factor authentication for a user.</p>
                      <pre className="bg-gray-100 p-2 rounded-md text-xs mt-2">
                        <code>const secret = await auth.enableMFA('user_id', 'totp');</code>
                      </pre>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">verifyMFA(userId, code)</h3>
                      <p className="text-sm text-gray-600 mt-1">Verifies a multi-factor authentication code.</p>
                      <pre className="bg-gray-100 p-2 rounded-md text-xs mt-2">
                        <code>const isValid = await auth.verifyMFA('user_id', '123456');</code>
                      </pre>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">disableMFA(userId)</h3>
                      <p className="text-sm text-gray-600 mt-1">Disables multi-factor authentication for a user.</p>
                      <pre className="bg-gray-100 p-2 rounded-md text-xs mt-2">
                        <code>await auth.disableMFA('user_id');</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="python" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Python API Reference</CardTitle>
                  <CardDescription>Coming soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    The Python API documentation is currently being updated. Check back soon for comprehensive
                    documentation.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="go" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Go API Reference</CardTitle>
                  <CardDescription>Coming soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>
                    The Go API documentation is currently being updated. Check back soon for comprehensive
                    documentation.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
