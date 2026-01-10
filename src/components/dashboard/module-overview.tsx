"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { AuditModule } from "@/types";
import { iconMap } from "@/data/dashboard";
import {
  Eye,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";

interface ModuleOverviewProps {
  modules: AuditModule[];
}

export function ModuleOverview({ modules }: ModuleOverviewProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "healthy":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "critical":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy":
        return "border-green-500/20 bg-green-500/5 hover:border-green-500/40";
      case "warning":
        return "border-yellow-500/20 bg-yellow-500/5 hover:border-yellow-500/40";
      case "critical":
        return "border-red-500/20 bg-red-500/5 hover:border-red-500/40";
      default:
        return "";
    }
  };

  const healthyCount = modules.filter((m) => m.status === "healthy").length;

  return (
    <Card className="border-border/50 bg-linear-to-br from-background to-muted/10">
      <CardHeader className="border-b border-border/50">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl">Module Status Overview</CardTitle>
          <Badge variant="outline" className="text-xs font-medium">
            {healthyCount}/{modules.length} Healthy
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((module) => {
            const scorePercent = (module.score / module.maxScore) * 100;
            const Icon = iconMap[module.icon] || Eye;

            return (
              <div
                key={module.id}
                className={cn(
                  "group relative rounded-xl border p-5 transition-all cursor-pointer",
                  "hover:shadow-lg hover:shadow-violet-500/5",
                  getStatusColor(module.status)
                )}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="h-11 w-11 rounded-xl bg-violet-500/10 flex items-center justify-center shrink-0 group-hover:bg-violet-500/20 transition-colors">
                    <Icon className="h-5 w-5 text-violet-500" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold truncate">{module.name}</span>
                      {getStatusIcon(module.status)}
                    </div>

                    {/* Progress bar */}
                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all duration-500",
                            scorePercent >= 80
                              ? "bg-green-500"
                              : scorePercent >= 60
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          )}
                          style={{ width: `${scorePercent}%` }}
                        />
                      </div>
                      <span className="text-lg font-bold tabular-nums w-12 text-right">
                        {module.score}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
