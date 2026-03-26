import { Nav } from "@/components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Nav />
        {children}
      </body>
    </html>
  );
}
