import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import QueryProvider from "@/providers/QueryProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default:
      "Break the Silence — GBV Prevention, Youth & Women Empowerment",
    template: "%s | Break the Silence",
  },
  description:
    "Preventing gender-based violence, protecting young girls, and empowering youth and women through community education, advocacy, and leadership development.",
  keywords: [
    "gender-based violence prevention",
    "GBV awareness",
    "youth empowerment",
    "women empowerment",
    "sexual violence advocacy",
    "girls protection",
    "community education",
    "gender justice",
    "Kenya NGO",
  ],
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Break the Silence",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col antialiased">
        <QueryProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
