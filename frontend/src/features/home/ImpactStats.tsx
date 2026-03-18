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
    <section className="bg-sage py-10">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <h2 className="mb-6 text-center text-xl font-bold text-charcoal sm:text-2xl">
          Our Impact in Numbers
        </h2>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {stats.map((s) => (
            <ImpactCounter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
