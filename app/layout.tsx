import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-green-100 p-4 flex justify-between items-center text-2xl">
          <Link href="/homepage">Hello Geek</Link>
          <nav className="flex gap-2">
            <Link href="/about">About</Link>
            <Link href="/pricing">Price</Link>
          </nav>
        </header>

        {children}
        <footer className="bg-green-100 p-4">
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
