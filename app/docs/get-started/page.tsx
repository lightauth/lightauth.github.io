import type { Metadata } from "next";
import GetStartedClientPage from "./GetStartedClientPage";
import Image from "next/image";
import { highlight } from "@/lib/highlight";
import { JSX } from "react";
import { getLanguagesCodeBlocks } from "@/app/code/overall-code";

export const metadata: Metadata = {
  title: "Get Started - Light-Auth Documentation",
  description: "Get started with Light-Auth for secure authentication in your applications.",
};

export default async function GetStartedPage() {
  const languagesCodeBlocks = await getLanguagesCodeBlocks();

  return <GetStartedClientPage languagesCodeBlocks={languagesCodeBlocks} />;
}
