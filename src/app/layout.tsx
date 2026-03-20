import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Strxngth",
  description: "AI-powered health, fitness, and nutrition optimization",
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
