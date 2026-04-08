import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Strxngth | Elite Performance System",
  description: "The AI-powered system for elite training, precision nutrition, and consistent execution. Built for real results, not fantasy metrics.",
  keywords: ["fitness", "training", "nutrition", "AI coach", "workout plan", "meal plan", "performance"],
  openGraph: {
    title: "Strxngth | Elite Performance System",
    description: "The AI-powered system for elite training, precision nutrition, and consistent execution.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Strxngth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strxngth | Elite Performance System",
    description: "The AI-powered system for elite training, precision nutrition, and consistent execution.",
    images: ["/og-image.jpg"],
  },
};

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/toaster";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/toaster";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        <main className="min-h-screen pb-24">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
