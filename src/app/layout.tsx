import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import PageTransition from "@/components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AMID AI Lab & Founders Fellowship",
  description: "A dedicated space for building and collaboration, in the heart of San Francisco",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <ClientBody>
        <PageTransition>
          {children}
        </PageTransition>
      </ClientBody>
    </html>
  );
}
