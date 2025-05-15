import { ThemeToggle } from "./theme-toggle";
import { SidebarTrigger } from "./ui/sidebar";

export function Header() {
  return (
    <div className="bg-white">
      <header className="bg-background/95 flex h-16 items-center border-b border-gray-200 dark:border-gray-700 px-6">
        <div className="ml-auto flex items-center gap-4">
          <ThemeToggle />
          <a
            href="https://github.com/light-auth/light-auth"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            GitHub
          </a>
          <a href="/docs/api-reference" className="text-sm text-muted-foreground hover:text-foreground">
            API
          </a>
        </div>
      </header>
    </div>
  );
}
