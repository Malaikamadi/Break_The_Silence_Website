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
  { name: "Partner 1", logo: null, href: "#" },
  { name: "Partner 2", logo: null, href: "#" },
  { name: "Partner 3", logo: null, href: "#" },
  { name: "Partner 4", logo: null, href: "#" },
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
