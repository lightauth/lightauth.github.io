"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Step, Steps } from "@/components/steps";
import { CodeBlock } from "@/components/code-block";
import Image from "next/image";
import { LanguagesTabList } from "@/components/languages-tab-list";
import { File, Type } from "lucide-react";
import { CodeBlockClient } from "@/components/code-block-client";
import { highlight } from "@/lib/highlight";
import { JSX, useState } from "react";
import { codeBlockType, CodeTabs } from "@/components/code-tabs";

export default function GetStartedClientPage({ codeBlocks }: { codeBlocks: codeBlockType[] }) {
  const installationCodeBlock = codeBlocks.find((b) => b.id === "installation");
  const initializationCodeBlock = codeBlocks.find((b) => b.id === "initialization");
  const handlersCodeBlock = codeBlocks.find((b) => b.id === "handlers");
  const [currentValue, setCurrentValue] = useState(codeBlocks[1]?.defaultValue ?? "");
  const steps = [
    {
      id: "login",
      title: "Add loging page",
      description: "Add a login page to your application",
      content: (
        <div>
          <p>First example using the `signIn()` function that will be executed on the server side using a form action.</p>
          <p>
            You can also use the `signIn()` function in a client component, but it will be executed on the client side. See the relevant section
            :[light-auth-client]
          </p>

          <div className="mt-4">
            <Tabs defaultValue="nextjs" className="w-full">
              <LanguagesTabList />
              <TabsContent value="nextjs" className="mt-2">
                <CodeBlock lang="ts" title="./app/login.tsx">{`import { signIn } from "@/lib/auth";

    export default function LoginPage() {
      return (
        <form action={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <Button type="submit">Google</Button>
        </form>
      );
    }`}</CodeBlock>
              </TabsContent>
              <TabsContent value="astro" className="mt-2">
                <div className="rounded-md bg-gray-100 p-4 overflow-x-auto"></div>
              </TabsContent>
              <TabsContent value="express" className="mt-2">
                <div className="rounded-md bg-gray-100 p-4 overflow-x-auto"></div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      ),
    },
    {
      id: "next-steps",
      title: "Next Steps",
      description: "Explore more advanced features",
      content: (
        <div>
          <p>Now that you've set up Light-Auth, you can explore more advanced features:</p>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <a href="/docs/tutorial" className="rounded-lg border bg-card p-4 transition-colors hover:bg-accent">
              <h3 className="text-lg font-medium">Follow our tutorial</h3>
              <p className="mt-1 text-sm text-muted-foreground">Build a complete authentication system with step-by-step guidance</p>
            </a>
            <a href="/docs/concepts/jwt-tokens" className="rounded-lg border bg-card p-4 transition-colors hover:bg-accent">
              <h3 className="text-lg font-medium">Learn about JWT tokens</h3>
              <p className="mt-1 text-sm text-muted-foreground">Understand how JWT tokens work and how they're used in Light-Auth</p>
            </a>
            <a href="/docs/tutorial/authorization" className="rounded-lg border bg-card p-4 transition-colors hover:bg-accent">
              <h3 className="text-lg font-medium">Implement authorization</h3>
              <p className="mt-1 text-sm text-muted-foreground">Learn how to protect routes and implement role-based access control</p>
            </a>
            <a href="/docs/api-reference" className="rounded-lg border bg-card p-4 transition-colors hover:bg-accent">
              <h3 className="text-lg font-medium">API Reference</h3>
              <p className="mt-1 text-sm text-muted-foreground">Explore the complete Light-Auth API documentation</p>
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Get Started with Light-Auth</h1>
      <p className="text-lg text-muted-foreground">Learn how to quickly integrate Light-Auth into your application.</p>

      <div className="mt-8">
        <Steps>
          <Step index={0} title="Prerequisites" description="What you need before getting started">
            <div>
              <p>Before you begin, make sure you have the following:</p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>A decent / recent version of Node.js</li>
                <li>npm or yarn package manager</li>
                <li>A provider authentication client ID and secret</li>
              </ul>
            </div>
          </Step>

          <Step index={1} title="Installation" description="Install the Light-Auth package">
            <div>
              <p>Install the Light-Auth package using your preferred package manager:</p>
              <CodeTabs codeBlock={installationCodeBlock} />
            </div>
          </Step>

          <Step index={2} title="Initialization" description="Initialize the Light-Auth package">
            <div>
              <p>Set up Light-Auth in your application</p>
              <CodeTabs codeBlock={initializationCodeBlock} currentValue={currentValue} setCurrentValue={setCurrentValue} />
            </div>
          </Step>
          <Step index={3} title="handlers" description="Initialize the Light-Auth handlers / middleware">
            <div>
              <p>Set up Light-Auth handlers / middleware in your application</p>
              <CodeTabs codeBlock={handlersCodeBlock} currentValue={currentValue} setCurrentValue={setCurrentValue} />
            </div>
          </Step>
        </Steps>
      </div>
    </div>
  );
}
