import { CodeBlock } from "@/components/code-block";
import { FileText, Info } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentication Flow - Light-Auth Documentation",
  description: "Understanding the authentication flow in Light-Auth.",
};

export default function MetadataPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Sesion</h1>
      <p className="text-lg text-muted-foreground">Understanding how session is working.</p>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p>Light-Auth implements a secure, modern authentication flow based on JWT tokens.</p>
        <p>
          This page explains what is the session token and the difference between the session object, retrieved with getSession() and the user object, retrieved
          with getUser().
        </p>
        <h2 className="text-2xl font-semibold mt-8">Authentication Process</h2>
      </div>
    </div>
  );
}
