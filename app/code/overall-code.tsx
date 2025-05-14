import { LanguageCodeBlock } from "../models/code-block-type";
import Image from "next/image";
import { highlight } from "@/lib/highlight";
import Link from "next/link";

export const languagesCodeBlocks: LanguageCodeBlock[] = [
  {
    image: <Image src="/nextjs.svg" alt="Next.js Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
    name: "nextjs",
    title: "Next.js",
    installationTabs: {
      defaultValue: "npm",
      tabs: [
        {
          image: <Image src="/npmjs.svg" alt="NPM Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "npm",
          title: "NPM",
          codeString: "npm install light-auth-nextjs",
          language: "sh",
        },
        {
          image: <Image src="/yarn.svg" alt="Yarn Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "yarn",
          title: "Yarn",
          codeString: "yarn add light-auth-nextjs",
          language: "sh",
        },
        {
          image: <Image src="/pnpm.svg" alt="PNPM Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "pnpm",
          title: "PNPM",
          codeString: "pnpm add light-auth-nextjs",
          language: "sh",
        },
      ],
    },
    steps: [
      {
        name: "auth.ts",
        codeDescription: "./app/lib/auth.ts",
        title: "Authentication Logic",
        description: (
          <div>
            This file contains the authentication logic and configuration. See{" "}
            <Link className="text-blue-600 hover:underline" href={"/docs/"}>
              documentation
            </Link>{" "}
            for more details.
          </div>
        ),
        codeString: `import { Google } from "arctic";
import { CreateLightAuth } from "@light-auth/nextjs";

const googleProvider = {
  providerName: "google",
  artic: new Google(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "http://localhost:3000/api/auth/callback/google"
  ),
};

export const { providers, handlers, signIn, signOut, getSession, getUser } = CreateLightAuth({
  providers: [googleProvider]
});`,
        language: "ts",
      },
      {
        name: "handlers.ts",
        title: "API Handlers",
        description: (
          <div>
            This file contains the API handlers for authentication. See{" "}
            <Link className="text-blue-600 hover:underline" href={"/docs/"}>
              documentation
            </Link>{" "}
            for more details.
          </div>
        ),
        codeDescription: "./app/api/auth/[...lightauth].ts",
        codeString: `import { handlers } from "@/lib/auth";
export const { GET, POST } = handlers;`,
        language: "ts",
      },
      {
        name: "login.tsx",
        codeDescription: "./app/login.tsx",
        title: "Login Page",
        description: (
          <div>
            This file contains the login page. You can choose a direct link or a form action to login using the provider's login page. See{" "}
            <Link className="text-blue-600 hover:underline" href={"/docs/"}>
              documentation
            </Link>{" "}
            for more details.
          </div>
        ),
        codeString: `import { signIn } from "@/lib/auth";

export default function LoginPage() {
  return (
    <div>
      {/* You can use a direct link to login using the provider's login page. */}
      <a href={"/api/auth/login/google"}>Google (using a direct link)</a>

      {/* Or you can use a form action to login using the signIn function. */}
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Google (using a form action)</button>
      </form>
    </div>
  );
}`,
        language: "ts",
      },
      {
        name: "profile.tsx",
        codeDescription: "./app/profile.tsx",
        title: "Profile Page",
        description: (
          <div>
            <div>Retrieves the session information to check if user is authenticated or not and displays it.</div>
            <div>The user's profile information can be also retrieved using the getUser() function.</div>
            <div>
              See{" "}
              <Link className="text-blue-600 hover:underline" href={"/docs/"}>
                documentation on getUser() and getSession()
              </Link>{" "}
              to see the difference between them.
            </div>
          </div>
        ),
        codeString: `import { getSession } from "@/lib/auth";

export default async function Home() {
  const session = await getSession();

  return (
    <div>
      {session != null ? (
        <div>
          <p>✅ You are logged in!</p>
          <div>Session Id: {session.id}</div>
          <div>Session Email: {session.email}</div>
          <div>Session Name: {session.name}</div>
          <div>Session Provider: {session.providerName}</div>
          <div>Session UserId: {session.userId}</div>
          <div>Session Expiration: {session.expiresAt.toString()}</div>
        </div>
      ) : (
        <div>
          <p>⚠️ You are not logged in</p>
          <a href="/login"> Go to Login Page </a>
        </div>
      )}
    </div>
  );
}`,
        language: "ts",
      },
      {
        name: "logout.tsx",
        codeDescription: "./app/logout.tsx",
        title: "Logout Page",
        description: <div>This file contains the logout page. You can choose a direct link or a form action to logout using the provider's logout page.</div>,
        codeString: `import { signOut } from "@/lib/auth";

export default function LogoutPage() {
  return (
    <div>
      {/* You can use a direct link to logout using the provider's logout page. */}
      <a href={"/api/auth/logout"}>Logout (using a direct link)</a>

      {/* Or you can use a form action to logout using the signOut function. */}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button type="submit">Logout (using a form action)</button>
      </form>
    </div>
  );
}`,
        language: "ts",
      },
      {
        name: "example",
        title: "GitHub Example",
        description: <div>See this github sample for a simple implementation of light-auth with Next JS</div>,
      },
    ],
  },
  {
    image: <Image src="/astro.svg" alt="Astro Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
    name: "astro",
    title: "Astro",
    installationTabs: {
      defaultValue: "npm",
      tabs: [
        {
          image: <Image src="/npmjs.svg" alt="NPM Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "npm",
          title: "NPM",
          codeString: "npm install light-auth-astro",
          language: "sh",
        },
        {
          image: <Image src="/yarn.svg" alt="Yarn Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "yarn",
          title: "Yarn",
          codeString: "yarn add light-auth-astro",
          language: "sh",
        },
        {
          image: <Image src="/pnpm.svg" alt="PNPM Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "pnpm",
          title: "PNPM",
          codeString: "pnpm add light-auth-astro",
          language: "sh",
        },
      ],
    },
    steps: [
      {
        name: "auth.ts",
        codeDescription: "./src/lib/auth.ts",
        codeString: `import { Google } from "arctic";
import { CreateLightAuth } from "@light-auth/nextjs";

const googleProvider = {
  providerName: "google",
  artic: new Google(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "http://localhost:3000/api/auth/callback/google"
  ),
};

export const { providers, handlers, getSession, getUser } = CreateLightAuth({
  providers: [googleProvider]
});`,
        language: "ts",
      },
      {
        name: "handlers.ts",
        codeDescription: "./src/pages/api/auth/[...lightauth].ts",
        codeString: `import { handlers } from "@/lib/auth";
export const { GET, POST } = handlers;`,
        language: "ts",
      },
    ],
  },
  {
    image: <Image src="/express.svg" alt="Express Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
    name: "express",
    title: "Express",
    installationTabs: {
      defaultValue: "npm",
      tabs: [
        {
          image: <Image src="/npmjs.svg" alt="NPM Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "npm",
          title: "NPM",
          codeString: "npm install light-auth-express",
          language: "sh",
        },
        {
          image: <Image src="/yarn.svg" alt="Yarn Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "yarn",
          title: "Yarn",
          codeString: "yarn add light-auth-express",
          language: "sh",
        },
        {
          image: <Image src="/pnpm.svg" alt="PNPM Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "pnpm",
          title: "PNPM",
          codeString: "pnpm add light-auth-express",
          language: "sh",
        },
      ],
    },
    steps: [
      {
        name: "auth.ts",
        codeDescription: "./src/lib/auth.ts",
        codeString: `import { Google } from "arctic";
import { CreateLightAuth } from "@light-auth/nextjs";

const googleProvider = {
  providerName: "google",
  artic: new Google(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "http://localhost:3000/api/auth/callback/google"
  ),
};

export const { providers, handlers, middleware, signIn, signOut, getSession, getUser } 
  = CreateLightAuth({ providers: [googleProvider]});`,
        language: "ts",
      },
      {
        name: "handlers.ts",
        codeDescription: "./src/app.ts",
        codeString: `import { getSession, getUser, handlers, middleware, signIn, signOut } from "./auth";

// handlers for everything related to light-auth
app.use("/api/auth/", handlers);

// Middleware to set the session and user in res.locals
app.use(middleware);`,
        language: "ts",
      },
    ],
  },
];

export const getLanguagesCodeBlocks = async () => {
  const overAllCode = await Promise.all(
    languagesCodeBlocks.map(async (codeBlock) => {
      return {
        ...codeBlock,
        installationTabs: {
          defaultValue: codeBlock.installationTabs.defaultValue,
          tabs: await Promise.all(
            codeBlock.installationTabs.tabs.map(async (tab) => {
              return {
                ...tab,
                code: tab.codeString ? await highlight(tab.codeString, tab.language || "sh") : undefined,
              };
            })
          ),
        },
        steps: await Promise.all(
          codeBlock.steps.map(async (step) => {
            return {
              ...step,
              code: step.codeString ? await highlight(step.codeString, step.language || "sh") : undefined,
            };
          })
        ),
      };
    })
  );
  return overAllCode;
};
