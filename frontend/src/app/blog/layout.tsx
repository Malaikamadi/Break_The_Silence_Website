import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Resources",
  description:
    "Stories, updates, and resources from Break the Silence — GBV prevention, youth empowerment, and gender justice.",
  keywords: [
    "gender-based violence",
    "youth empowerment",
    "women empowerment",
    "NGO blog",
  ],
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
