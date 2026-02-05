"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { AuditResult, AuditModule } from "@/types";
import {
  TrendingUp,
  TrendingDown,
  Minus,
  AlertCircle,
  CheckCircle,
  Info,
  Lightbulb,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ModuleDetailsPanelProps {
  module: AuditModule;
  result: AuditResult;
}

export function ModuleDetailsPanel({ module, result }: ModuleDetailsPanelProps) {
  const scoreDiff = result.score - result.previousScore;
  const scoreImproved = scoreDiff > 0;
  const scorePercent = (result.score / module.maxScore) * 100;

  return (
    <div className="flex-1 p-6 overflow-auto bg-gradient-to-br from-background via-background to-muted/5">
      {/* Header with Score */}
      <div className="mb-8">
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold">{module.name}</h2>
              <Badge
                variant={module.status === "healthy" ? "default" : module.status === "warning" ? "secondary" : "destructive"}
                className="capitalize"
              >
                {module.status}
              </Badge>
            </div>
            <p className="text-muted-foreground">{module.description}</p>
          </div>

          {/* Score Card */}
          <div className="shrink-0 p-6 rounded-2xl border bg-gradient-to-br from-violet-500/10 to-violet-500/5 border-violet-500/20">
            <div className="text-center">
              <div className="flex items-baseline justify-center gap-1">
                <span className={cn(
                  "text-5xl font-bold",
                  scorePercent >= 80 ? "text-green-500" : scorePercent >= 60 ? "text-yellow-500" : "text-red-500"
                )}>
                  {result.score}
                </span>
                <span className="text-xl text-muted-foreground">/ {module.maxScore}</span>
              </div>
              <div
                className={cn(
                  "flex items-center justify-center gap-1.5 mt-2 text-sm font-medium",
                  scoreImproved ? "text-green-500" : "text-red-500"
                )}
              >
                {scoreImproved ? (
                  <TrendingUp className="h-4 w-4" />
                ) : (
                  <TrendingDown className="h-4 w-4" />
                )}
                <span>
                  {scoreImproved ? "+" : ""}
                  {scoreDiff} from last audit
                </span>
              </div>
              {/* Mini progress */}
              <div className="mt-3 h-2 rounded-full bg-muted/50 overflow-hidden">
                <div
                  className={cn(
                    "h-full rounded-full transition-all",
                    scorePercent >= 80 ? "bg-green-500" : scorePercent >= 60 ? "bg-yellow-500" : "bg-red-500"
                  )}
                  style={{ width: `${scorePercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Insights */}
      <Card className="mb-6 border-border/50 bg-gradient-to-br from-background to-muted/10">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
              <Sparkles className="h-4 w-4 text-blue-500" />
            </div>
            Key Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {result.insights.map((insight) => (
            <div
              key={insight.id}
              className={cn(
                "flex items-start gap-3 rounded-xl border p-4 transition-colors hover:bg-muted/50",
                insight.type === "positive" && "border-green-500/20 bg-green-500/5",
                insight.type === "negative" && "border-red-500/20 bg-red-500/5",
                insight.type === "neutral" && "border-border/50"
              )}
            >
              <div
                className={cn(
                  "mt-0.5 rounded-lg p-1.5",
                  insight.type === "positive" && "bg-green-500/20 text-green-500",
                  insight.type === "negative" && "bg-red-500/20 text-red-500",
                  insight.type === "neutral" && "bg-muted text-muted-foreground"
                )}
              >
                {insight.type === "positive" && <CheckCircle className="h-4 w-4" />}
                {insight.type === "negative" && <AlertCircle className="h-4 w-4" />}
                {insight.type === "neutral" && <Minus className="h-4 w-4" />}
              </div>
              <div className="flex-1">
                <p className="font-medium">{insight.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{insight.description}</p>
                {insight.metric && (
                  <div className="mt-3 flex items-center gap-3">
                    <Badge variant="secondary" className="text-xs">{insight.metric}</Badge>
                    <span className="text-sm font-semibold">{insight.value}</span>
                    {insight.trend && (
                      <span
                        className={cn(
                          "flex items-center gap-1",
                          insight.trend === "up" && "text-green-500",
                          insight.trend === "down" && "text-red-500"
                        )}
                      >
                        {insight.trend === "up" && <TrendingUp className="h-3 w-3" />}
                        {insight.trend === "down" && <TrendingDown className="h-3 w-3" />}
                        {insight.trend === "stable" && <Minus className="h-3 w-3" />}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Issues */}
      <Card className="mb-6 border-border/50 bg-gradient-to-br from-background to-muted/10">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <div className="h-8 w-8 rounded-lg bg-red-500/10 flex items-center justify-center">
              <AlertCircle className="h-4 w-4 text-red-500" />
            </div>
            Issues
            <Badge variant="outline" className="ml-auto">{result.issues.length}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {result.issues.map((issue) => (
            <div key={issue.id} className="flex items-start gap-3 rounded-xl border border-border/50 p-4 hover:bg-muted/50 transition-colors">
              <Badge
                variant={
                  issue.severity === "critical" || issue.severity === "high"
                    ? "destructive"
                    : issue.severity === "medium"
                    ? "default"
                    : "secondary"
                }
                className="mt-0.5 shrink-0"
              >
                {issue.severity}
              </Badge>
              <div className="flex-1 min-w-0">
                <p className="font-medium">{issue.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{issue.description}</p>
                <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <span className="font-medium">Area:</span> {issue.affectedArea}
                  </span>
                  <Badge variant="outline" className="capitalize text-xs">
                    {issue.status}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card className="border-border/50 bg-gradient-to-br from-background to-muted/10">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <div className="h-8 w-8 rounded-lg bg-yellow-500/10 flex items-center justify-center">
              <Lightbulb className="h-4 w-4 text-yellow-500" />
            </div>
            Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {result.recommendations.map((rec) => (
            <div key={rec.id} className="rounded-xl border border-border/50 p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge
                      variant={
                        rec.priority === "high"
                          ? "destructive"
                          : rec.priority === "medium"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {rec.priority} priority
                    </Badge>
                    <Badge variant="outline">{rec.category}</Badge>
                  </div>
                  <p className="font-medium">{rec.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{rec.description}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border/50 flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Impact:</span>
                  <span className="font-semibold text-green-500">{rec.impact}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Effort:</span>
                  <span className="font-semibold capitalize">{rec.effort}</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
