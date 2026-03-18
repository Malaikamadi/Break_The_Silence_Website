"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { partners } from "@/config/site";

export default function PartnersLogos() {
  return (
    <section className="overflow-hidden border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="Our Partners"
          subtitle="Together we amplify impact and reach more communities."
        />
      </div>

      {/* Scrolling marquee — infinite horizontal scroll */}
      <div className="relative mt-10 overflow-hidden">
        <div className="flex w-max animate-marquee">
          <div className="flex shrink-0 items-center gap-16 px-8" aria-hidden>
            {partners.map((p) => (
              <a
                key={`${p.name}-1`}
                href={p.href ?? "#"}
                target={p.href?.startsWith("http") ? "_blank" : undefined}
                rel={p.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-20 w-40 shrink-0 items-center justify-center transition-opacity duration-300 hover:opacity-80"
              >
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-16 w-auto object-contain"
                  />
                ) : (
                  <span className="text-sm font-medium text-secondary">
                    {p.name}
                  </span>
                )}
              </a>
            ))}
          </div>
          <div className="flex shrink-0 items-center gap-16 px-8" aria-hidden>
            {partners.map((p) => (
              <a
                key={`${p.name}-2`}
                href={p.href ?? "#"}
                target={p.href?.startsWith("http") ? "_blank" : undefined}
                rel={p.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-20 w-40 shrink-0 items-center justify-center transition-opacity duration-300 hover:opacity-80"
              >
                {p.logo ? (
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-16 w-auto object-contain"
                  />
                ) : (
                  <span className="text-sm font-medium text-secondary">
                    {p.name}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
