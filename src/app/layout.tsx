import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Strxngth | AI Performance System",
  description: "The elite AI system for training, nutrition, and execution. Built for consistent results, not fantasy metrics.",
  keywords: ["fitness", "training", "nutrition", "AI coach", "workout plan", "meal plan"],
};

import { Navbar } from "@/components/navbar";
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
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
