/**
 * Site-wide config — edit these values to customize content
 */

export const founderImageUrl =
  process.env.NEXT_PUBLIC_FOUNDER_IMAGE ?? null;

export interface Partner {
  name: string;
  logo: string | null;
  href?: string;
}

export const partners: Partner[] = [
  { name: "UNFPA", logo: "/partners/unfpa.png", href: "https://www.unfpa.org" },
  {
    name: "Ministry of Youth Affairs, Sierra Leone",
    logo: "/partners/ministry-of-youth.png",
    href: "https://www.gov.sl",
  },
  {
    name: "Plan International",
    logo: "/partners/plan-international.png",
    href: "https://plan-international.org",
  },
  {
    name: "DANIDA",
    logo: "/partners/danida.png",
    href: "https://um.dk/en/danida",
  },
  {
    name: "Youth Climate Action Accelerator",
    logo: "/partners/youth-climate-accelerator.png",
    href: "#",
  },
];

export const defaultTestimonials = [
  {
    quote:
      "Break the Silence gave me a safe space to heal and the courage to speak up. Today I am a mentor to other young girls.",
    author: "Community Member",
    role: "Youth Mentor",
  },
  {
    quote:
      "The training changed how our community talks about gender-based violence. We are now advocates for change.",
    author: "Community Leader",
    role: "Community Champion",
  },
  {
    quote:
      "My daughter found her voice through their programs. She now leads workshops in her school.",
    author: "Parent",
    role: "Community",
  },
];
