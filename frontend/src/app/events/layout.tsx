import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join Break the Silence events — workshops, training programs, and community gatherings for GBV prevention and youth empowerment.",
  keywords: [
    "GBV awareness events",
    "youth empowerment workshops",
    "community events",
    "gender justice",
  ],
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
