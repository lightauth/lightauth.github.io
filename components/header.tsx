import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { SidebarTrigger } from "./ui/sidebar";
import { Github, Twitter } from "lucide-react";

export function Header() {
  return (
    <div className="bg-white">
      <header className="bg-background/95 flex h-16 items-center border-b border-gray-200 dark:border-gray-700 px-6">
        <div className="ml-auto flex items-center gap-4">
          <ThemeToggle />
          <Link href="https://twitter.com/sebpertus" target="_blank" className="mr-2">
            <Twitter className="h-4 w-4 " />
          </Link>
          <Link href="https://github.com/LightAuth" target="_blank">
            <Github className="h-4 w-4 " />
          </Link>
        </div>
      </header>
    </div>
  );
}
