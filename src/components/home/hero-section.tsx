"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { stats } from "@/data/home";

const LaserFlow = dynamic(() => import("@/components/LaserFlow"), { ssr: false });

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background dark:bg-black">
      {/* LaserFlow Background */}
      <div className="absolute inset-0 z-0">
        <LaserFlow
          color="#8b5cf6"
          wispDensity={1.2}
          fogIntensity={0.5}
          verticalSizing={2.2}
          horizontalSizing={0.6}
          flowSpeed={0.3}
          wispSpeed={12}
          wispIntensity={4}
          mouseTiltStrength={0.02}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-1 bg-linear-to-b from-background/50 via-background/20 to-background dark:from-black/50 dark:via-black/20 dark:to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center">
          {/* Brand Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-violet-400/40 bg-violet-500/10 backdrop-blur-sm mb-10">
            <div className="h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-sm font-semibold text-violet-300 tracking-widest uppercase">
              Kasparro
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-foreground mb-8">
            Own AI Search
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed mb-12">
            Monitor how AI platforms represent your brand and get actionable
            insights to dominate AI-generated answers.
          </p>

          {/* CTAs */}
          <div className="flex flex-row justify-center gap-4 mb-20">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="gap-2 h-12 px-8 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-full"
              >
                View Dashboard
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/platform">
              <Button
                variant="outline"
                size="lg"
                className="h-12 px-8 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 font-semibold rounded-full"
              >
                How It Works
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-6 w-full max-w-2xl">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
