import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-blue-50 to-white" />
      <div className="container relative z-10 mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="rounded-full bg-blue-100 p-6">
              <Image
                src="/light-auth.svg"
                alt="Light-Auth Logo"
                width={150}
                height={150}
                className="w-16 h-16 text-cyan-500"
              />
            </div>
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Light-Auth</span>
            <span className="block text-blue-600">
              Authentication Made Simple
            </span>
          </h1>
          <p className="mb-10 text-xl text-gray-600">
            A lightweight, secure, and easy-to-implement authentication
            framework for modern web applications. Get started in minutes, not
            hours.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button size="lg" className="h-12 px-8">
              <Link href="#get-started" className="flex items-center">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8">
              <Link href="/docs">Documentation</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
