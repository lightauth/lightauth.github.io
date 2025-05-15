import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Light-Auth Documentation",
  description: "Learn how to use Light-Auth to implement secure authentication in your applications.",
}

export default function DocsPage() {
  return (
    <div className="space-y-6">
      <h1>Light-Auth Documentation</h1>
      <p className="text-lg text-muted-foreground">
        Light-Auth is a lightweight, secure authentication framework designed for modern web applications.
      </p>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p>
          Light-Auth provides a simple, yet powerful authentication solution that can be integrated into any web
          application. It offers features like JWT-based authentication, multi-factor authentication, and social login
          integration.
        </p>
        <h3 className="text-xl font-semibold mt-6">Key Features</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Secure JWT-based authentication</li>
          <li>Multi-factor authentication</li>
          <li>Social login integration</li>
          <li>Password reset and email verification</li>
          <li>Role-based access control</li>
          <li>Cross-platform support</li>
        </ul>
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
  )
}
