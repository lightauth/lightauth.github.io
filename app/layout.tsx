import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Light-Auth Documentation",
  description: "Light-Auth is a lightweight authentication library for SSR websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider defaultTheme="system" storageKey="light-auth-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
