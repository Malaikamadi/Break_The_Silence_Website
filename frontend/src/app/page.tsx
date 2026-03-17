"use client";

import Hero from "@/features/home/Hero";
import ImpactStats from "@/features/home/ImpactStats";
import MissionBanner from "@/features/home/MissionBanner";
import FeaturedProjects from "@/features/home/FeaturedProjects";
import CTABanner from "@/components/ui/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <MissionBanner />
      <FeaturedProjects />
      <CTABanner
        title="Ready to Make a Difference?"
        description="Join hundreds of volunteers transforming communities through climate action and youth empowerment."
        buttonText="Volunteer Now"
        buttonHref="/volunteer"
      />
    </>
  );
}
