import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
