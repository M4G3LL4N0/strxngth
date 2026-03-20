import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Strxngth",
  description: "AI-powered health, fitness, and nutrition optimization",
};

import { Navigation } from "@/components/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="sticky-nav">
          <div className="container">
            <Navigation />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
