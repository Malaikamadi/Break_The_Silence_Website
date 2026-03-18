"use client";

import ImpactCounter from "@/components/ui/ImpactCounter";

const stats = [
  { value: 5000, label: "Young Girls Reached", suffix: "+" },
  { value: 120, label: "Community Champions Trained", suffix: "+" },
  { value: 35, label: "GBV Prevention Programs", suffix: "+" },
  { value: 800, label: "Survivors Supported", suffix: "+" },
];

export default function ImpactStats() {
  return (
    <section className="bg-sage py-20">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-charcoal sm:text-4xl">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s) => (
            <ImpactCounter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
