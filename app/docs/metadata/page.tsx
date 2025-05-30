import { CodeBlock } from "@/components/code-block";
import MermaidDiagram from "@/components/mermaid-component";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import WorkflowExplanation from "@/components/workflow-explanation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { BookOpen, FileText, Info, InfoIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication Flow - Light-Auth Documentation",
  description: "Understanding the authentication flow in Light-Auth.",
};

export default function MetadataPage() {
  return (
    <div className="space-y-6">
      <h1>Metadata management</h1>
      <p className="text-lg text-muted-foreground">Understanding how session and user information are handled by light-auth.</p>

      <div className="space-y-4">
        <h2>
          <BookOpen className="text-blue-600 mr-2" /> Overview
        </h2>

        <p className="mb-4">
          <strong>Light-Auth</strong> implements a secure, modern authentication flow based on <strong>JWT tokens</strong>.
        </p>
        <p className="mb-4">
          This page explains what is the session token and the difference between the session object, retrieved with <code>getAuthSession()</code> and the user
          object, retrieved with <code>getUser()</code>.
        </p>
        <section className="mb-12">
          <div className="mx-auto">
            <h2>
              <BookOpen className="text-blue-600 mr-2" />
              Session vs User: Core Concept
            </h2>
            <p>
              <strong>Light-Auth</strong>'s key innovation is how it handles authentication data. When a user authenticates through an{" "}
              <strong>OAuth2/OpenID</strong> provider, <strong>Light-Auth</strong>
              receives a <strong>JWT</strong> token containing user information and credentials.
            </p>
            <p>Instead of storing everything in one place, Light-Auth strategically splits this data into two objects:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
              <Card>
                <CardHeader>
                  <CardTitle>Session Object</CardTitle>
                  <CardDescription>
                    Contains only essential authentication data (userId, sessionId, email, expirationDate) needed for quick identity verification.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-md font-medium">Stored in cookies via SessionStore</div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>User Object</CardTitle>
                  <CardDescription>
                    Contains complete user metadata (access token, refresh token, provider details, etc.) needed for API access and detailed user information.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-md font-medium">Stored in backend via UserAdapter</div>
                </CardContent>
              </Card>
            </div>

            <h3 className="font-medium text-slate-900 dark:text-white mb-2">Why This Approach?</h3>
            <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300 space-y-2 mb-4">
              <li>
                <strong>Performance:</strong> Session data in cookies enables fast authentication checks without database queries
              </li>
              <li>
                <strong>Size Management:</strong> Avoids cookie size limitations (~4KB) by storing larger metadata in backend storage
              </li>
              <li>
                <strong>Security:</strong> Keeps sensitive tokens in secure backend storage while maintaining convenient authentication
              </li>
              <li>
                <strong>Flexibility:</strong> Allows different storage mechanisms for different types of data
              </li>
            </ul>

            <p className="text-slate-700 dark:text-slate-300">
              This separation creates a clean, efficient authentication system where developers can quickly verify a user's identity with{" "}
              <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">await getAuthSession()</code> for common authentication needs, while
              accessing complete user data with <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">await getUser()</code> only when
              necessary.
            </p>
          </div>
        </section>
        <section id="workflow" className="mb-12">
          <div className="mx-auto">
            <h2>
              <BookOpen className="text-blue-600 mr-2" />
              Authentication Workflow
            </h2>

            <Card>
              <CardContent className="pt-6">
                <MermaidDiagram />
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="comparison" className="mb-12">
          <div className="mx-auto">
            <h2>
              <BookOpen className="text-blue-600 mr-2" />
              Session vs User Comparison
            </h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[180px]">Feature</TableHead>
                  <TableHead>Session</TableHead>
                  <TableHead>User</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Storage Location</TableCell>
                  <TableCell>Cookie</TableCell>
                  <TableCell>Backend store (file system or database)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Data Size</TableCell>
                  <TableCell>Minimal (~4KB limit)</TableCell>
                  <TableCell>Can be larger (no cookie size limitation)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Stored Data</TableCell>
                  <TableCell>
                    <ul className="list-disc pl-5 text-sm">
                      <li>userId</li>
                      <li>sessionId</li>
                      <li>email</li>
                      <li>expirationDate</li>
                    </ul>
                  </TableCell>
                  <TableCell>
                    <ul className="list-disc pl-5 text-sm">
                      <li>access token</li>
                      <li>refresh token</li>
                      <li>provider details</li>
                      <li>other user information</li>
                    </ul>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Retrieval Method</TableCell>
                  <TableCell>
                    <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">await getAuthSession()</code>
                  </TableCell>
                  <TableCell>
                    <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">await getUser()</code>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Storage Mechanism</TableCell>
                  <TableCell>SessionStore → Cookie</TableCell>
                  <TableCell>UserAdapter → FileUserAdapter or DatabaseAdapter</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Purpose</TableCell>
                  <TableCell>Quick authentication checks</TableCell>
                  <TableCell>Access to complete user profile and tokens</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        <section id="details" className="mb-12">
          <div className="mx-auto">
            <h2>
              <BookOpen className="text-blue-600 mr-2" />
              Workflow Details
            </h2>

            <Tabs defaultValue="overview">
              <TabsList className="mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="session">Session Management</TabsTrigger>
                <TabsTrigger value="user">User Management</TabsTrigger>
                <TabsTrigger value="adapters">Adapters</TabsTrigger>
              </TabsList>
              <TabsContent value="overview">
                <Card>
                  <CardContent className="pt-6">
                    <WorkflowExplanation />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="session">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-3">Session Management</h3>
                    <p className="mb-4 text-slate-700 dark:text-slate-300">
                      The Session object contains only the essential authentication data needed to verify a user's identity:
                    </p>
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 mb-4">
                      <pre className="text-sm overflow-auto">
                        <code>{`{
  userId: "user_123456",
  sessionId: "sess_abcdef123456",
  email: "user@example.com",
  expirationDate: "2023-12-31T23:59:59Z"
}`}</code>
                      </pre>
                    </div>
                    <p className="mb-4 text-slate-700 dark:text-slate-300">
                      This data is stored in a cookie via the SessionStore, making it quickly accessible for authentication checks without requiring a database
                      query. The small size ensures it stays within cookie size limits (~4KB).
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      To access the session data in your application, use the{" "}
                      <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">await getAuthSession()</code> method provided by Light-Auth.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="user">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-3">User Management</h3>
                    <p className="mb-4 text-slate-700 dark:text-slate-300">The User object contains the complete user profile and authentication tokens:</p>
                    <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 mb-4">
                      <pre className="text-sm overflow-auto">
                        <code>{`{
  id: "user_123456",
  email: "user@example.com",
  name: "John Doe",
  picture: "https://example.com/profile.jpg",
  accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  refreshToken: "rt_abcdefghijklmnopqrstuvwxyz",
  provider: "google",
  providerAccountId: "google_12345",
  tokenExpiry: "2023-12-31T23:59:59Z",
  // Additional provider-specific data
  // ...
}`}</code>
                      </pre>
                    </div>
                    <p className="mb-4 text-slate-700 dark:text-slate-300">
                      This data is stored in a backend store via the UserAdapter, which can be a file system (FileUserAdapter) or a database (DatabaseAdapter).
                      This approach avoids cookie size limitations and keeps sensitive tokens secure.
                    </p>
                    <p className="text-slate-700 dark:text-slate-300">
                      To access the user data in your application, use the{" "}
                      <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">await getUser()</code> method provided by Light-Auth.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="adapters">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-medium mb-3">Storage Adapters</h3>
                    <p className="mb-4 text-slate-700 dark:text-slate-300">Light-Auth provides flexible storage options through its adapter system:</p>

                    <h4 className="font-medium mt-4 mb-2">SessionStore</h4>
                    <p className="mb-4 text-slate-700 dark:text-slate-300">Responsible for managing session data in cookies. It handles:</p>
                    <ul className="list-disc pl-5 mb-4 text-slate-700 dark:text-slate-300">
                      <li>Creating and signing session cookies</li>
                      <li>Reading and validating session data</li>
                      <li>Managing session expiration</li>
                    </ul>

                    <h4 className="font-medium mt-4 mb-2">UserAdapter</h4>
                    <p className="mb-4 text-slate-700 dark:text-slate-300">
                      An interface for storing and retrieving user data. Light-Auth provides two implementations:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                        <h5 className="font-medium mb-2">FileUserAdapter</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Stores user data in JSON files on the server's file system. Simple to set up with no additional dependencies, ideal for development or
                          small applications.
                        </p>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                        <h5 className="font-medium mb-2">DatabaseAdapter</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Stores user data in a database. More scalable and suitable for production environments. Supports various database backends through a
                          common interface.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>
    </div>
  );
}
