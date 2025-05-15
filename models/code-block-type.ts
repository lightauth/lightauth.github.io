import { JSX } from "react";
import { BundledLanguage } from "shiki/bundle/web";

export type CodeBlockTab = {
  image?: JSX.Element;
  name: string;
  title?: string;
  description?: string | JSX.Element;
  codeDescription?: string;
  codeString?: string;
  language?: BundledLanguage;
  code?: JSX.Element;
};

export type CodeBlockTabs = {
  name?: string;
  defaultValue: string;
  tabs: CodeBlockTab[];
};

export type LanguageCodeBlock = {
  image: JSX.Element;
  name: string;
  title: string;
  installationTabs: CodeBlockTabs;
  steps: CodeBlockTab[];
};
