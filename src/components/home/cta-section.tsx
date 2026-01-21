"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ColourfulText from "@/components/ui/colourful-text";

const Cubes = dynamic(() => import("@/components/Cubes"), { ssr: false });

export function CTASection() {
  return (
    <section className="relative py-32 bg-background dark:bg-black overflow-hidden">
      {/* Cubes Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30">
        <Cubes
          gridSize={15}
          maxAngle={25}
          radius={5}
          faceColor="rgba(139, 92, 246, 0.1)"
          borderStyle="1px solid rgba(139, 92, 246, 0.15)"
          rippleColor="#a78bfa"
          rippleSpeed={1.5}
          autoAnimate={true}
          cellGap={2}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background dark:from-black dark:via-transparent dark:to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          <span className="text-foreground">Ready to </span>
          <ColourfulText text="Own AI Search" />
          <span className="text-foreground">?</span>
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          Join the brands already dominating AI-generated answers. Get your
          first audit in under 5 minutes.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/dashboard">
            <Button
              size="lg"
              className="gap-2 h-14 px-10 bg-white text-black hover:bg-gray-100 font-semibold rounded-full text-base"
            >
              Start Free Audit
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="/platform">
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-10 border-white/20 bg-white/5 text-white hover:bg-white/10 font-semibold rounded-full text-base"
            >
              See How It Works
            </Button>
          </Link>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span>Setup in 5 minutes</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500" />
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
}
