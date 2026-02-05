"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ModuleInfo } from "@/types";
import { platformIconMap } from "@/data/platform";
import { CheckCircle, Cpu, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ModulesSectionProps {
  modules: ModuleInfo[];
}

export function ModulesSection({ modules }: ModulesSectionProps) {
  return (
    <section className="py-20 bg-linear-to-b from-muted/30 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-violet-500 border-violet-500/30">
            Analysis Engine
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Specialized Modules</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Six independent modules work in parallel to deliver comprehensive AI visibility intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module) => {
            const Icon = platformIconMap[module.icon] || Cpu;

            return (
              <Card
                key={module.id}
                className="group border-border/50 bg-linear-to-br from-background to-muted/10 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-violet-500/10 flex items-center justify-center shrink-0 group-hover:bg-violet-500/20 group-hover:scale-110 transition-all">
                      <Icon className="h-6 w-6 text-violet-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{module.name}</h3>
                      <p className="text-sm text-muted-foreground">{module.shortDescription}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {module.fullDescription}
                  </p>

                  <div className="space-y-2">
                    {module.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                        <span className="text-muted-foreground">{cap}</span>
                      </div>
                    ))}
                    {module.capabilities.length > 3 && (
                      <p className="text-xs text-violet-500 font-medium pl-6">
                        +{module.capabilities.length - 3} more capabilities
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-full font-semibold hover:bg-violet-700 transition-colors"
          >
            Run Full Audit
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
