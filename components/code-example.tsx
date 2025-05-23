"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeTabs } from "./code-tabs";
import { useState } from "react";
import { CodeBlockClient } from "./code-block-client";
import { LanguageCodeBlock } from "@/models/code-block-type";
import { Step, Steps } from "./steps";
import { Callout } from "./ui/callout";
import Image from "next/image";

export default function CodeExample({ languagesCodeBlocks }: { languagesCodeBlocks: LanguageCodeBlock[] }) {
  const [currentValue, setCurrentValue] = useState(languagesCodeBlocks[0]?.name ?? "");

  return (
    <section id="documentation" className="bg-background/95 ">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-8">
          <p className="mt-4 text-lg ">
            For now, you can use light-auth with{" "}
            <div className="inline-flex items-baseline gap-1 mr-2">
              <Image src="/nextjs.svg" alt="Next.js Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" /> Next.js,
            </div>
            <div className="inline-flex items-baseline gap-1 mr-2">
              <Image src="/astro.svg" alt="Astro Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" /> <code>Astro</code>,
            </div>
            <div className="inline-flex items-baseline gap-1 mr-2">
              <Image src="/nuxtjs.svg" alt="Nuxt.js Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" /> <code>Nuxt</code>,
            </div>
            <div className="inline-flex items-baseline gap-1 mr-2">
              <Image src="/sveltekit.svg" alt="SvelteKit Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" /> <code>SvelteKit</code> and
            </div>
            <div className="inline-flex items-baseline gap-1 mr-2">
              <Image src="/express.svg" alt="Express Logo" width={12} height={12} className="w-5 h-5 p-0 m-0" /> <code>Express</code>
            </div>
            . We are working on adding support for more frameworks in the future.
          </p>
          <Callout variant="info" className="mt-4">
            The code examples shown here is using <strong>light-auth</strong> server side logic. You can also use the <strong>client side</strong> logic to call
            the different
            <div className="inline-flex items-baseline gap-1 mx-2 ">
              <Image src="/light-auth.svg" alt="Light Auth Logo" width={12} height={12} className="p-0 m-0" /> <strong>Light Auth</strong>
            </div>
            endpoints.
          </Callout>
          <Tabs className="w-full mt-4" onValueChange={setCurrentValue} value={currentValue}>
            <TabsList className="flex w-full justify-start gap-5">
              {languagesCodeBlocks.map((languageCodeBlocks) => (
                <TabsTrigger key={languageCodeBlocks.name} value={languageCodeBlocks.name} className="gap-2">
                  {languageCodeBlocks.image}
                  {languageCodeBlocks.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {languagesCodeBlocks.map((languageCodeBlocks) => (
              <TabsContent key={languageCodeBlocks.name} value={languageCodeBlocks.name} className="mt-2">
                <CodeTabs codeBlockTabs={languageCodeBlocks.installationTabs} className="mb-4" />
                <Steps>
                  {languageCodeBlocks.steps.map((step, index) => (
                    <Step key={index} index={index + 1} title={step.title} description={step.description}>
                      {step.code && <CodeBlockClient initial={step.code} codeDescription={step.codeDescription} />}
                    </Step>
                  ))}
                </Steps>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
