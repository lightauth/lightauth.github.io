import Hero from "@/components/hero";
import CodeExample from "@/components/code-example";
import Testimonials from "@/components/testimonials";
import GetStarted from "@/components/get-started";
import Footer from "@/components/footer";

export default async function Home() {
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
