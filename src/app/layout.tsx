import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jobs search",
  description: "Find the best job for you",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-50`}>
        <Header />
        <main className="min-h-[calc(100vh-136px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
