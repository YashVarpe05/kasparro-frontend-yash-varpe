"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { PipelineStage } from "@/types";
import { platformIconMap } from "@/data/platform";
import { ArrowDown, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

interface PipelineSectionProps {
  pipeline: PipelineStage[];
}

export function PipelineSection({ pipeline }: PipelineSectionProps) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-violet-500 border-violet-500/30">
            Architecture
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Data Pipeline</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our four-stage pipeline transforms raw data into actionable intelligence
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-violet-500/30 to-violet-500/50 -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {pipeline.map((stage, idx) => {
              const Icon = platformIconMap[stage.icon] || Cpu;
              const isEven = idx % 2 === 0;

              return (
                <div key={stage.id} className="relative">
                  {/* Stage card */}
                  <div className={cn(
                    "md:w-[calc(50%-2rem)]",
                    isEven ? "md:mr-auto" : "md:ml-auto"
                  )}>
                    <Card className="border-border/50 bg-gradient-to-br from-background to-muted/10 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="h-14 w-14 rounded-2xl bg-violet-500/10 flex items-center justify-center shrink-0">
                            <Icon className="h-7 w-7 text-violet-500" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge className="bg-violet-600 hover:bg-violet-700">
                                Stage {idx + 1}
                              </Badge>
                              <h3 className="text-xl font-semibold">{stage.name}</h3>
                            </div>
                            <p className="text-muted-foreground mb-4">{stage.description}</p>

                            <div className="grid grid-cols-2 gap-4">
                              {stage.inputs && (
                                <div>
                                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                                    Inputs
                                  </p>
                                  <div className="flex flex-wrap gap-1.5">
                                    {stage.inputs.map((input, i) => (
                                      <Badge key={i} variant="secondary" className="text-xs">
                                        {input}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {stage.outputs && (
                                <div>
                                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                                    Outputs
                                  </p>
                                  <div className="flex flex-wrap gap-1.5">
                                    {stage.outputs.map((output, i) => (
                                      <Badge key={i} variant="outline" className="text-xs border-violet-500/30 text-violet-500">
                                        {output}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center node */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="h-12 w-12 rounded-full bg-violet-600 border-4 border-background flex items-center justify-center shadow-lg shadow-violet-500/25">
                      <span className="text-white font-bold">{idx + 1}</span>
                    </div>
                  </div>

                  {/* Arrow to next */}
                  {idx < pipeline.length - 1 && (
                    <div className="flex justify-center py-4 md:hidden">
                      <ArrowDown className="h-6 w-6 text-violet-500/50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
