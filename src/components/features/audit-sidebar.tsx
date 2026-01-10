"use client";

import { cn } from "@/lib/utils";
import { useKasparroStore } from "@/store";
import type { AuditModule } from "@/types";
import {
  Eye,
  Shield,
  FileText,
  Settings,
  TrendingUp,
  Search,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Eye,
  Shield,
  FileText,
  Settings,
  TrendingUp,
  Search,
};

interface AuditSidebarProps {
  modules: AuditModule[];
}

export function AuditSidebar({ modules }: AuditSidebarProps) {
  const { selectedModuleId, setSelectedModuleId } = useKasparroStore();

  const getStatusIcon = (status: AuditModule["status"]) => {
    switch (status) {
      case "healthy":
        return <CheckCircle2 className="h-3.5 w-3.5 text-green-500" />;
      case "warning":
        return <AlertTriangle className="h-3.5 w-3.5 text-yellow-500" />;
      case "critical":
        return <XCircle className="h-3.5 w-3.5 text-red-500" />;
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

  return (
    <div className="h-full w-80 border-r bg-muted/20">
      <div className="p-5 border-b bg-linear-to-r from-violet-500/5 to-transparent">
        <h2 className="font-semibold text-lg">Audit Modules</h2>
        <p className="text-sm text-muted-foreground mt-1">Select a module to view details</p>
      </div>
      <div className="p-3 space-y-2">
        {modules.map((module) => {
          const Icon = iconMap[module.icon] || Eye;
          const isSelected = selectedModuleId === module.id;
          const scorePercent = (module.score / module.maxScore) * 100;

          return (
            <button
              key={module.id}
              onClick={() => setSelectedModuleId(module.id)}
              className={cn(
                "w-full flex items-center gap-3 rounded-xl p-4 text-left transition-all",
                isSelected
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                  : "hover:bg-muted/80 border border-transparent hover:border-border/50"
              )}
            >
              <div
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-xl shrink-0",
                  isSelected ? "bg-white/20" : "bg-violet-500/10"
                )}
              >
                <Icon className={cn("h-5 w-5", isSelected ? "text-white" : "text-violet-500")} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium truncate">{module.name}</span>
                  <div className="flex items-center gap-1.5">
                    {getStatusIcon(module.status)}
                    <span
                      className={cn(
                        "text-sm font-bold tabular-nums",
                        isSelected
                          ? "text-white"
                          : getScoreColor(module.score, module.maxScore)
                      )}
                    >
                      {module.score}
                    </span>
                  </div>
                </div>
                {/* Mini progress bar */}
                <div className={cn(
                  "h-1 rounded-full overflow-hidden",
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
            </button>
          );
        })}
      </div>
    </div>
  );
}
