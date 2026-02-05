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
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ModuleDetailsProps {
  module: AuditModule;
  result: AuditResult;
}

export function ModuleDetails({ module, result }: ModuleDetailsProps) {
  const scoreDiff = result.score - result.previousScore;
  const scoreImproved = scoreDiff > 0;

  return (
    <div className="flex-1 p-6 overflow-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">{module.name}</h2>
            <p className="text-muted-foreground">{module.description}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold">{result.score}</span>
              <span className="text-xl text-muted-foreground">/ {module.maxScore}</span>
            </div>
            <div
              className={cn(
                "flex items-center justify-end gap-1 text-sm",
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
          </div>
        </div>
      </div>

      {/* Insights */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info className="h-5 w-5" />
            Key Insights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {result.insights.map((insight) => (
            <div
              key={insight.id}
              className={cn(
                "flex items-start gap-3 rounded-lg border p-4",
                insight.type === "positive" && "border-green-500/30 bg-green-500/5",
                insight.type === "negative" && "border-red-500/30 bg-red-500/5",
                insight.type === "neutral" && "border-border"
              )}
            >
              <div
                className={cn(
                  "mt-0.5 rounded-full p-1",
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
                <p className="text-sm text-muted-foreground">{insight.description}</p>
                {insight.metric && (
                  <div className="mt-2 flex items-center gap-2">
                    <Badge variant="secondary">{insight.metric}</Badge>
                    <span className="text-sm font-medium">{insight.value}</span>
                    {insight.trend && (
                      <span
                        className={cn(
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
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Issues ({result.issues.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {result.issues.map((issue) => (
            <div key={issue.id} className="flex items-start gap-3 rounded-lg border p-4">
              <Badge
                variant={
                  issue.severity === "critical"
                    ? "destructive"
                    : issue.severity === "high"
                    ? "destructive"
                    : issue.severity === "medium"
                    ? "default"
                    : "secondary"
                }
                className="mt-0.5"
              >
                {issue.severity}
              </Badge>
              <div className="flex-1">
                <p className="font-medium">{issue.title}</p>
                <p className="text-sm text-muted-foreground">{issue.description}</p>
                <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                  <span>Area: {issue.affectedArea}</span>
                  <Badge variant="outline" className="capitalize">
                    {issue.status}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5" />
            Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {result.recommendations.map((rec) => (
            <div key={rec.id} className="rounded-lg border p-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
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
                  <p className="text-sm text-muted-foreground">{rec.description}</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Impact: </span>
                  <span className="font-medium">{rec.impact}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Effort: </span>
                  <span className="font-medium capitalize">{rec.effort}</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
