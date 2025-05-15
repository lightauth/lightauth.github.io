import Hero from "@/components/hero";
import CodeExample from "@/components/code-example";
import Testimonials from "@/components/testimonials";
import GetStarted from "@/components/get-started";
import Footer from "@/components/footer";
import { getLanguagesCodeBlocks } from "./code/overall-code";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Header } from "@/components/header";

export default async function Home() {
  const languagesCodeBlocks = await getLanguagesCodeBlocks();

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <CodeExample languagesCodeBlocks={languagesCodeBlocks} />
      <Testimonials />
      <GetStarted />
      <Footer />
    </div>
  );
}
