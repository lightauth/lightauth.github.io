"use client";
import { cn } from "@/lib/utils";
import { File } from "lucide-react";
import { BundledLanguage, codeToHtml } from "shiki";
import { JSX, useLayoutEffect, useState } from "react";
import { highlight } from "@/lib/highlight";

interface Props {
  initial?: JSX.Element;
  className?: string;
  codeDescription?: string;
}

export function CodeBlockClient(props: Props) {
  return (
    <div className="overflow-hidden">
      {props.codeDescription && (
        <div className="border rounded-t-sm border-gray-200 bg-gray-100 p-1 overflow-x-auto">
          <File className="w-4 h-4 inline mr-2" />
          <span className="text-gray-500 font-[Consolas]">{props.codeDescription}</span>
        </div>
      )}
      <div className={cn("text-sm [&>*]:p-4 [&>*]:border", props.codeDescription ? "[&>*]:rounded-b-md" : "[&>*]:rounded-md", props.className)}>
        {props.initial}
      </div>
    </div>
  );
}
