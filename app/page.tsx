import Hero from "@/components/hero";
import CodeExample from "@/components/code-example";
import Testimonials from "@/components/testimonials";
import GetStarted from "@/components/get-started";
import Footer from "@/components/footer";
import { getLanguagesCodeBlocks } from "./code/overall-code";

export default async function Home() {
  const languagesCodeBlocks = await getLanguagesCodeBlocks();

  return (
    <div className="min-h-screen">
      <Hero />
      {/* <Features /> */}
      <CodeExample languagesCodeBlocks={languagesCodeBlocks} />
      <Testimonials />
      <GetStarted />
      <Footer />
    </div>
  );
}
