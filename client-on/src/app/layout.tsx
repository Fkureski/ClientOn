// src/app/layout.tsx

import type { Metadata } from "next";
import Navbar from "@/components/Navbar"; // Import the corrected Navbar
import "@/styles/globals.css"; // Assuming you have this file for Tailwind

export const metadata: Metadata = {
  title: "MyApp",
  description: "A cool app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>
          {children} {/* Your page content will be injected here */}
        </main>
      </body>
    </html>
  );
}