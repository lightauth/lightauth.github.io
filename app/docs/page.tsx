import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BedDouble, BookOpen, Check, Cross, IdCard, Key, RefreshCcwDot, Shield, ShieldAlert, ShieldCheck, X } from "lucide-react";
import { Callout } from "@/components/ui/callout";
import { ExternalLink } from "@/components/external-link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Light-Auth Documentation",
  description: "Learn how to use Light-Auth to implement secure authentication in your applications.",
};

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <h1>Light-Auth Documentation</h1>
      <p className="text-lg text-muted-foreground">Light-Auth is a lightweight, secure authentication framework designed for modern web applications.</p>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p>
          Light-Auth provides a simple, yet powerful authentication solution that can be integrated into any web application. It offers features like JWT-based
          authentication, multi-factor authentication, and social login integration.
        </p>
        <h2>
          <BookOpen className="text-blue-600  mr-2" />
          Key Features
        </h2>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <ShieldCheck className="text-blue-600 dark:text-blue-100" />
                </div>
                <CardTitle>Secure by Design</CardTitle>
                <CardDescription>Built with security best practices from the ground up</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start">
                    <Check className="text-blue-600" />
                    HTTP-only cookies for session storage
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600" />
                    Server-side credential handling
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600" />
                    CSRF protection built-in
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <RefreshCcwDot className="text-blue-600 dark:text-blue-100" />
                </div>
                <CardTitle>Automatic Token Refresh</CardTitle>
                <CardDescription>Seamless token management without user interruption</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start">
                    <Check className="text-blue-600" />
                    Proactive refresh before token expiration
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600" />
                    Transparent background refreshing
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600" />
                    No additional code required
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <IdCard className="text-blue-600 dark:text-blue-100" />
                </div>
                <CardTitle>Multiple OAuth Providers</CardTitle>
                <CardDescription>Support for all major authentication providers</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start">
                    <Check className="text-blue-600" />
                    Google, Microsoft, GitHub, and more
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600" />
                    Consistent API across providers
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600" />
                    Easy to add custom providers
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <Key className="text-blue-600 dark:text-blue-100" />
                </div>
                <CardTitle>Framework Integration</CardTitle>
                <CardDescription>Seamless integration with modern web frameworks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start">
                    <Check className="text-blue-600" />
                    Next.js App Router and Pages Router
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600" />
                    Astro, Nuxt.js, SvelteKit
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600" />
                    Framework-specific adapters
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <BedDouble className="text-blue-600 dark:text-blue-100" />
                </div>
                <CardTitle>Lightweight & Flexible</CardTitle>
                <CardDescription>Minimal dependencies with maximum flexibility</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start">
                    <Check className="text-blue-600" />
                    Small bundle size
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600" />
                    Customizable user adapters
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600" />
                    Extensible architecture
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <ShieldAlert className="text-blue-600 dark:text-blue-100" />
                </div>
                <CardTitle>Developer Experience</CardTitle>
                <CardDescription>Built with developer productivity in mind</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  <li className="flex items-start">
                    <Check className="text-blue-600" />
                    TypeScript-first design
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600" />
                    Intuitive API design
                  </li>
                  <li className="flex items-start">
                    <Check className="text-blue-600" />
                    Comprehensive documentation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2>
            <BookOpen className="text-blue-600 mr-2" />
            SSR Requirements
          </h2>
          <p className="mb-4">
            Light-Auth is designed exclusively for server-side rendering frameworks to ensure secure authentication flows and proper credential handling.
          </p>

          <Callout variant="info" className="mb-8">
            <h4>Important Notice</h4>
            <p className="mb-4">For security reasons, Light-Auth requires a server-side environment to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Securely store OAuth client secrets</li>
              <li>Handle HTTP-only cookies for session management</li>
              <li>Process OAuth callbacks and token exchanges</li>
              <li>Perform secure token refresh operations</li>
            </ul>
            <div className="mt-4">
              <ExternalLink target="_parent" href="/docs/ssr-requirements">
                Learn more about SSR requirements
              </ExternalLink>
            </div>
          </Callout>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Supported Frameworks</CardTitle>
                <CardDescription>Light-Auth works with these server-side rendering frameworks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-black dark:bg-white flex items-center justify-center mr-3 flex-shrink-0">
                      <Image src={"/nextjs.svg"} alt="Next.js" width={30} height={30} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white">Next.js</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Full support for both App Router and Pages Router</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="relative w-8 h-8 rounded-full bg-gray-200 dark:bg-white flex items-center justify-center mr-3 flex-shrink-0">
                      <Image src={"/astro.svg"} className="absolute left-2" alt="Astro" width={20} height={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white">Astro</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Compatible when SSR mode is enabled</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="relative w-8 h-8 rounded-full bg-gray-200 dark:bg-white flex items-center justify-center mr-3 flex-shrink-0">
                      <Image src={"/nuxtjs.svg"} className="absolute top-[6px] " alt="Nuxt.js" width={20} height={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white">Nuxt.js</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Vue-based SSR framework support</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="relative w-8 h-8 rounded-full bg-gray-200 dark:bg-white flex items-center justify-center mr-3 flex-shrink-0">
                      <Image src={"/sveltekit.svg"} className="absolute top-[6px] " alt="Sveltekit" width={20} height={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white">Sveltekit</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Svelte-based SSR framework support</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="relative w-8 h-8 rounded-full bg-gray-200 dark:bg-white flex items-center justify-center mr-3 flex-shrink-0">
                      <Image src={"/express.svg"} className="fill-orange-700" alt="Express" width={20} height={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white">Express</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Node.js web application framework</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Not Compatible With</CardTitle>
                <CardDescription>Light-Auth cannot be used with these client-side only frameworks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mr-3 flex-shrink-0">
                      <X className="text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white">React with Vite</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Client-side only React applications</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mr-3 flex-shrink-0">
                      <X className="text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white">Create React App</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">CRA-based applications without a server</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mr-3 flex-shrink-0">
                      <X className="text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white">Vue with Vite</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Client-side only Vue applications</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mr-3 flex-shrink-0">
                      <X className="text-red-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white">Static Site Generators</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Pre-rendered static sites without SSR</p>
                    </div>
                  </li>
                </ul>
                <Callout className="mb-6" variant="warning">
                  A version of light-auth is currently in development for client-side only applications, with providers compatible with the{" "}
                  <ExternalLink href="https://oauth.net/2/pkce/">PCKSE protocol</ExternalLink>.
                </Callout>
              </CardContent>
            </Card>
          </div>
        </section>

        <h2>
          <BookOpen className="text-blue-600  mr-2" />
          Getting Started
        </h2>
        <p>
          To get started with Light-Auth, check out the{" "}
          <ExternalLink target="_parent" href="/docs/get-started">
            Getting Started
          </ExternalLink>{" "}
          guide.
        </p>
      </div>
    </div>
  );
}
