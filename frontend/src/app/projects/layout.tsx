import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects",
  description:
    "Explore Break the Silence projects in GBV prevention, youth empowerment, climate innovation, and community development.",
  keywords: [
    "GBV prevention projects",
    "youth empowerment",
    "community programs",
    "gender justice",
  ],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
