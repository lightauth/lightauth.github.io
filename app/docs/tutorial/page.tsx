import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tutorial - Light-Auth Documentation",
  description: "Learn how to implement authentication with Light-Auth through our step-by-step tutorial.",
};

export default function TutorialPage() {
  return (
    <div className="space-y-6">
      <h1>Light-Auth Tutorial</h1>
      <p className="text-lg text-muted-foreground">Follow this step-by-step tutorial to implement authentication in your application using Light-Auth.</p>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p>
          This tutorial will guide you through the process of setting up Light-Auth in your application and implementing common authentication flows such as
          registration, login, and authorization.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Tutorial Steps</h2>
        <div className="space-y-4 mt-4">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold">
              <a href="/docs/tutorial/basic-setup" className="text-blue-600 hover:underline">
                1. Basic Setup
              </a>
            </h3>
            <p className="mt-2">Set up Light-Auth in your application and configure it with your API key and domain.</p>
            <div className="mt-4">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">15 minutes</span>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold">
              <a href="/docs/tutorial/authentication" className="text-blue-600 hover:underline">
                2. Authentication Implementation
              </a>
            </h3>
            <p className="mt-2">Implement user registration, login, and logout functionality using Light-Auth.</p>
            <div className="mt-4">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">30 minutes</span>
            </div>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold">
              <a href="/docs/tutorial/authorization" className="text-blue-600 hover:underline">
                3. Authorization
              </a>
            </h3>
            <p className="mt-2">Learn how to protect routes and implement role-based access control in your application.</p>
            <div className="mt-4">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">25 minutes</span>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8">Prerequisites</h2>
        <p>Before starting this tutorial, make sure you have:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            Installed Light-Auth in your project (see{" "}
            <a href="/docs/installation" className="text-blue-600 hover:underline">
              Installation
            </a>
            )
          </li>
          <li>A Light-Auth API key</li>
          <li>Basic understanding of JavaScript/TypeScript and your frontend framework</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Additional Resources</h2>
        <p>While following this tutorial, you might find these resources helpful:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li>
            <a href="/docs/concepts/jwt-tokens" className="text-blue-600 hover:underline">
              Understanding JWT Tokens
            </a>
          </li>
          <li>
            <a href="/docs/concepts/authentication-flow" className="text-blue-600 hover:underline">
              Authentication Flow
            </a>
          </li>
          <li>
            <a href="/docs/api-reference" className="text-blue-600 hover:underline">
              API Reference
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
