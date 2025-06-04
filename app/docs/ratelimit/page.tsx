import { CodeBlock } from "@/components/code-block";
import { Callout } from "@/components/ui/callout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, BookOpen, CheckCircle, FileText, Info } from "lucide-react";
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

export default function RateLimitPage() {
  return (
    <div className="space-y-6">
      <h1>Rate Limit</h1>
      <p className="text-lg text-muted-foreground">Protect your authentication endpoints from abuse with built-in rate limiting capabilities.</p>

      <div className="space-y-4">
        <p>
          Light-Auth includes a built-in mechanism to automatically limit the number of authentication requests a user can make within a specified time frame.
          <br />
          This helps prevent abuse of your authentication endpoints, such as brute-force attacks or excessive login attempts.
        </p>

        <Callout className="mb-6" variant="info">
          Rate limiting is <strong>NOT</strong> enabled by default in Light-Auth, but you can add easily.
        </Callout>

        <h2>
          <BookOpen className="text-blue-600 mr-2" />
          What is Rate Limiting?
        </h2>

        <Card>
          <CardHeader>
            <h3>Rate Limit</h3>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            Rate limiting is a security mechanism that controls the number of requests a client can make to your authentication endpoints within a specific time
            window. This helps prevent:
            <div className="flex items-center">
              <Bullet>1</Bullet>
              <p>Brute force attacks on login endpoints.</p>
            </div>
            <div className="flex items-center">
              <Bullet>2</Bullet>
              <p>Denial of Service (DoS) attacks.</p>
            </div>
            <div className="flex items-center">
              <Bullet>3</Bullet>
              <p>API abuse and resource exhaustion.</p>
            </div>
            <div className="flex items-center">
              <Bullet>4</Bullet>
              <p>Automated bot attacks.</p>
            </div>
          </CardContent>
        </Card>

        <h2>
          <BookOpen className="text-blue-600 mr-2" />
          Enabling Rate Limit
        </h2>
        <h3>Configuring your providers to support rate limit</h3>

        <p>
          Configure rate limiting options in your Light-Auth setup. You can specify the maximum number of requests allowed per time window, the duration of the
          time window, and the error message to return when the limit is exceeded.
          <br />
          Light-Auth provides a built-in rate limiter by calling the <code>createLightAuthRateLimiter()</code> method, that you can easily integrate into your
          authentication flow.
        </p>

        <CodeBlock lang="ts">
          {`import { CreateLightAuth } from "@light-auth/nextjs";
import { createLightAuthRateLimiter } from "@light-auth/core";

export const { providers, handlers, signIn, signOut, getAuthSession, getUser } = CreateLightAuth<MyLightAuthSession, MyLightAuthUser>({
  providers: [googleProvider, microsoftProvider],

  rateLimiter: createLightAuthRateLimiter({
    maxRequestsPerTimeWindowsMs: 100,
    timeWindowMs: 1000, // 1 second,
    errorMessage: "Too many requests, please try again later.",
    statusCode: 429,
  }),
`}
        </CodeBlock>

        <Callout className="mb-6" variant="warning">
          The default rate limit uses a simple in-memory store, which is not suitable for production use.
          <br /> For production, consider using a distributed cache like Redis or Memcached.
          <br />
          You will find an example of using Redis for rate limiting later in this documentation.
        </Callout>

        <h2>
          <BookOpen className="text-blue-600 mr-2" />
          Client Side Rate Limit Handling
        </h2>
        <h3>How to handle a rate limit error in your client side components</h3>

        <div className="space-y-4">
          <CodeBlock lang="tsx">
            {`"use client";

import { useState } from "react";
import { CreateLightAuthClient } from "@light-auth/nextjs/client";

const { signIn } = CreateLightAuthClient();

export function LoginButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      await signIn("google");
    } catch (err: any) {
      if (err.status === 429) {
        // Rate limit exceeded
        const retryAfter = err.headers?.['retry-after'];
        setError(
          "Too many login attempts. Please try again in a couple of seconds."
        );
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button 
        onClick={handleLogin} 
        disabled={isLoading}
        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
      >
        {isLoading ? "Signing in..." : "Sign in with Google"}
      </button>
      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </div>
  );
}`}
          </CodeBlock>
        </div>

        <h2>
          <BookOpen className="text-blue-600 mr-2" />
          Server Side Rate Limit Handling
        </h2>
        <h3>How to handle a rate limit error on your server side actions</h3>

        <div className="space-y-4">
          <CodeBlock lang="ts">
            {`"use server";

import { signIn } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function loginAction(provider: string) {
  try {
    await signIn(provider);
  } catch (error: any) {
    if (error.status === 429) {
      // Rate limit exceeded - redirect with error
      redirect(\`/login?error=rate_limit&retry_after=\${error.retryAfter}\`);
    }
    
    // Handle other errors
    redirect("/login?error=auth_failed");
  }
}`}
          </CodeBlock>
        </div>

        <h2>
          <BookOpen className="text-blue-600 mr-2" />
          Best Practices for Rate limit
        </h2>

        <div className="space-y-4">
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400">
            <li>
              <div>
                <h4>Use Different Limits for Different Endpoints</h4>
                <p>Login attempts should have stricter limits than token refresh or callback endpoints.</p>
              </div>
            </li>
            <li>
              <div>
                <h4 className="font-semibold">Consider User Experience</h4>
                <p>Provide clear error messages and indicate when users can try again.</p>
              </div>
            </li>
            <li>
              <div>
                <h4 className="font-semibold">Monitor Rate Limit Metrics</h4>
                <p>Track rate limit hits to identify potential attacks or adjust limits.</p>
              </div>
            </li>
            <li>
              <div>
                <h4 className="font-semibold">Use IP-Based and User-Based Limiting</h4>
                <p>Consider implementing both IP-based and user-based rate limiting for better security.</p>
              </div>
            </li>
            <li>
              <div>
                <h4 className="font-semibold">Test Your Limits</h4>
                <p>Test rate limiting in development to ensure it works as expected without blocking legitimate users.</p>
              </div>
            </li>
          </ul>
        </div>

        <h2>
          <BookOpen className="text-blue-600 mr-2" />
          Security Considerations
        </h2>

        <div className="space-y-4">
          <Callout variant="warning">
            <h4 className="font-semibold mb-2">Distributed Rate Limiting</h4>
            <p className="text-sm">
              In production with multiple server instances, consider using a shared store (Redis, database) for rate limiting to ensure limits are enforced
              across all instances.
            </p>
          </Callout>
          <Callout variant="info">
            <h4 className="font-semibold mb-2">Proxy and Load Balancer Considerations</h4>
            <p className="text-sm">
              When behind proxies or load balancers, ensure the real client IP is properly forwarded and used for rate limiting. Configure your proxy to set
              appropriate headers like
              <code className="bg-muted px-1 rounded">X-Forwarded-For</code>.
            </p>
          </Callout>
          <Callout variant="error">
            <h4 className="font-semibold mb-2">Bypass Prevention</h4>
            <p className="text-sm">Be aware that sophisticated attackers might try to bypass rate limiting by:</p>
            <ul className="list-disc list-inside text-sm mt-2 ml-4">
              <li>Using multiple IP addresses</li>
              <li>Rotating user agents</li>
              <li>Using proxy networks</li>
            </ul>
            <p className="text-sm mt-2">Consider implementing additional security measures like CAPTCHA for repeated failures.</p>
          </Callout>
        </div>

        <h2>
          <BookOpen className="text-blue-600 mr-2" />
          Redis Rate Limit example
        </h2>
        <p>
          If you want to use Redis for rate limiting, you can use this <code>createLightAuthRedisRateLimiter()</code> example.
        </p>
        <Callout variant="info">
          Why Redis? The default rate limiter uses in-memory storage, which works great for single-instance applications.
          <br />
          For distributed applications with multiple server instances, Redis provides shared storage to ensure rate limits are enforced consistently across all
          instances.
        </Callout>

        <CodeBlock lang="ts">
          {`// lib/redis-rate-limiter.ts
import Redis from "ioredis";
import { getClientIp, type LightAuthRateLimit, type LightAuthRateLimiter, type LightAuthRateLimitOptions } from "@light-auth/core";

const redis = new Redis(process.env.REDIS_URL || "redis://localhost:6379");

export const createLightAuthRedisRateLimiter = (options: LightAuthRateLimitOptions): LightAuthRateLimiter => {
  return {
    async onRateLimit(args) {
      const { url, headers } = args;

      // Skip rate limiting if the function returns false
      if (options.shouldApplyRateLimit && !options.shouldApplyRateLimit(args)) {
        return undefined;
      }

      // Define the key for the rate limit based on the request IP and URL
      const rateLimitKey = getClientIp(headers) + url;
      const now = Date.now();
      // Use Redis pipeline for atomic operations
      const pipeline = redis.pipeline();

      // Get current rate limit data
      const rateLimit = await redis.hgetall(rateLimitKey);

      const count = parseInt(rateLimit.count || "0", 10);
      const lastRequestDateTime = parseInt(rateLimit.lastRequestDateTime || "0", 10);

      // Check if we're outside the time window - reset if so
      if (lastRequestDateTime + options.timeWindowMs < now) {
        // Reset the count and update timestamp
        pipeline.hset(rateLimitKey, {
          count: "1",
          lastRequestDateTime: now.toString(),
        });
        pipeline.expire(rateLimitKey, Math.ceil(options.timeWindowMs / 1000));
        await pipeline.exec();

        return undefined; // No rate limit exceeded
      }

      // Calculate retry after time
      const retryAfter = lastRequestDateTime + options.timeWindowMs - now;

      // Check if rate limit is exceeded
      const isRateLimitExceeded = count >= options.maxRequestsPerTimeWindowsMs;

      if (!isRateLimitExceeded) {
        // Increment count and update timestamp
        pipeline.hset(rateLimitKey, {
          count: (count + 1).toString(),
          lastRequestDateTime: now.toString(),
        });
        pipeline.expire(rateLimitKey, Math.ceil(options.timeWindowMs / 1000));
        await pipeline.exec();

        return undefined; // No rate limit exceeded
      }

      // If the rate limit is exceeded, return a response
      const data =
        typeof options.errorMessage === "string"
          ? { message: options.errorMessage ?? "Too Many Requests" }
          : options.errorMessage ?? { message: "Too Many Requests" };

      return {
        data,
        init: {
          status: options.statusCode,
          statusText: "Too Many Requests",
          headers: {
            "Content-Type": "application/json",
            "Content-Length": Buffer.byteLength(JSON.stringify(data)).toString(),
            "X-Retry-After": Math.ceil(retryAfter / 1000).toString(),
          },
        },
      };
    },
  };
};
`}
        </CodeBlock>
      </div>
    </div>
  );
}
