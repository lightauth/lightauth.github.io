import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CodeBlockClient } from "./code-block-client";
import { JSX, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CodeBlockTabs } from "@/app/models/code-block-type";

export function CodeTabs({
  codeBlockTabs,
  setCurrentValue,
  currentValue,
  className,
}: {
  codeBlockTabs?: CodeBlockTabs;
  setCurrentValue?: (value: string) => void;
  currentValue?: string;
  className?: string;
}) {
  const [currentValueState, setCurrentValueState] = useState(currentValue ?? codeBlockTabs?.defaultValue ?? "");

  return (
    <Tabs className={cn(`w-full mt-4`, className)} onValueChange={setCurrentValueState} value={currentValueState} defaultValue={currentValueState}>
      <TabsList className="flex w-full justify-start gap-5">
        {codeBlockTabs?.tabs.map((tab) => (
          <TabsTrigger key={tab.name} value={tab.name} className="gap-2">
            {tab.image}
            {tab.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {codeBlockTabs?.tabs.map((tab) => (
        <TabsContent key={tab.name} value={tab.name} className="mt-2">
          <CodeBlockClient initial={tab.code} codeDescription={tab.codeDescription} />
        </TabsContent>
      ))}
    </Tabs>
  );
}
