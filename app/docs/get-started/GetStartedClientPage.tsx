"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GetStartedClientPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Get Started with Light-Auth</h1>
      <p className="text-lg text-muted-foreground">Learn how to quickly integrate Light-Auth into your application.</p>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Prerequisites</h2>
        <p>Before you begin, make sure you have the following:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Node.js 14.x or later</li>
          <li>npm or yarn package manager</li>
          <li>A Light-Auth API key (sign up on our website if you don't have one)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8">Quick Start</h2>
        <p>Follow these steps to add Light-Auth to your project:</p>

        <div className="space-y-4 mt-4">
          <h3 className="text-xl font-semibold">1. Install the Light-Auth package</h3>
          <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
            <code>npm install light-auth</code>
          </pre>

          <h3 className="text-xl font-semibold mt-4">2. Initialize Light-Auth in your application</h3>

          <Tabs defaultValue="nextjs" className="w-full mt-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="nextjs">Next.js</TabsTrigger>
              <TabsTrigger value="astro">Astro</TabsTrigger>
            </TabsList>
            <TabsContent value="nextjs" className="mt-4">
              <div className="rounded-md bg-gray-100 p-4 overflow-x-auto">
                <pre>
                  <code>{`// app/lib/auth.ts
import { LightAuth } from 'light-auth';

export const auth = new LightAuth({
  apiKey: process.env.LIGHT_AUTH_API_KEY,
  domain: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  redirectUri: '/dashboard'
});

// app/api/auth/[...auth]/route.ts
import { NextRequest } from 'next/server';
import { auth } from '@/app/lib/auth';

export async function GET(request: NextRequest) {
  return auth.handleAuthRequest(request);
}

export async function POST(request: NextRequest) {
  return auth.handleAuthRequest(request);
}

// app/components/auth-provider.tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '@/app/lib/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.getUser().then(user => {
      setUser(user);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);`}</code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="astro" className="mt-4">
              <div className="rounded-md bg-gray-100 p-4 overflow-x-auto">
                <pre>
                  <code>{`// src/lib/auth.ts
import { LightAuth } from 'light-auth';

export const auth = new LightAuth({
  apiKey: import.meta.env.LIGHT_AUTH_API_KEY,
  domain: import.meta.env.PUBLIC_SITE_URL || 'http://localhost:3000',
  redirectUri: '/dashboard'
});

// src/pages/api/auth/[...auth].ts
import type { APIRoute } from 'astro';
import { auth } from '../../../lib/auth';

export const get: APIRoute = async ({ request }) => {
  return auth.handleAuthRequest(request);
};

export const post: APIRoute = async ({ request }) => {
  return auth.handleAuthRequest(request);
};

// src/components/AuthProvider.tsx (if using React integration)
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../lib/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.getUser().then(user => {
      setUser(user);
      setLoading(false);
    }).catch(() => {
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);`}</code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>

          <h3 className="text-xl font-semibold mt-4">3. Implement authentication in your application</h3>

          <Tabs defaultValue="nextjs" className="w-full mt-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="nextjs">Next.js</TabsTrigger>
              <TabsTrigger value="astro">Astro</TabsTrigger>
            </TabsList>
            <TabsContent value="nextjs" className="mt-4">
              <div className="rounded-md bg-gray-100 p-4 overflow-x-auto">
                <pre>
                  <code>{`// app/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/lib/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await auth.login(email, password);
      router.push('/dashboard');
    } catch (err) {
      setError(err.message || 'Failed to login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      {error && <div className="bg-red-100 p-3 mb-4 text-red-700 rounded">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}`}</code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="astro" className="mt-4">
              <div className="rounded-md bg-gray-100 p-4 overflow-x-auto">
                <pre>
                  <code>{`---
// src/pages/login.astro
import Layout from '../layouts/Layout.astro';
---

<Layout title="Login">
  <div class="max-w-md mx-auto mt-10">
    <h1 class="text-2xl font-bold mb-6">Login</h1>
    <div id="error-message" class="bg-red-100 p-3 mb-4 text-red-700 rounded hidden"></div>
    <form id="login-form">
      <div class="mb-4">
        <label class="block mb-2">Email</label>
        <input
          type="email"
          id="email"
          class="w-full p-2 border rounded"
          required
        />
      </div>
      <div class="mb-4">
        <label class="block mb-2">Password</label>
        <input
          type="password"
          id="password"
          class="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        id="submit-button"
        class="w-full bg-blue-500 text-white p-2 rounded"
      >
        Login
      </button>
    </form>
  </div>
</Layout>

<script>
  import { auth } from '../lib/auth';
  
  const form = document.getElementById('login-form');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const submitButton = document.getElementById('submit-button');
  const errorMessage = document.getElementById('error-message');
  
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = emailInput.value;
    const password = passwordInput.value;
    
    submitButton.disabled = true;
    submitButton.textContent = 'Logging in...';
    errorMessage.classList.add('hidden');
    
    try {
      await auth.login(email, password);
      window.location.href = '/dashboard';
    } catch (err) {
      errorMessage.textContent = err.message || 'Failed to login';
      errorMessage.classList.remove('hidden');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = 'Login';
    }
  });
</script>`}</code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <h2 className="text-2xl font-semibold mt-8">Next Steps</h2>
        <p>Now that you've set up Light-Auth, you can explore more advanced features and configurations:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="/docs/tutorial" className="text-blue-600 hover:underline">
              Follow our tutorial
            </a>{" "}
            to build a complete authentication system
          </li>
          <li>
            Learn about{" "}
            <a href="/docs/concepts/jwt-tokens" className="text-blue-600 hover:underline">
              JWT tokens
            </a>{" "}
            and how they work
          </li>
          <li>
            Implement{" "}
            <a href="/docs/tutorial/authorization" className="text-blue-600 hover:underline">
              authorization
            </a>{" "}
            in your application
          </li>
        </ul>
      </div>
    </div>
  )
}
