"use client";

import Hero from "@/features/home/Hero";
import ImpactStats from "@/features/home/ImpactStats";
import FounderStory from "@/features/home/FounderStory";
import ProgramAreas from "@/features/home/ProgramAreas";
import LatestUpdates from "@/features/home/LatestUpdates";
import Testimonies from "@/features/home/Testimonies";
import CTABanner from "@/components/ui/CTABanner";
import PartnersLogos from "@/features/home/PartnersLogos";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <FounderStory />
      <ProgramAreas />
      <LatestUpdates />
      <Testimonies />
      <CTABanner
        title="Ready to Make a Difference?"
        description="Join us in preventing gender-based violence and empowering young girls. Volunteer, donate, or spread the word."
        buttonText="Volunteer Now"
        buttonHref="/volunteer"
      />
      <PartnersLogos />
    </>
  );
}
