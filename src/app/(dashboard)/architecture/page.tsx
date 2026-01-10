import { DashboardShell } from "@/components/layout";
import { ArchitectureDiagram } from "@/components/features";
import architectureData from "@/data/architecture.json";
import type { ArchitectureData } from "@/types";

const data = architectureData.architecture as ArchitectureData;

export default function ArchitecturePage() {
  return (
    <DashboardShell
      title="System Architecture"
      description="Visual representation of Kasparro's data pipeline and module structure"
    >
      <ArchitectureDiagram data={data} />
    </DashboardShell>
  );
}