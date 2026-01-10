import { Badge } from "@/components/ui/badge";

export function PlatformHero() {
  return (
    <section className="pt-32 pb-20 border-b bg-gradient-to-b from-violet-500/5 via-transparent to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-4 text-violet-500 border-violet-500/30">
            Platform Overview
          </Badge>
          <h1 className="text-4xl font-bold mb-4">How Kasparro Works</h1>
          <p className="text-xl text-muted-foreground">
            A systematic approach to AI visibility: from data collection to actionable insights
          </p>
        </div>
      </div>
    </section>
  );
}
