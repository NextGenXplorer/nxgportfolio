import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "NextGenX | Future of Connected Technology",
  description: "NextGenX is a premium tech brand building universal animated experiences.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={cn(inter.variable, spaceGrotesk.variable, "font-sans bg-background text-foreground antialiased overflow-x-hidden max-w-full selection:bg-neon-cyan/20")}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
