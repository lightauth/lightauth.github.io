"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeTabs } from "./code-tabs";
import { useState } from "react";
import { CodeBlockClient } from "./code-block-client";
import { LanguageCodeBlock } from "@/models/code-block-type";
import { Step, Steps } from "./steps";

export default function CodeExample({ languagesCodeBlocks }: { languagesCodeBlocks: LanguageCodeBlock[] }) {
  const [currentValue, setCurrentValue] = useState(languagesCodeBlocks[0]?.name ?? "");

  return (
    <section id="documentation" className="bg-background/95 py-20 ">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Simple Implementation</h2>
          <p className="mt-4 text-lg text-gray-600">
            Get up and running with just a few lines of code. Light-Auth is designed to be easy to implement in any project.
          </p>
        </div>
        <div>
          <div className="mt-8">
            <p className="mt-4 text-lg ">
              For now, you can use light-auth with <strong>Next.js, Astro, and Express</strong>. We are working on adding support for more frameworks in the
              future.
            </p>
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
      </div>
    </section>
  );
}
