"use client";

import { MetricCard } from "@/components/features";
import type { DashboardMetric } from "@/types";

interface MetricsGridProps {
  metrics: DashboardMetric[];
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
      {metrics.map((metric) => (
        <MetricCard key={metric.id} metric={metric} />
      ))}
    </div>
  );
}
