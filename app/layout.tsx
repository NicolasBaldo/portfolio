import type { Metadata } from "next";
import { Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { cn } from "@/lib/utils";

// Spécifiez le poids de la police Libre Baskerville
const libreBaskervilleClass = Libre_Baskerville({ subsets: ["latin"], weight: "400", variable: "--font-caption" });

export const metadata: Metadata = {
  title: "Nicolas Baldo Web Developer",
  description: "Portfolio of Nicolas Baldo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(GeistSans.variable, 
                          GeistMono.variable, 
                           libreBaskervilleClass.variable, 
                           "font-sans h-full bg-background text-foreground")}>{children}</body>
    </html>
  );
}
