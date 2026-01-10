"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { DashboardMetric } from "@/types";

interface MetricCardProps {
  metric: DashboardMetric;
  className?: string;
}

export function MetricCard({ metric, className }: MetricCardProps) {
  const getTrendIcon = () => {
    switch (metric.trend) {
      case "up":
        return <TrendingUp className="h-4 w-4" />;
      case "down":
        return <TrendingDown className="h-4 w-4" />;
      default:
        return <Minus className="h-4 w-4" />;
    }
  };

  const getTrendColor = () => {
    if (metric.label.includes("Issue") || metric.label.includes("Share")) {
      return metric.trend === "down" ? "text-red-500" : metric.trend === "up" ? "text-green-500" : "text-muted-foreground";
    }
    return metric.trend === "up" ? "text-green-500" : metric.trend === "down" ? "text-red-500" : "text-muted-foreground";
  };

  const getScoreColor = (value: number | string) => {
    if (typeof value !== "number") return "";
    if (value >= 80) return "text-green-500";
    if (value >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  const isScore = typeof metric.value === "number" && metric.unit === "/100";

  return (
    <Card className={cn(
      "group relative overflow-hidden border-border/50 bg-linear-to-br from-background to-muted/20 hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300",
      className
    )}>
      {/* Subtle accent gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-violet-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <CardContent className="relative p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">{metric.label}</p>
            <div className="flex items-baseline gap-2">
              <span className={cn(
                "text-4xl font-bold tracking-tight",
                isScore ? getScoreColor(metric.value) : ""
              )}>
                {metric.value}
              </span>
              {metric.unit && (
                <span className="text-sm text-muted-foreground">{metric.unit}</span>
              )}
            </div>
          </div>

          {metric.trend && (
            <div className={cn(
              "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
              metric.trend === "up" && !metric.label.includes("Issue")
                ? "bg-green-500/10 text-green-500"
                : metric.trend === "down" && !metric.label.includes("Issue")
                  ? "bg-red-500/10 text-red-500"
                  : metric.trend === "down" && metric.label.includes("Issue")
                    ? "bg-red-500/10 text-red-500"
                    : "bg-muted text-muted-foreground"
            )}>
              {getTrendIcon()}
              {metric.changePercent !== undefined && (
                <span>
                  {metric.changePercent > 0 ? "+" : ""}
                  {metric.changePercent.toFixed(1)}%
                </span>
              )}
            </div>
          )}
        </div>

        {metric.previousValue !== undefined && (
          <div className="mt-4 pt-4 border-t border-border/50">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Previous</span>
              <span className="font-medium">{metric.previousValue}{metric.unit}</span>
            </div>
          </div>
        )}

        {/* Score indicator bar for score metrics */}
        {isScore && typeof metric.value === "number" && (
          <div className="mt-4">
            <div className="h-1.5 rounded-full bg-muted overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-500",
                  metric.value >= 80 ? "bg-green-500" : metric.value >= 60 ? "bg-yellow-500" : "bg-red-500"
                )}
                style={{ width: `${metric.value}%` }}
              />
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
