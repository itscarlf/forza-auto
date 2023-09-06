import "./globals.css";
import type { Metadata } from "next";
import { Footer, NavBar } from "@/components";

export const metadata: Metadata = {
  title: "Forza Auto",
  description: "Find, book, or rent a car quickly and easily!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-logo.svg" />
      </head>

      <body className="relative">
        <NavBar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
