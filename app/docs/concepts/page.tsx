import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Concepts - Light-Auth Documentation",
  description: "Understand the key concepts behind Light-Auth and its authentication mechanisms.",
};

export default function ConceptsPage() {
  return (
    <div className="space-y-6">
      <h1>Key Concepts</h1>
      <p className="text-lg text-muted-foreground">Understand the fundamental concepts behind Light-Auth and how its authentication system works.</p>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p>
          Light-Auth is built on modern authentication principles and industry best practices. Understanding these concepts will help you implement and
          customize Light-Auth effectively in your applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold">
              <Link href="/docs/concepts/jwt-tokens" className="text-blue-600 hover:underline">
                JWT Tokens
              </Link>
            </h3>
            <p className="mt-2">Learn how JSON Web Tokens work and how they're used in Light-Auth for secure, stateless authentication.</p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold">
              <Link href="/docs/concepts/authentication-flow" className="text-blue-600 hover:underline">
                Authentication Flow
              </Link>
            </h3>
            <p className="mt-2">Understand the complete authentication process from credentials submission to secure sessions.</p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold">
              <Link href="/docs/concepts/security-best-practices" className="text-blue-600 hover:underline">
                Security Best Practices
              </Link>
            </h3>
            <p className="mt-2">Learn the security measures implemented in Light-Auth and how to enhance security in your applications.</p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold">
              <Link href="/docs/concepts/multi-factor-authentication" className="text-blue-600 hover:underline">
                Multi-factor Authentication
              </Link>
            </h3>
            <p className="mt-2">Discover how MFA works in Light-Auth and how to implement it for additional security.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-8">Advanced Concepts</h2>
        <div className="space-y-4 mt-4">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold">
              <Link href="/docs/concepts/role-based-access-control" className="text-blue-600 hover:underline">
                Role-Based Access Control
              </Link>
            </h3>
            <p className="mt-2">Learn how to implement and manage user roles and permissions with Light-Auth.</p>
          </div>

          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold">
              <Link href="/docs/concepts/token-storage" className="text-blue-600 hover:underline">
                Token Storage and Management
              </Link>
            </h3>
            <p className="mt-2">Understand best practices for storing and managing authentication tokens in various environments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
