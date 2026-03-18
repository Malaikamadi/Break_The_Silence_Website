import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Join Break the Silence as a volunteer. Help prevent gender-based violence, empower young girls, and support our community programs.",
  keywords: [
    "volunteer NGO",
    "GBV prevention volunteer",
    "youth empowerment",
    "community volunteer",
  ],
};

export default function VolunteerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
