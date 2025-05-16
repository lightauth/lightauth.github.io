import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Check, Shield, ShieldCheck } from "lucide-react";

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
          <BookOpen className="text-blue-600 mr-2" />
          Key Features
        </h2>
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <ShieldCheck className="text-blue-600" />
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

            <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    <path d="M12 3v12" />
                    <path d="m8 11 4 4 4-4" />
                    <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
                  </svg>
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

            <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    <path d="M21 2H3v16h5v4l4-4h5l4-4V2z" />
                    <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                    <path d="M12 13.5a4 4 0 0 1 3.1 1.5" />
                    <path d="M8.9 15a4 4 0 0 1 3.1-1.5" />
                  </svg>
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

            <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
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

            <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    <path d="M20 7h-3a2 2 0 0 0-2 2v.5" />
                    <path d="M4 7h3a2 2 0 0 1 2 2v.5" />
                    <path d="M18 10v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2" />
                    <path d="M18 21V10" />
                    <path d="M6 21V10" />
                  </svg>
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

            <Card className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600 dark:text-blue-400"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="M9.1 12a2.1 2.1 0 0 1 0-2.1" />
                    <path d="M14.9 12a2.1 2.1 0 0 0 0-2.1" />
                    <path d="M12 12v.01" />
                  </svg>
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

        <h3 className="text-xl font-semibold mt-6">Getting Started</h3>
        <p>
          To get started with Light-Auth, check out the{" "}
          <a href="/docs/get-started" className="text-blue-600 hover:underline">
            Get Started
          </a>{" "}
          guide or follow our{" "}
          <a href="/docs/tutorial" className="text-blue-600 hover:underline">
            Tutorial
          </a>
          .
        </p>
      </div>
    </div>
  );
}
