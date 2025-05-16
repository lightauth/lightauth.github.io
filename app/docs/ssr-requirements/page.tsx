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
      <h1>SSR Requirements</h1>
      <Callout className="mb-6" variant="warning">
        A version of light-auth is currently in development for client-side only applications, with providers compatible with the{" "}
        <ExternalLink href="https://oauth.net/2/pkce/">PCKSE protocol</ExternalLink>.
        <br />
        This version will be available soon, but for now, please use the <strong>SSR</strong> version of light-auth.
      </Callout>
      <p className="text-lg text-muted-foreground">Understanding when you should use Light-Auth, and when not.</p>

      <section className="mb-12">
        <div className="mx-auto">
          <h2>
            <BookOpen className="text-blue-600 mr-2" />
            SSR-Only Authentication Framework
          </h2>

          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Light-Auth is specifically designed to work with frameworks that support server-side rendering (SSR). This architectural decision ensures secure
            authentication flows, proper cookie handling, and protection of sensitive credentials.
          </p>

          <h3 className="text-lg font-medium text-slate-900 dark:text-white mt-6 mb-3">Compatible Frameworks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <Card>
              <CardContent className="flex items-center mt-2">
                <Image src={"/nextjs.svg"} alt="Next.js" width={40} height={40} className="mr-3 flex-shrink-0" />
                <div>
                  <h3>Next.js</h3>
                  <p className="text-sm">App Router and Pages Router</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center mt-2">
                <div className="relative w-12 h-12 rounded-full bg-gray-200 dark:bg-white flex items-center justify-center mr-3 flex-shrink-0">
                  <Image src={"/astro.svg"} className="absolute left-3" alt="Astro" width={30} height={30} />
                </div>
                <div>
                  <h3>Astro</h3>
                  <p className="text-sm">With SSR mode enabled</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center mt-2">
                <div className="relative w-12 h-12 rounded-full bg-gray-200 dark:bg-white flex items-center justify-center mr-3 flex-shrink-0">
                  <Image src={"/nuxtjs.svg"} className="absolute top-[6px] " alt="Nuxt.js" width={30} height={30} />
                </div>
                <div>
                  <div className="flex items-baseline">
                    <h3>Nuxt.js</h3>
                    <Badge className="ml-2" variant="default">
                      Work In Progress
                    </Badge>
                  </div>
                  <p className="text-sm">Vue-based SSR framework</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center mt-2">
                <div className="relative w-12 h-12 rounded-full bg-gray-200 dark:bg-white flex items-center justify-center mr-3 flex-shrink-0">
                  <Image src={"/express.svg"} alt="Express" width={30} height={30} />
                </div>
                <div>
                  <h3>Express</h3>
                  <p className="text-sm">Node.js web application framework</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <h3 className="mt-6 mb-3">Why SSR is recommend ?</h3>
          <div className="space-y-4 mb-6">
            <div className="flex">
              <Bullet>1</Bullet>

              <div>
                <h4>Secure Credential Handling</h4>
                <p className="mt-1">OAuth client secrets and tokens must be handled server-side to prevent exposure in client-side code.</p>
              </div>
            </div>

            <div className="flex">
              <Bullet>2</Bullet>

              <div>
                <h4>HTTP-Only Cookies</h4>
                <p className="mt-1">Light-Auth uses HTTP-only cookies for session management, which require server-side processing.</p>
              </div>
            </div>

            <div className="flex">
              <Bullet>3</Bullet>
              <div>
                <h4>OAuth Callback Handling</h4>
                <p className="mt-1">OAuth authentication flows require server endpoints to handle callbacks and token exchanges.</p>
              </div>
            </div>

            <div className="flex">
              <Bullet>4</Bullet>
              <div>
                <h4>Token Refresh</h4>
                <p className="mt-1">Automatic token refresh mechanisms require server-side processing to securely store and update tokens.</p>
              </div>
            </div>
          </div>

          <h2>
            <BookOpen className="text-blue-600 mr-2" />
            Not Compatible with Client-Side Only Applications
          </h2>
          <p className="text-slate-700 dark:text-slate-300 mb-4">
            Light-Auth is <strong>not compatible</strong> with client-side only applications built with frameworks like:
          </p>

          <Table className="mb-6">
            <TableHeader>
              <TableRow>
                <TableHead>Framework</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Compatibility</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">React with Vite</TableCell>
                <TableCell>Client-side only</TableCell>
                <TableCell className="text-red-500 dark:text-red-400">Not Compatible</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Create React App</TableCell>
                <TableCell>Client-side only</TableCell>
                <TableCell className="text-red-500 dark:text-red-400">Not Compatible</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Vue with Vite</TableCell>
                <TableCell>Client-side only</TableCell>
                <TableCell className="text-red-500 dark:text-red-400">Not Compatible</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Static Site Generators</TableCell>
                <TableCell>Pre-rendered static sites</TableCell>
                <TableCell className="text-red-500 dark:text-red-400">Not Compatible</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  );
}
