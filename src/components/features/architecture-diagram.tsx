"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SystemBlock, ArchitectureData } from "@/types";
import { cn } from "@/lib/utils";
import {
  Download,
  Network,
  Cpu,
  LayoutDashboard,
} from "lucide-react";

const typeIcons: Record<SystemBlock["type"], React.ComponentType<{ className?: string }>> = {
  input: Download,
  context: Network,
  module: Cpu,
  output: LayoutDashboard,
};

const typeColors: Record<SystemBlock["type"], string> = {
  input: "border-blue-500/50 bg-blue-500/5",
  context: "border-purple-500/50 bg-purple-500/5",
  module: "border-green-500/50 bg-green-500/5",
  output: "border-orange-500/50 bg-orange-500/5",
};

const typeHeaderColors: Record<SystemBlock["type"], string> = {
  input: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  context: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  module: "bg-green-500/10 text-green-600 dark:text-green-400",
  output: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
};

interface ArchitectureDiagramProps {
  data: ArchitectureData;
}

export function ArchitectureDiagram({ data }: ArchitectureDiagramProps) {
  const blocksByType = data.blocks.reduce((acc, block) => {
    if (!acc[block.type]) acc[block.type] = [];
    acc[block.type].push(block);
    return acc;
  }, {} as Record<SystemBlock["type"], SystemBlock[]>);

  const typeOrder: SystemBlock["type"][] = ["input", "context", "module", "output"];

  return (
    <div className="space-y-8">
      {typeOrder.map((type) => {
        const blocks = blocksByType[type] || [];
        if (blocks.length === 0) return null;

        const Icon = typeIcons[type];
        const typeLabel = type.charAt(0).toUpperCase() + type.slice(1);

        return (
          <div key={type}>
            <div
              className={cn(
                "inline-flex items-center gap-2 rounded-lg px-3 py-1.5 mb-4",
                typeHeaderColors[type]
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="text-sm font-semibold">
                {type === "module" ? "Analysis Modules" : `${typeLabel} Layer`}
              </span>
            </div>

            <div
              className={cn(
                "grid gap-4",
                type === "module" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
              )}
            >
              {blocks.map((block) => (
                <Card key={block.id} className={cn("", typeColors[type])}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{block.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{block.description}</p>
                  </CardHeader>
                  <CardContent>
                    {block.subComponents && block.subComponents.length > 0 && (
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase mb-2">
                          Components
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {block.subComponents.map((sub, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                            >
                              {sub}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Flow indicator */}
            {type !== "output" && (
              <div className="flex justify-center py-4">
                <div className="flex flex-col items-center text-muted-foreground">
                  <div className="h-8 w-px bg-border" />
                  <span className="text-xs">↓</span>
                  <div className="h-8 w-px bg-border" />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
