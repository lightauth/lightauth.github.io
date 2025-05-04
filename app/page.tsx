import Hero from "@/components/hero";
import Features from "@/components/features";
import CodeExample from "@/components/code-example";
import AuthFlowDiagram from "@/components/auth-flow-diagram";
import AuthDemo from "@/components/auth-demo";
import Comparison from "@/components/comparison";
import Testimonials from "@/components/testimonials";
import GetStarted from "@/components/get-started";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      {/* <Features /> */}
      <CodeExample />
      <Testimonials />
      <GetStarted />
      <Footer />
    </div>
  );
}
