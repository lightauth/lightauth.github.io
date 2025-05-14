import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CodeBlockClient } from "./code-block-client";
import { JSX } from "react";
import { cn } from "@/lib/utils";

export type codeBlockType = {
  id: string;
  defaultValue: string;
  tabs: {
    image: JSX.Element;
    name: string;
    title?: string;
    codeDescription?: string;
    code: JSX.Element;
  }[];
};

export function CodeTabs({
  codeBlock,
  setCurrentValue,
  currentValue,
  className,
}: {
  codeBlock?: codeBlockType;
  setCurrentValue?: (value: string) => void;
  currentValue?: string;
  className?: string;
}) {
  return (
    <Tabs className={cn(`w-full mt-4`, className)} onValueChange={setCurrentValue} value={currentValue} defaultValue={codeBlock?.defaultValue}>
      <TabsList className="flex w-full justify-start gap-5">
        {codeBlock?.tabs.map((tab) => (
          <TabsTrigger key={tab.name} value={tab.name} className="gap-2">
            {tab.image}
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {codeBlock?.tabs.map((tab) => (
        <TabsContent key={tab.name} value={tab.name} className="mt-2">
          <CodeBlockClient initial={tab.code} codeDescription={tab.codeDescription} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
