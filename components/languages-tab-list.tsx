import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
export function LanguagesTabList() {
  return (
    <TabsList className="grid w-full grid-cols-3">
      <TabsTrigger value="nextjs" className="gap-2">
        <Image
          src="/nextjs.svg"
          alt="Next.js Logo"
          width={12}
          height={12}
          className="w-5 h-5 p-0 m-0"
        />
        Next.js
      </TabsTrigger>
      <TabsTrigger value="astro" className="gap-2">
        <Image
          src="/astro.svg"
          alt="Astro Logo"
          width={12}
          height={12}
          className="w-5 h-5 p-0 m-0"
        />
        Astro
      </TabsTrigger>
      <TabsTrigger value="express" className="gap-2">
        <Image
          src="/express.svg"
          alt="Express Logo"
          width={12}
          height={12}
          className="w-5 h-5 p-0 m-0"
        />
        ExpressJS
      </TabsTrigger>
    </TabsList>
  );
}
