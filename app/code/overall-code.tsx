import { LanguageCodeBlock } from "../../models/code-block-type";
import Image from "next/image";
import { highlight } from "@/lib/highlight";
import Link from "next/link";
import { Callout } from "@/components/ui/callout";
import { ExternalLink } from "@/components/external-link";

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
          codeString: "npm install @light-auth/nextjs",
          language: "sh",
        },
        {
          image: <Image src="/yarn.svg" alt="Yarn Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "yarn",
          title: "Yarn",
          codeString: "yarn add @light-auth/nextjs",
          language: "sh",
        },
        {
          image: <Image src="/pnpm.svg" alt="PNPM Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "pnpm",
          title: "PNPM",
          codeString: "pnpm add @light-auth/nextjs",
          language: "sh",
        },
      ],
    },
    steps: [
      {
        name: "show_me_the_code",
        title: "TL; DR; Show me the code",
        description: (
          <p>
            Okay, here is the hello world of Light-Auth with Next.js:{" "}
            <ExternalLink href="https://github.com/lightauth/light-auth-nextjs-sample-one">light-auth-nextjs-sample-one</ExternalLink>
          </p>
        ),
      },
      {
        name: "auth.ts",
        codeDescription: "./lib/auth.ts",
        title: "Server Configuration",
        description: (
          <div>
            <div>
              This file contains the authentication logic and configuration. The exports consts are <code>providers</code>, <code>handlers</code>,{" "}
              <code>signIn</code>, <code>signOut</code>, <code>getAuthSession</code>, and <code>getUser</code>.
            </div>
            <div>These constants are used throughout the application to manage authentication.</div>
          </div>
        ),
        codeString: `import { Google, Github } from "arctic";
import { CreateLightAuth } from "@light-auth/nextjs";

const googleProvider = {
  providerName: "google",
  arctic: new Google(
    process.env.GOOGLE_CLIENT_ID!,
    process.env.GOOGLE_CLIENT_SECRET!,
    "http://localhost:3000/api/auth/callback/google"
  ),
};


const githubProvider = {
  providerName: "github",
  arctic: new GitHub(
    process.env.GITHUB_CLIENT_ID!,
    process.env.GITHUB_CLIENT_SECRET!,
    "http://localhost:3000/api/auth/callback/github"
  ),
};

export const { providers, handlers, signIn, signOut, getAuthSession, getUser } = CreateLightAuth({
  providers: [googleProvider, githubProvider]
});`,
        language: "ts",
      },
      {
        name: "handlers.ts",
        title: "Authentication Handlers",
        description: (
          <div>
            This file contains the authentication handlers for the API. <br />
            These handlers are responsible for processing authentication requests and returning the appropriate responses. <br />
            The handlers are exported as <code>GET</code> and <code>POST</code> methods.
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
            <div>This file contains the login page using a form action to login using your provider.</div>
            <div>
              You can also use client components to trigger the login process. <br />
              See the documentation{" "}
              <Link href="/docs/client-server-auth" className="text-blue-500 underline">
                Client Components
              </Link>{" "}
              for more information.
            </div>
          </div>
        ),
        codeString: `import { signIn } from "@/lib/auth";

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
    </div>
  );
}`,
        language: "tsx",
      },
      {
        name: "profile.tsx",
        codeDescription: "./app/profile.tsx",
        title: "Profile Page",
        description: <div>Retrieves the session information to check if user is authenticated or not and displays it.</div>,
        codeString: `import { getAuthSession } from "@/lib/auth";

export default async function Home() {
  const session = await getAuthSession();

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
        language: "tsx",
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
          codeString: "npm install @light-auth/nuxt",
          language: "sh",
        },
        {
          image: <Image src="/yarn.svg" alt="Yarn Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "yarn",
          title: "Yarn",
          codeString: "yarn add @light-auth/nuxt",
          language: "sh",
        },
        {
          image: <Image src="/pnpm.svg" alt="PNPM Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "pnpm",
          title: "PNPM",
          codeString: "pnpm add @light-auth/nuxt",
          language: "sh",
        },
      ],
    },
    steps: [
      {
        name: "show_me_the_code",
        title: "TL; DR; Show me the code",
        description: (
          <p>
            Okay, here is the hello world of Light-Auth with Nuxt:{" "}
            <ExternalLink href="https://github.com/lightauth/light-auth-nuxt-sample-one">light-auth-nuxt-sample-one</ExternalLink>
          </p>
        ),
      },
      {
        name: "config",
        title: "Nuxt specific configuration",
        description: (
          <div>
            <Callout variant="warning" className="my-4">
              We are using internally a lot of the functions from <code>#imports</code>, so we need to transpile correctly the package.
              <br />
              This step is mandatory to make the package works correctly with Nuxt.
            </Callout>
            <p>
              Add <code>@light-auth/nuxt</code> to the build step to transpile it with Babel:
            </p>
          </div>
        ),
        codeDescription: "./nuxt.config.ts",
        codeString: `export default defineNuxtConfig({
  ....,
  build: {
    transpile: ["@light-auth/nuxt"]
  }
})`,
      },
      {
        name: "auth.ts",
        codeDescription: "./server/utils/auth.ts",
        title: "Server Configuration",
        description: (
          <div>
            <div>
              This file contains the authentication logic and configuration. The exports consts are <code>providers</code>, <code>handlers</code>,{" "}
              <code>signIn</code>, <code>signOut</code>, <code>getAuthSession</code>, and <code>getUser</code>.
            </div>
            <div>These constants are used throughout the application to manage authentication.</div>
          </div>
        ),
        codeString: `import { Google } from "arctic";
import { CreateLightAuth } from "@light-auth/nuxt";

const googleProvider = {
  providerName: "google",
  arctic: new Google(
    process.env.GOOGLE_CLIENT_ID!,
    process.env.GOOGLE_CLIENT_SECRET!,
    "http://localhost:3000/api/auth/callback/google"
  ),
};

export const { providers, handlers, signIn, signOut, getAuthSession, getUser } = CreateLightAuth({providers: [googleProvider]});`,
        language: "ts",
      },
      {
        name: "handlers.ts",
        title: "Authentication Handlers",
        description: (
          <div>
            This file contains the authentication handlers for the API. <br />
            These handlers are responsible for processing authentication requests and returning the appropriate responses. <br />
            The handlers are exported using the Nuxt <code>defineEventHandler</code> function.
          </div>
        ),
        codeDescription: "./server/api/auth/[...lightauth].ts",
        codeString: `import { handlers } from "~/server/auth";
export default defineEventHandler(handlers);`,
        language: "ts",
      },
      {
        name: "actions.ts",
        title: "Form Actions",
        description: (
          <div>
            This file contains the form action for the login process. <br />
            The login action is responsible for processing the login form submission and redirect the request to the appropriate provider. <br />
            The action is exported using the Nuxt <code>defineEventHandler</code> function.
          </div>
        ),
        codeDescription: "./server/api/actions/login.ts",
        codeString: `import { signIn } from "~/server/auth";

export default defineEventHandler(async (event) => {
  const querieObjects = getQuery(event);

  await signIn(querieObjects.providerName, querieObjects.callbackUrl, event);
});`,
        language: "ts",
      },
      {
        name: "login.vue",
        codeDescription: "./pages/login.vue",
        title: "Login Page",
        description: (
          <div>
            <div>This file contains the login page using a form action to login using your provider.</div>
            <div>
              You can also use client components to trigger the login process. <br />
              See the documentation{" "}
              <Link href="/docs/client-server-auth" className="text-blue-500 underline">
                Client Components
              </Link>{" "}
              for more information.
            </div>
          </div>
        ),
        codeString: `<template>
    <div>
      <form action="api/actions/login" method="POST">
        <input type="hidden" name="providerName" value="google" />
        <input type="hidden" name="callbackUrl" value="/dashboard" />
        <button type="submit">Sign in using POST action</button>
      </form>
    </div>
  </div>
</template>
`,
        language: "vue",
      },
      {
        name: "profile.vue",
        codeDescription: "./app/profile.vue",
        title: "Profile Page",
        description: <div>Retrieves the session information to check if user is authenticated or not and displays it.</div>,
        codeString: `<script setup lang="ts">
import { CreateLightAuthClient } from "@light-auth/nuxt/client";
const { useSession } = CreateLightAuthClient();
const { data: session, refresh, status, pending, error } = useSession();
</script>

<template>
  <div v-if="session">
    <h1>You are logged in!</h1>
    <p>{{ session.email }}</p>
  </div>
  <div v-if="!session">
    <h1>You are not logged in!</h1>
    <a href="/login">Login</a>
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
          codeString: "npm install @light-auth/sveltekit",
          language: "sh",
        },
        {
          image: <Image src="/yarn.svg" alt="Yarn Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "yarn",
          title: "Yarn",
          codeString: "yarn add @light-auth/sveltekit",
          language: "sh",
        },
        {
          image: <Image src="/pnpm.svg" alt="PNPM Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "pnpm",
          title: "PNPM",
          codeString: "pnpm add @light-auth/sveltekit",
          language: "sh",
        },
      ],
    },
    steps: [
      {
        name: "show_me_the_code",
        title: "TL; DR; Show me the code",
        description: (
          <p>
            Okay, here is the hello world of Light-Auth with SvelteKit:{" "}
            <ExternalLink href="https://github.com/lightauth/light-auth-sveltekit-sample-one">light-auth-sveltekit-sample-one</ExternalLink>
          </p>
        ),
      },
      {
        name: "auth.ts",
        title: "Server Configuration",
        codeDescription: "./src/lib/server/auth.ts",
        description: (
          <div>
            <div>
              This file contains the authentication logic and configuration. The exports consts are <code>providers</code>, <code>handlers</code>,{" "}
              <code>signIn</code>, <code>signOut</code>, <code>getAuthSession</code>, and <code>getUser</code>.
            </div>
            <div>These constants are used throughout the application to manage authentication.</div>
          </div>
        ),
        codeString: `import { Google } from "arctic";
import { CreateLightAuth } from "@light-auth/sveltekit";
import { env } from '$env/dynamic/private';


const googleProvider = {
  providerName: "google",
  arctic: new Google(env.GOOGLE_CLIENT_ID!, env.GOOGLE_CLIENT_SECRET!,
    "http://localhost:5173/api/auth/callback/google"
  ),
};

export const { providers, handlers, signIn, signOut, getAuthSession, getUser } = CreateLightAuth({
  providers: [googleProvider],
  env: env
});`,
        language: "ts",
      },
      {
        name: "handlers.ts",
        codeDescription: "./src/routes/api/auth/[...lightauth]/+server.ts",
        title: "Authentication Handlers",
        description: (
          <div>
            This file contains the authentication handlers for the API. <br />
            These handlers are responsible for processing authentication requests and returning the appropriate responses. <br />
            The handlers are exported as <code>GET</code> and <code>POST</code> methods.
            <Callout variant="error" className="my-2">
              Due to a bug in SvelteKit, the redirect response is not handled correctly. <br />
              Until this bug is fixed (<ExternalLink href="https://github.com/sveltejs/kit/issues/13816">#13816</ExternalLink>), we need to handle the redirect
              manually.
            </Callout>
          </div>
        ),
        codeString: `import { handlers } from '$lib/server/auth';
import { redirect, type RequestEvent } from '@sveltejs/kit';

const handlersSvelteKit = {
	GET: async (event?: RequestEvent) => {
		try {
			return await handlers.GET(event);
		} catch (error) {
			const redirectError = error as { status: number; location: string };
			if (redirectError && redirectError?.status === 302) redirect(redirectError.status, redirectError.location);
		}
	},
	POST: async (event?: RequestEvent) => {
		try {
			return await handlers.POST(event);
		} catch (error) {
			const redirectError = error as { status: number; location: string };
			if (redirectError && redirectError?.status === 302) redirect(redirectError.status, redirectError.location);
		}
	}
};

export const { GET, POST } = handlersSvelteKit;
`,
        language: "ts",
      },
      {
        name: "action.ts",
        title: "Form Actions",
        description: (
          <div>
            This file contains the form action for the login process. <br />
            The login action is responsible for processing the login form submission and redirect the request to the appropriate provider. <br />
            <Callout variant="error" className="my-2">
              Due to a bug in SvelteKit, the redirect response is not handled correctly. <br />
              Until this bug is fixed (<ExternalLink href="https://github.com/sveltejs/kit/issues/13816">#13816</ExternalLink>), we need to handle the redirect
              manually.
            </Callout>
          </div>
        ),
        codeDescription: "./src/+page.server.ts",
        codeString: `import { signIn, getAuthSession } from '$lib/server/auth';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const load = async (event) => {
	const session = await getAuthSession(event);
	return { session };
};

export const actions = {
	default: async (event) => {
		try {
			const data = await event.request.formData();

			const providerName = data.get('providerName');
			const callbackUrl = data.get('callbackUrl');
			if (typeof providerName !== 'string') throw new Error('Invalid provider');
			if (typeof callbackUrl !== 'string') throw new Error('Invalid callback URL');

			await signIn(providerName, callbackUrl, event);
		} catch (error) {
			const r = error as { status: number; location: string };
			if (r?.status === 302) redirect(r.status, r.location);
		}
	}
} satisfies Actions;`,
        language: "ts",
      },
      {
        name: "page.svelte",
        codeDescription: "./src/+page.svelte",
        title: "Login Page",
        description: (
          <div>
            <div>This file contains the login page using a form action to login using your provider.</div>
            <div>
              You can also use client components to trigger the login process. <br />
              See the documentation{" "}
              <Link href="/docs/client-server-auth" className="text-blue-500 underline">
                Client Components
              </Link>{" "}
              for more information.
            </div>
          </div>
        ),
        codeString: `<script lang="ts">
	let { data } = $props();
</script>

<div>
{#if data.session}
  <p>You are logged in as {data.session.email}</p>
{:else}        
  <form method="POST">
    <input type="hidden" name="providerName" value="google" />
    <input type="hidden" name="callbackUrl" value="/" />
    <button type="submit">Sign in using POST action</button>
  </form>
{/if}  
</div>`,
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
          codeString: "npm install @light-auth/astro",
          language: "sh",
        },
        {
          image: <Image src="/yarn.svg" alt="Yarn Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "yarn",
          title: "Yarn",
          codeString: "yarn add @light-auth/astro",
          language: "sh",
        },
        {
          image: <Image src="/pnpm.svg" alt="PNPM Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "pnpm",
          title: "PNPM",
          codeString: "pnpm add @light-auth/astro",
          language: "sh",
        },
      ],
    },
    steps: [
      {
        name: "show_me_the_code",
        title: "TL; DR; Show me the code",
        description: (
          <p>
            Okay, here is the hello world of Light-Auth with Astro:{" "}
            <ExternalLink href="https://github.com/lightauth/light-auth-astro-sample-one">light-auth-astro-sample-one</ExternalLink>
          </p>
        ),
      },
      {
        name: "auth.ts",
        codeDescription: "./src/lib/auth.ts",
        title: "Server Configuration",
        description: (
          <div>
            <div>
              This file contains the authentication logic and configuration. The exports consts are <code>providers</code>, <code>handlers</code>,{" "}
              <code>signIn</code>, <code>signOut</code>, <code>getAuthSession</code>, and <code>getUser</code>.
            </div>
            <div>These constants are used throughout the application to manage authentication.</div>
          </div>
        ),
        codeString: `import { Google } from "arctic";
import { CreateLightAuth } from "@light-auth/astro";

const googleProvider {
  providerName: "google",
  arctic: new Google(
    import.meta.env.GOOGLE_CLIENT_ID!, 
    import.meta.env.GOOGLE_CLIENT_SECRET!, 
    "http://localhost:4321/api/auth/callback/google")
};

export const { providers, handlers, getAuthSession, getUser, signIn, signOut } = CreateLightAuth({providers: [googleProvider]});
`,
        language: "ts",
      },
      {
        name: "handlers.ts",
        title: "Authentication Handlers",
        description: (
          <div>
            This file contains the authentication handlers for the API. <br />
            These handlers are responsible for processing authentication requests and returning the appropriate responses. <br />
            The handlers are exported as <code>GET</code> and <code>POST</code> methods.
          </div>
        ),
        codeDescription: "./src/pages/api/auth/[...lightauth].ts",
        codeString: `import { handlers } from "@/lib/auth";
export const { GET, POST } = handlers;`,
        language: "ts",
      },
      {
        name: "action.ts",
        codeDescription: "./src/actions/index.ts",
        title: "Form Actions",
        description: (
          <div>
            This file contains the form action for the login process. <br />
            The login action is responsible for processing the login form submission and send back the correct information. <br />
            <Callout variant="error" className="my-2">
              Due to a limitation from Astro, we can't redirect from the action code. <br />
              More info in this issue (<ExternalLink href="https://github.com/withastro/astro/issues/11613">#11613</ExternalLink>). The redirect is handled in
              the <code>index.astro</code> file, in the <strong>frontmatter</strong> section.
            </Callout>
          </div>
        ),
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
        title: "Login Page",
        description: (
          <div>
            <div>This file contains the login page using a form action to login using your provider.</div>
            <div>
              the <strong>frontmatter</strong> is also handle the signIn process, as it can't be done from the action itself.
            </div>
            <div>
              You can also use client components to trigger the login process. <br />
              See the documentation{" "}
              <Link href="/docs/client-server-auth" className="text-blue-500 underline">
                Client Components
              </Link>{" "}
              for more information.
            </div>
          </div>
        ),
        codeString: `---
import { getAuthSession, getUser, signIn } from "@/lib/auth";
import { actions } from "astro:actions";

export const prerender = false;

const session = await getAuthSession(Astro);
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
</Layout>`,
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
          codeString: "npm install @light-auth/express",
          language: "sh",
        },
        {
          image: <Image src="/yarn.svg" alt="Yarn Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "yarn",
          title: "Yarn",
          codeString: "yarn add @light-auth/express",
          language: "sh",
        },
        {
          image: <Image src="/pnpm.svg" alt="PNPM Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "pnpm",
          title: "PNPM",
          codeString: "pnpm add @light-auth/express",
          language: "sh",
        },
      ],
    },
    steps: [
      {
        name: "show_me_the_code",
        title: "TL; DR; Show me the code",
        description: (
          <p>
            Okay, here is the hello world of Light-Auth with Express:{" "}
            <ExternalLink href="https://github.com/lightauth/light-auth-express-sample-one">light-auth-express-sample-one</ExternalLink>
          </p>
        ),
      },
      {
        name: "auth.ts",
        codeDescription: "./src/lib/auth.ts",
        title: "Server Configuration",
        description: (
          <div>
            <div>
              This file contains the authentication logic and configuration. The exports consts are <code>providers</code>, <code>handlers</code>,{" "}
              <code>signIn</code>, <code>signOut</code>, <code>getAuthSession</code>, and <code>getUser</code>.
            </div>
            <div>These constants are used throughout the application to manage authentication.</div>
          </div>
        ),
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

export const { providers, handlers, middleware, signIn, signOut, getAuthSession, getUser } 
  = CreateLightAuth({ providers: [googleProvider]});`,
        language: "ts",
      },
      {
        name: "app.ts",
        title: "Authentication Handlers",
        description: (
          <div>
            This file contains the authentication handlers and the login POST handler. <br />
            These handlers are responsible for processing authentication requests and returning the appropriate responses. <br />
            We have also a middleware to set the session in the response locals. <br />
          </div>
        ),
        codeDescription: "./src/app.ts",
        codeString: `import { getAuthSession, getUser, handlers, middleware, signIn, signOut } from "../lib/auth";

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
        name: "index.pug",
        codeDescription: "./view/index.pug",
        codeString: `extends layout

block content
    main
      if session
        div
          | Signed in as #{ ' ' }
          strong= session.email || session.name
      else    
        form(action="/login" method="POST")
              input(type="hidden" name="providerName" value="google")
              button(data-slot="button" type="submit")
                  Login using form action
`,
        language: "pug",
      },
    ],
  },
  {
    image: <Image src="/tanstack.svg" alt="Tanstack Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
    name: "tanstack",
    title: "Tanstack React Start",
    installationTabs: {
      defaultValue: "npm",
      tabs: [
        {
          image: <Image src="/npmjs.svg" alt="NPM Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "npm",
          title: "NPM",
          codeString: "npm install @light-auth/tanstack",
          language: "sh",
        },
        {
          image: <Image src="/yarn.svg" alt="Yarn Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "yarn",
          title: "Yarn",
          codeString: "yarn add @light-auth/tanstack",
          language: "sh",
        },
        {
          image: <Image src="/pnpm.svg" alt="PNPM Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" />,
          name: "pnpm",
          title: "PNPM",
          codeString: "pnpm add @light-auth/tanstack",
          language: "sh",
        },
      ],
    },
    steps: [
      {
        name: "show_me_the_code",
        title: "TL; DR; Show me the code",
        description: (
          <p>
            Okay, here is the hello world of Light-Auth with Tanstack start:{" "}
            <ExternalLink href="https://github.com/lightauth/light-auth-tanstack-sample-one">light-auth-tanstack-react-start-sample-one</ExternalLink>
          </p>
        ),
      },
      {
        name: "auth.ts",
        codeDescription: "./lib/auth.ts",
        title: "Server Configuration",
        description: (
          <div>
            <div>
              This file contains the authentication logic and configuration. The exports consts are <code>providers</code>, <code>handlers</code>,{" "}
              <code>signIn</code>, <code>signOut</code>, <code>getAuthSession</code>, and <code>getUser</code>.
            </div>
            <div>These constants are used throughout the application to manage authentication.</div>
          </div>
        ),
        codeString: `import { Google, Github } from "arctic";
import { CreateLightAuth } from "@light-auth/nextjs";

const googleProvider = {
  providerName: "google",
  arctic: new Google(
    process.env.GOOGLE_CLIENT_ID!,
    process.env.GOOGLE_CLIENT_SECRET!,
    "http://localhost:3000/api/auth/callback/google"
  ),
};


const githubProvider = {
  providerName: "github",
  arctic: new GitHub(
    process.env.GITHUB_CLIENT_ID!,
    process.env.GITHUB_CLIENT_SECRET!,
    "http://localhost:3000/api/auth/callback/github"
  ),
};

export const { providers, handlers, signIn, signOut, getAuthSession, getUser } = CreateLightAuth({
  providers: [googleProvider, githubProvider]
});`,
        language: "ts",
      },
      {
        name: "$.tsx",
        title: "Authentication Handlers",
        description: (
          <div>
            This file contains the authentication handlers for the API. <br />
            These handlers are responsible for processing authentication requests and returning the appropriate responses. <br />
            The handlers are exported as <code>GET</code> and <code>POST</code> methods.
          </div>
        ),
        codeDescription: "./routes/api/auth/$.tsx",
        codeString: `import { createServerFileRoute } from '@tanstack/react-start/server';
import { handlers } from "@/lib/auth";
export const ServerRoute = createServerFileRoute('/api/auth/$').methods(handlers)`,
        language: "ts",
      },
      {
        name: "login.tsx",
        codeDescription: "./routes/login.tsx",
        title: "Login Page",
        description: (
          <div>
            <div>This file contains the login page using a form action to login using your provider.</div>
            <div>
              You can also use client components to trigger the login process. <br />
              See the documentation{" "}
              <Link href="/docs/client-server-auth" className="text-blue-500 underline">
                Client Components
              </Link>{" "}
              for more information.
            </div>
          </div>
        ),
        codeString: `import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start';
import { signIn } from '@/lib/auth';

export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

export const actionSignIn = createServerFn().handler(() => signIn("google", "/profile"));


function RouteComponent() {
  return (
    <div>
      <form action={actionSignIn.url} method="POST">
        <button type="submit">login using a form action</button>
      </form>
    </div>
  );
}`,
        language: "tsx",
      },
      {
        name: "profile.tsx",
        codeDescription: "./routes/profile.tsx",
        title: "Profile Page",
        description: <div>Retrieves the session information to check if user is authenticated or not and displays it.</div>,
        codeString: `import { createFileRoute, Link } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start';
import { getAuthSession as laGetAuthSession } from "@/lib/auth";

const getAuthSession = createServerFn({
  method: 'GET',
}).handler(() => {
  return laGetAuthSession()
})

export const Route = createFileRoute('/profile')({
  component: RouteComponent,
  loader: async () => {
    const session = await getAuthSession();
    return { session };
  },
})

function RouteComponent() {
  const state = Route.useLoaderData()
  const session = state.session;
  
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
        language: "tsx",
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
