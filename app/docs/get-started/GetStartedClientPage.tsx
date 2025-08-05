"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Step, Steps } from "@/components/steps";

import { useState } from "react";
import { CodeTabs } from "@/components/code-tabs";
import { LanguageCodeBlock } from "@/models/code-block-type";
import { CodeBlockClient } from "@/components/code-block-client";

export default function GetStartedClientPage({ languagesCodeBlocks }: { languagesCodeBlocks: LanguageCodeBlock[] }) {
  const [currentValue, setCurrentValue] = useState("nextjs");

  return (
    <div className="space-y-6">
      <h1>Get Started with Light-Auth</h1>
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
                    <CodeTabs codeBlockTabs={languageCodeBlocks.installationTabs} />
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </Step>

          <Step index={2} title="Initialization" description="Initialize the Light-Auth package">
            <div>
              <p>Set up Light-Auth in your application</p>
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
                    <CodeBlockClient initial={languageCodeBlocks.steps[0].code} codeDescription={languageCodeBlocks.steps[0].codeDescription} />
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </Step>
          <Step index={3} title="handlers" description="Initialize the Light-Auth handlers / middleware">
            <div>
              <p>Set up Light-Auth handlers / middleware in your application</p>
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
                    <CodeBlockClient initial={languageCodeBlocks.steps[1].code} codeDescription={languageCodeBlocks.steps[1].codeDescription} />
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </Step>
        </Steps>
      </div>
    </div>
  );
}
