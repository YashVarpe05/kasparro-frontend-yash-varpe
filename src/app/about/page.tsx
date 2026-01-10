import { NavbarStaggered } from "@/components/navbar-staggered";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Lightbulb, Layers, Zap } from "lucide-react";

const philosophyPoints = [
  {
    icon: Target,
    title: "Data-Driven Everything",
    description:
      "Every insight, score, and recommendation is derived from structured data analysis—not gut feelings or generic best practices.",
  },
  {
    icon: Lightbulb,
    title: "AI-Native Thinking",
    description:
      "We built Kasparro from the ground up for the AI era. This isn't traditional SEO with an AI wrapper—it's a fundamentally new approach.",
  },
  {
    icon: Layers,
    title: "Modular Architecture",
    description:
      "Each analysis module is independently developed, tested, and improved. This allows rapid iteration and specialized depth.",
  },
  {
    icon: Zap,
    title: "Actionable Outputs",
    description:
      "Raw data is useless. Every metric comes with context, comparison, and specific recommendations you can implement today.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <NavbarStaggered />

      {/* Hero */}
      <section className="pt-32 pb-20 border-b bg-linear-to-b from-violet-500/5 via-transparent to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 text-violet-500 border-violet-500/30">
              Our Story
            </Badge>
            <h1 className="text-4xl font-bold mb-6">About Kasparro</h1>
            <p className="text-xl text-muted-foreground">
              The era of AI-generated search results is here. Google, Bing, and standalone AI
              assistants are changing how people discover information—and brands.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Kasparro exists to help brands understand and optimize their presence
                in AI-generated content. We provide the visibility, trust, and competitive
                intelligence needed to succeed in the AI search era.
              </p>
              <p className="text-lg text-muted-foreground">
                Traditional SEO tools track rankings on search engine results pages.
                But increasingly, users never see those pages—they get answers directly
                from AI. If your brand isn't part of those AI-generated answers,
                you're invisible to a growing segment of your audience.
              </p>
            </div>
            <div className="bg-muted/50 rounded-xl p-8">
              <blockquote className="text-xl font-medium italic">
                "The question isn't whether AI will change search—it already has.
                The question is whether your brand will be visible in this new landscape."
              </blockquote>
              <p className="mt-4 text-muted-foreground">— Kasparro Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Product Philosophy</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every feature we build and every recommendation we make
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {philosophyPoints.map((point, idx) => (
              <Card key={idx}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10shrink-0">
                      <point.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{point.title}</h3>
                      <p className="text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Now?</h2>
            <div className="space-y-4 text-lg text-muted-foreground text-left">
              <p>
                In 2024-2025, we witnessed a fundamental shift. ChatGPT, Claude, Gemini,
                and AI-powered search features in Google and Bing began answering
                questions directly—often without users clicking through to any website.
              </p>
              <p>
                This isn't a future scenario. It's happening today. And the brands that
                understand how to optimize for AI visibility will have a massive advantage
                over those who are still focused solely on traditional SEO metrics.
              </p>
              <p>
                Kasparro was built to bridge this gap. We monitor, analyze, and optimize
                your brand's presence across the AI ecosystem—so you're not just found
                in search results, but in AI-generated answers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">K</span>
              </div>
              <span className="font-bold">Kasparro</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-Native SEO & Brand Intelligence
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
