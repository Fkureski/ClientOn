// src/app/layout.tsx

import type { Metadata } from "next";
import Navbar from "@/components/Navbar"; // Import the corrected Navbar
import "@/styles/globals.css"; // Assuming you have this file for Tailwind
import { ThemeProvider } from "@material-tailwind/react";

export const metadata: Metadata = {
  title: "ClienOn",
  description: "This is a software made to facilitate the micro entrepreneur",
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