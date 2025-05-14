import type { Metadata } from "next";
import GetStartedClientPage from "./GetStartedClientPage";
import Image from "next/image";
import { highlight } from "@/lib/highlight";
import { JSX } from "react";
import { codeBlockType } from "@/components/code-tabs";

export const metadata: Metadata = {
  title: "Get Started - Light-Auth Documentation",
  description: "Get started with Light-Auth for secure authentication in your applications.",
};

export default async function GetStartedPage() {
  const codeBlocks: codeBlockType[] = [
    {
      id: "installation",
      defaultValue: "npm",
      tabs: [
        {
          image: <Image src="/npmjs.svg" alt="NPM Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "npm",
          title: "NPM",
          code: await highlight("npm install light-auth", "sh"),
        },
        {
          image: <Image src="/yarn.svg" alt="Yarn Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "yarn",
          title: "Yarn",
          code: await highlight("yarn add light-auth", "sh"),
        },
        {
          image: <Image src="/pnpm.svg" alt="PNPM Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "pnpm",
          title: "PNPM",
          code: await highlight("pnpm add light-auth", "sh"),
        },
      ],
    },
    {
      id: "initialization",
      defaultValue: "nextjs",
      tabs: [
        {
          image: <Image src="/nextjs.svg" alt="Next.js Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "nextjs",
          title: "Next.js",
          codeDescription: "./app/lib/auth.ts",
          code: await highlight(
            `import { Google } from "arctic";
import { CreateLightAuth } from "@light-auth/nextjs";

const googleProvider = {
  providerName: "google",
  artic: new Google(
    process.env.GOOGLE_CLIENT_ID || "",
    process.env.GOOGLE_CLIENT_SECRET || "",
    "http://localhost:3000/api/auth/callback/google"
  ),
};

export const { providers, handlers, signIn, signOut, getSession, getUser } = CreateLightAuth({
  providers: [googleProvider]
});`,
            "ts"
          ),
        },
        {
          image: <Image src="/astro.svg" alt="Astro Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "astro",
          title: "Astro",
          codeDescription: "./src/lib/auth.ts",
          code: await highlight(
            `import { Google } from "arctic";
import { CreateLightAuth } from "@light-auth/nextjs";

const googleProvider = {
  providerName: "google",
  artic: new Google(
    process.env.GOOGLE_CLIENT_ID || "",
    process.env.GOOGLE_CLIENT_SECRET || "",
    "http://localhost:3000/api/auth/callback/google"
  ),
};

export const { providers, handlers, getSession, getUser } = CreateLightAuth({
  providers: [googleProvider]
});
`,
            "ts"
          ),
        },
        {
          image: <Image src="/express.svg" alt="Express Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "express",
          title: "Express",
          codeDescription: "./src/lib/auth.ts",
          code: await highlight(
            `import { Google } from "arctic";
import { CreateLightAuth } from "@light-auth/nextjs";

const googleProvider = {
  providerName: "google",
  artic: new Google(
    process.env.GOOGLE_CLIENT_ID || "",
    process.env.GOOGLE_CLIENT_SECRET || "",
    "http://localhost:3000/api/auth/callback/google"
  ),
};

export const { providers, handlers, middleware, signIn, signOut, getSession, getUser } 
  = CreateLightAuth({ providers: [googleProvider]});`,
            "ts"
          ),
        },
      ],
    },
    {
      id: "handlers",
      defaultValue: "nextjs",
      tabs: [
        {
          image: <Image src="/nextjs.svg" alt="Next.js Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "nextjs",
          title: "Next.js",
          codeDescription: "./app/api/auth/[...lightauth].ts",
          code: await highlight(
            `import { handlers } from "@/lib/auth";
export const { GET, POST } = handlers;`,
            "ts"
          ),
        },
        {
          image: <Image src="/astro.svg" alt="Astro Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "astro",
          title: "Astro",
          codeDescription: "./src/pages/api/auth/[...lightauth].ts",
          code: await highlight(
            `import { handlers } from "@/lib/auth";
export const { GET, POST } = handlers;`,
            "ts"
          ),
        },
        {
          image: <Image src="/express.svg" alt="Express Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "express",
          title: "Express",
          codeDescription: "./src/app.ts",
          code: await highlight(
            `import { getSession, getUser, handlers, middleware, signIn, signOut } from "./auth";

// handlers for everything related to light-auth
app.use("/api/auth/", handlers);

// Middleware to set the session and user in res.locals
app.use(middleware);

`,
            "ts"
          ),
        },
      ],
    },
  ];

  return <GetStartedClientPage codeBlocks={codeBlocks} />;
}
