import { CodeBlock } from "@/components/code-block";
import MermaidDiagram from "@/components/mermaid-component";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import WorkflowExplanation from "@/components/workflow-explanation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileText, Info, InfoIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication Flow - Light-Auth Documentation",
  description: "Understanding the authentication flow in Light-Auth.",
};

export default function MetadataPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Metadata management</h1>
      <p className="text-lg text-muted-foreground">Understanding how session and user information are handled by light-auth.</p>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <InfoIcon className="text-blue-600 w-5 h-5" /> Overview
        </h2>
        <p className="text-slate-700 dark:text-slate-300 mb-4">Light-Auth implements a secure, modern authentication flow based on JWT tokens.</p>
        <p className="text-slate-700 dark:text-slate-300 mb-4">
          This page explains what is the session token and the difference between the session object, retrieved with getSession() and the user object, retrieved
          with getUser().
        </p>
        <section className="mb-12">
          <div className="mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600 mr-2"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m12 8-2.2 2.2" />
                <path d="M17.8 5.2C17.8 5.2 16 7 12 7s-5.8-1.8-5.8-1.8" />
                <path d="M12 16v-3" />
              </svg>
              Session vs User: Core Concept
            </h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              Light-Auth's key innovation is how it handles authentication data. When a user authenticates through an OAuth2/OpenID provider, Light-Auth
              receives a JWT token containing user information and credentials. Instead of storing everything in one place, Light-Auth strategically splits this
              data into two objects:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                <h3 className="font-medium text-slate-900 dark:text-white mb-2">Session Object</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                  Contains only essential authentication data (userId, sessionId, email, expirationDate) needed for quick identity verification.
                </p>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-md text-xs">
                  <code>Stored in cookies via SessionStore</code>
                </div>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                <h3 className="font-medium text-slate-900 dark:text-white mb-2">User Object</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">
                  Contains complete user metadata (access token, refresh token, provider details, etc.) needed for API access and detailed user information.
                </p>
                <div className="bg-white dark:bg-slate-800 p-3 rounded-md text-xs">
                  <code>Stored in backend via UserAdapter</code>
                </div>
              </div>
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
              <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">await getSession()</code> for common authentication needs, while
              accessing complete user data with <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">await getUser()</code> only when
              necessary.
            </p>
          </div>
        </section>
        <section id="workflow" className="mb-12">
          <div className="mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600 mr-2"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
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
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600 mr-2"
              >
                <path d="M16 16v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <path d="M22 6v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Z" />
              </svg>
              Session vs User Comparison
            </h2>
            {/* <Card>
              <CardContent className="pt-6 overflow-auto"> */}
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
                    <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">await getSession()</code>
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
            {/* </CardContent>
            </Card> */}
          </div>
        </section>

        <section id="details" className="mb-12">
          <div className="mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600 mr-2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
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
                      <code className="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm">await getSession()</code> method provided by Light-Auth.
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
