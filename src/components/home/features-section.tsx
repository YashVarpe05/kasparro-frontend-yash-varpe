"use client";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import { features } from "@/data/home";

export function FeaturesSection() {
  return (
    <section className="py-24 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">Why Kasparro?</h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            AI is rewriting how customers discover brands. Are you visible?
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <CardSpotlight key={idx} className="p-8" radius={300} color="#1e1b4b">
              <div className="relative z-20 space-y-4">
                <div className="h-14 w-14 rounded-2xl bg-violet-500/20 flex items-center justify-center">
                  <feature.icon className="h-7 w-7 text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <ul className="text-gray-400 space-y-2 text-sm">
                  {feature.bullets.map((bullet, bidx) => (
                    <li key={bidx} className="flex items-start gap-2">
                      <span className="text-violet-400 mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}
