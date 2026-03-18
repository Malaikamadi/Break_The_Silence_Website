import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual journey through Break the Silence — our projects, events, and community impact in GBV prevention and youth empowerment.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
