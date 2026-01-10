"use client";

import { cn } from "@/lib/utils";
import { useKasparroStore } from "@/store";
import type { AuditModule } from "@/types";
import { iconMap } from "@/data/dashboard";
import {
  Eye,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ChevronRight,
} from "lucide-react";

interface AuditModuleSidebarProps {
  modules: AuditModule[];
}

export function AuditModuleSidebar({ modules }: AuditModuleSidebarProps) {
  const { selectedModuleId, setSelectedModuleId } = useKasparroStore();

  const getStatusIcon = (status: AuditModule["status"]) => {
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

  const getScoreColor = (score: number, maxScore: number) => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 80) return "text-green-500";
    if (percentage >= 60) return "text-yellow-500";
    return "text-red-500";
  };

  // Calculate overall stats
  const totalScore = modules.reduce((acc, m) => acc + m.score, 0);
  const maxTotal = modules.reduce((acc, m) => acc + m.maxScore, 0);
  const overallPercent = Math.round((totalScore / maxTotal) * 100);

  return (
    <div className="h-full w-80 border-r bg-linear-to-b from-muted/20 to-background flex flex-col">
      {/* Header with overall score */}
      <div className="p-5 border-b bg-linear-to-r from-violet-500/10 to-transparent">
        <h2 className="font-semibold text-lg mb-1">Audit Modules</h2>
        <p className="text-sm text-muted-foreground mb-4">Select a module to view details</p>

        {/* Overall score indicator */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50 border border-border/50">
          <div className={cn(
            "text-2xl font-bold",
            overallPercent >= 80 ? "text-green-500" : overallPercent >= 60 ? "text-yellow-500" : "text-red-500"
          )}>
            {overallPercent}%
          </div>
          <div className="flex-1">
            <p className="text-xs text-muted-foreground">Overall Health</p>
            <div className="h-1.5 rounded-full bg-muted mt-1 overflow-hidden">
              <div
                className={cn(
                  "h-full rounded-full",
                  overallPercent >= 80 ? "bg-green-500" : overallPercent >= 60 ? "bg-yellow-500" : "bg-red-500"
                )}
                style={{ width: `${overallPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Module list */}
      <div className="flex-1 overflow-auto p-3 space-y-2">
        {modules.map((module) => {
          const Icon = iconMap[module.icon] || Eye;
          const isSelected = selectedModuleId === module.id;
          const scorePercent = (module.score / module.maxScore) * 100;

          return (
            <button
              key={module.id}
              onClick={() => setSelectedModuleId(module.id)}
              className={cn(
                "w-full flex items-center gap-3 rounded-xl p-4 text-left transition-all group",
                isSelected
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                  : "hover:bg-muted/80 border border-transparent hover:border-border/50"
              )}
            >
              <div
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-xl shrink-0 transition-colors",
                  isSelected ? "bg-white/20" : "bg-violet-500/10 group-hover:bg-violet-500/20"
                )}
              >
                <Icon className={cn("h-5 w-5", isSelected ? "text-white" : "text-violet-500")} />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium truncate">{module.name}</span>
                  <div className="flex items-center gap-1.5">
                    {!isSelected && getStatusIcon(module.status)}
                    <span
                      className={cn(
                        "text-sm font-bold tabular-nums",
                        isSelected ? "text-white" : getScoreColor(module.score, module.maxScore)
                      )}
                    >
                      {module.score}
                    </span>
                  </div>
                </div>

                {/* Mini progress bar */}
                <div className={cn(
                  "h-1.5 rounded-full overflow-hidden",
                  isSelected ? "bg-white/20" : "bg-muted"
                )}>
                  <div
                    className={cn(
                      "h-full rounded-full transition-all",
                      isSelected
                        ? "bg-white"
                        : scorePercent >= 80
                          ? "bg-green-500"
                          : scorePercent >= 60
                            ? "bg-yellow-500"
                            : "bg-red-500"
                    )}
                    style={{ width: `${scorePercent}%` }}
                  />
                </div>
              </div>

              <ChevronRight className={cn(
                "h-4 w-4 shrink-0 transition-transform",
                isSelected ? "text-white" : "text-muted-foreground",
                isSelected && "translate-x-1"
              )} />
            </button>
          );
        })}
      </div>
    </div>
  );
}
