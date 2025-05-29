import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function Hero() {
  return (
    <div className="bg-background">
      <div className="relative z-10 mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <div className="mb-8 flex justify-center">
            <Image src="/light-auth.svg" alt="Light-Auth Logo" width={100} height={100} className="w-12 h-12 sm:w-24 sm:h-24" />
          </div>
          <h1 className="flex flex-col items-center justify-center">
            <span className="block">Light-Auth</span>
            <span className="block text-blue-600">Authentication Made Simple</span>
          </h1>
          <p className="mb-10 text-lg text-gray-600">
            A lightweight, secure, and easy-to-implement authentication framework for modern web applications. Get started in minutes, not hours.
          </p>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What is Light-Auth?</CardTitle>
              <CardDescription>A modern authentication framework for server-side rendering applications</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Light-Auth is a framework designed to work seamlessly with SSR frameworks like NextJS, Astro, and Nuxt.
              </p>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                It provides a streamlined authentication flow using OAuth2 and OpenID Connect providers such as Google, GitHub, Microsoft ...
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-left">
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600 mr-2"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                    <h3 className="font-medium">Secure</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">OAuth2/OpenID Connect integration with popular providers</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600 mr-2"
                    >
                      <path d="M12 3v12" />
                      <path d="m8 11 4 4 4-4" />
                      <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
                    </svg>
                    <h3 className="font-medium">Lightweight</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Optimized storage with minimal cookie footprint</p>
                </div>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600 mr-2"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                    <h3 className="font-medium">Flexible</h3>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Authentication entry point made possible from the server side and from the client side
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button variant="default" size="lg" className="h-12 px-8">
              <Link href="/docs">Documentation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
