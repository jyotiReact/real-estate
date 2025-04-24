import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harwood Constructions – Premium Home & Land Packages in Warragul",
  description:
    "Explore top-tier property deals with Harwood Constructions. Discover stylish homes, investment-ready packages, and unbeatable lifestyle amenities in Warragul, VIC.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen flex flex-col justify-between">
          <div>{children}</div>
        </main>
      </body>
    </html>
  );
}
