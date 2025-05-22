import { LanguageCodeBlock } from "../../models/code-block-type";
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
        title: "Server side authentication logic",
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
  arctic: new Google(
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
        name: "auth-client.ts",
        codeDescription: "./app/lib/auth-client.ts",
        title: "Client side Authentication Logic",
        description: <div>This file contains the authentication objects you can use in the client side.</div>,
        codeString: `"use client";

import { CreateLightAuthClient } from "@light-auth/nextjs/client";

export const { getSession, getUser, signIn, signOut } = CreateLightAuthClient();
`,
        language: "ts",
      },
      {
        name: "login.tsx",
        codeDescription: "./app/login.tsx",
        title: "Login Page",
        description: <div>This file contains the login page. You can choose a client side logic or a form action to login using your provider.</div>,
        codeString: `import { signIn } from "@/lib/auth";
import { ClientLoginButton } from "@/components/client/client-login-button";

export default function LoginPage() {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signIn("google", "/profile");
        }}
      >
        <button type="submit">login using a form action</button>
      </form>
      <ClientLoginButton providerName="google" callbackUrl="/profile" >
        login using client side
      </ClientLoginButton>
    </div>
  );
}`,
        language: "tsx",
      },
      {
        name: "client-login-button.tsx",
        codeDescription: "./components/client/client-login-button.tsx",
        title: "Client button",
        description: (
          <div>
            This file contains the client login button component. You can use this component to trigger the login process using the specified provider on the
            client side.
          </div>
        ),
        codeString: `"use client";

import { signIn } from "@/lib/auth-client";

export function ClientLoginButton(
{ children, providerName, callbackUrl }: 
{ children: React.ReactNode; providerName: string; callbackUrl: string }) {

  return (
    <button type="button" onClick={() => signIn(providerName, callbackUrl)}>
      {children}
    </button>
  );
}
`,
        language: "tsx",
      },
      {
        name: "profile.tsx",
        codeDescription: "./app/profile.tsx",
        title: "Profile Page",
        description: <div>Retrieves the session information to check if user is authenticated or not and displays it.</div>,
        codeString: `import { getSession } from "@/lib/auth";

export default async function Home() {
  const session = await getSession();

  return (
    <div>
      {session != null ? (
        <div>
          <p>✅ You are logged in!</p>
          <div>Session Email: {session.email}</div>
          <div>Session Provider: {session.providerName}</div>
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
        name: "example",
        title: "GitHub Example",
        description: <div>See this github sample for a simple implementation of light-auth with Next JS</div>,
      },
    ],
  },
  {
    image: <Image src="/nuxtjs.svg" alt="Nuxt Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
    name: "nuxt",
    title: "Nuxt",
    installationTabs: {
      defaultValue: "npm",
      tabs: [
        {
          image: <Image src="/npmjs.svg" alt="NPM Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "npm",
          title: "NPM",
          codeString: "npm install light-auth-nuxt",
          language: "sh",
        },
        {
          image: <Image src="/yarn.svg" alt="Yarn Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "yarn",
          title: "Yarn",
          codeString: "yarn add light-auth-nuxt",
          language: "sh",
        },
        {
          image: <Image src="/pnpm.svg" alt="PNPM Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "pnpm",
          title: "PNPM",
          codeString: "pnpm add light-auth-nuxt",
          language: "sh",
        },
      ],
    },
    steps: [
      {
        name: "auth.ts",
        codeDescription: "./server/auth.ts",
        title: "Server side authentication logic",
        description: <div>This file contains the server side authentication logic and configuration.</div>,
        codeString: `import { Google } from "arctic";
import { CreateLightAuth } from "@light-auth/nuxt";

const googleProvider = {
  providerName: "google",
  arctic: new Google(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    "http://localhost:3000/api/auth/callback/google"
  ),
};

export const { providers, handlers, signIn, signOut, getSession, getUser } = CreateLightAuth({providers: [googleProvider]});`,
        language: "ts",
      },
      {
        name: "handlers.ts",
        title: "API Handlers",
        codeDescription: "./server/api/auth/[...lightauth].ts",
        codeString: `import { handlers } from "~/server/auth";
export default defineEventHandler(handlers);`,
        language: "ts",
      },
      {
        name: "handlers.ts",
        title: "Form Actions",
        codeDescription: "./server/api/actions/login.ts",
        codeString: `import { signIn } from "~/server/auth";

export default defineEventHandler(async (event) => {
  const querieObjects = getQuery(event);
  await signIn(querieObjects.providerName, querieObjects.callbackUrl, event);
});`,
        language: "ts",
      },
      {
        name: "auth-client.ts",
        title: "Client side Authentication Logic",
        codeDescription: "./utils/auth-client.ts",
        codeString: `import { CreateLightAuthClient } from "@light-auth/nuxt/client";

export const { signIn, signOut, getSession, getUser } = CreateLightAuthClient();`,
        language: "ts",
      },
      {
        name: "index.vue",
        codeDescription: "./pages/index.vue",
        codeString: `<script setup lang="ts">
import { getSession, getUser, signIn, signOut } from "#imports";
const session = await getSession();
</script>

<template>
  <div>
    <div v-if="session != null">
      <h1>You are logged in!</h1>
      <button @click="signOut()">Logout</button>
      <p>{{ session.email }}</p>
    </div>

    <div v-if="session == null">
      <form action="api/actions/login" method="POST">
        <input type="hidden" name="providerName" value="google" />
        <input type="hidden" name="callbackUrl" value="/dashboard" />
        <button type="submit">Sign in using POST action</button>
      </form>

      <button @click="signIn('google', '/dashboard')">Sign in from Client side</button>
    </div>
  </div>
</template>
`,
        language: "vue",
      },
    ],
  },
  {
    image: <Image src="/sveltekit.svg" alt="Svelte Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
    name: "SvelteKit",
    title: "SvelteKit",
    installationTabs: {
      defaultValue: "npm",
      tabs: [
        {
          image: <Image src="/npmjs.svg" alt="NPM Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "npm",
          title: "NPM",
          codeString: "npm install light-auth-sveltekit",
          language: "sh",
        },
        {
          image: <Image src="/yarn.svg" alt="Yarn Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "yarn",
          title: "Yarn",
          codeString: "yarn add light-auth-sveltekit",
          language: "sh",
        },
        {
          image: <Image src="/pnpm.svg" alt="PNPM Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "pnpm",
          title: "PNPM",
          codeString: "pnpm add light-auth-sveltekit",
          language: "sh",
        },
      ],
    },
    steps: [
      {
        name: "auth.ts",
        codeDescription: "./src/lib/server/auth.ts",
        codeString: `import { Google } from "arctic";
import { CreateLightAuth } from "@light-auth/sveltekit";
import { env } from '$env/dynamic/private';


const googleProvider = {
  providerName: "google",
  arctic: new Google(env.GOOGLE_CLIENT_ID, env.GOOGLE_CLIENT_SECRET,
    "http://localhost:3000/api/auth/callback/google"
  ),
};

export const { providers, handlers, signIn, signOut, getSession, getUser } = CreateLightAuth({
  providers: [googleProvider],
  env: env
});`,
        language: "ts",
      },
      {
        name: "handlers.ts",
        codeDescription: "./src/routes/api/auth/[...lightauth]/+server.ts",
        codeString: `import { handlers } from '$lib/server/auth';

export const { GET, POST } = handlers;`,
        language: "ts",
      },
      {
        name: "auth-client.ts",
        codeDescription: "./src/lib/auth-client.ts",
        codeString: `import { CreateLightAuthClient } from "@light-auth/sveltekit/client";

export const { signIn, signOut, getSession, getUser } = CreateLightAuthClient();`,
        language: "ts",
      },
      {
        name: "action.ts",
        codeDescription: "./src/+page.server.ts",
        codeString: `import { signIn } from '$lib/server/auth';

export const actions = {
	default: async (event) => {
		const data = await event.request.formData();

		const providerName = data.get('providerName');
		const callbackUrl = data.get('callbackUrl');
		if (typeof providerName !== 'string') throw new Error('Invalid provider');
		if (typeof callbackUrl !== 'string') throw new Error('Invalid callback URL');

		await signIn(providerName, callbackUrl, event);
	}
};`,
        language: "ts",
      },
      {
        name: "page.svelte",
        codeDescription: "./src/+page.svelte",
        codeString: `<script lang="ts">
	import { signIn } from '$lib/auth-client';

	const handleClick = () => signIn('google', '/profile');
</script>

<form method="POST">
	<input type="hidden" name="providerName" value="google" />
	<input type="hidden" name="callbackUrl" value="/" />
	<button type="submit">Sign in using POST action</button>
</form>

<button	on:click={handleClick} type="button">Sign in with from client-side</button>`,
        language: "svelte",
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
import { CreateLightAuth } from "@light-auth/astro";

const googleProvider {
  providerName: "google",
  arctic: new Google(
    import.meta.env.GOOGLE_CLIENT_ID, 
    import.meta.env.GOOGLE_CLIENT_SECRET, 
    "http://localhost:4321/api/auth/callback/google")
};

export const { providers, handlers, getSession, getUser, signIn, signOut } = CreateLightAuth({providers: [googleProvider]});
`,
        language: "ts",
      },
      {
        name: "handlers.ts",
        codeDescription: "./src/pages/api/auth/[...lightauth].ts",
        codeString: `import { handlers } from "@/lib/auth";
export const { GET, POST } = handlers;`,
        language: "ts",
      },
      {
        name: "auth-client.ts",
        codeDescription: "./src/lib/auth-client.ts",
        codeString: `import { CreateLightAuthClient } from "@light-auth/sveltekit/client";

export const { signIn, signOut, getSession, getUser } = CreateLightAuthClient();`,
        language: "ts",
      },
      {
        name: "action.ts",
        codeDescription: "./src/actions/index.ts",
        codeString: `import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  login: defineAction({
    accept: "form",
    input: z.object({ providerName: z.string(), callbackUrl: z.string() }),
    handler(input, context) {
      return { providerName: input.providerName, callbackUrl: input.callbackUrl };
    },
  }),
};`,
        language: "ts",
      },
      {
        name: "index.astro",
        codeDescription: "./src/pages/index.astro",
        codeString: `---
import { getSession, getUser, signIn } from "@/lib/auth";
import { actions } from "astro:actions";

export const prerender = false;

const session = await getSession(Astro);
const user = await getUser(Astro);

const result = Astro.getActionResult(actions.login);
if (result && !result.error && result.data) {
  return await signIn(result.data.providerName, result.data.callbackUrl, Astro);
}
---

<Layout title="Astro Authentication using light-auth">
    <div>
      {session != null ? (
          <p>✅ You are logged in!</p>
          <div>{session.email}</div>
        ) : (
          <div>
            <button id="btnLogin">Login from client component</button>
          </div>
          <div>
            <form method="POST" action={actions.login}>
              <input type="hidden" name="providerName" value="google" />
              <input type="hidden" name="callbackUrl" value="/" />
              <button id="btnLoginForm" type="submit">Login from form action</button>
            </form>            
          </div>
        )
      }
  </div>
</Layout>

<script>
  import { signIn } from "@/lib/auth-client";
  
  const btnLogin = document.getElementById("btnLogin");
  btnLogin.onclick = () => signIn("google", "/");
</script>
`,
        language: "astro",
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
import { CreateLightAuth } from "@light-auth/express";

const googleProvider = {
  providerName: "google",
  arctic: new Google(
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
        name: "auth-client.ts",
        codeDescription: "./src/lib/auth-client.ts",
        codeString: `import { CreateLightAuthClient } from "@light-auth/express/client";

export const { getSession, getUser, signIn, signOut } = CreateLightAuthClient({
  basePath: "/api/auth",
});`,
        language: "ts",
      },
      {
        name: "app.ts",
        codeDescription: "./src/app.ts",
        codeString: `import { getSession, getUser, handlers, middleware, signIn, signOut } from "../lib/auth";

export const app = express();

// handlers for everything related to light-auth
app.use("/api/auth/", handlers);

// Middleware to set the session and user in res.locals
app.use(middleware);

// index page
app.get("/", async (req: Request, res: Response) => {
  res.render("index", {
    session: res.locals.session,
  });
});

// login page
app.post("/login", async (req: Request, res: Response) => {
  const providerName = req.body.providerName;
  await signIn(providerName, "/", req, res);
});
`,
        language: "ts",
      },
      {
        name: "login.ts",
        codeDescription: "./src/lib/login.ts",
        codeString: `import { signIn } from "./auth-client";

document.addEventListener("DOMContentLoaded", function () {
  const btnLogin = document.getElementById("btnLogin");
  btnLogin.addEventListener("click", function (event) {
    event.preventDefault();
    signIn("google", "/");
  }
});
`,
        language: "ts",
      },
      {
        name: "login.pug",
        codeDescription: "./view/login.pug",
        codeString: `extends layout

block content
    main
      form(action="/login" method="POST")
            input(type="hidden" name="providerName" value="google")
            button(data-slot="button" type="submit")
                Login using form action

      button(data-slot="button" id="btnLogin" type="button")
          Login using client Side                       

    script(src='js/index.js' type="module")
`,
        language: "pug",
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
