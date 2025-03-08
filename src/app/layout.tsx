import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import { Noto_Sans_KR } from "next/font/google";
import Navbar from "@/components/commons/Navbar";

const notoSansKR = Noto_Sans_KR({
  weight: ['400'],
  subsets: ['latin'],
});


export const metadata: Metadata = {
  title: "Google OAuth example in Next.js",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSansKR.className}`}>
    <body>
    <Navbar/>
    {children}
    </body>
    </html>
  );
}
