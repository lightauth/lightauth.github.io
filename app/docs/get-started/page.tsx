import type { Metadata } from "next"
import GetStartedClientPage from "./GetStartedClientPage"

export const metadata: Metadata = {
  title: "Get Started - Light-Auth Documentation",
  description: "Get started with Light-Auth for secure authentication in your applications.",
}

export default function GetStartedPage() {
  return <GetStartedClientPage />
}
