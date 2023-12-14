import Nav_ from "@/components/misc/Nav_";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer_ from "@/components/misc/Footer_";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "basic_",
  description: "@LwaziNF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
        <Nav_ />
        <Footer_ />
      </body>
    </html>
  );
}
