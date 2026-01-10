import { NavbarStaggered } from "@/components/navbar-staggered";
import { PlatformHero, PipelineSection, ModulesSection, PlatformFooter } from "@/components/platform";
import platformData from "@/data/platform.json";
import type { PipelineStage, ModuleInfo } from "@/types";

const pipeline = platformData.platform.pipeline as PipelineStage[];
const modules = platformData.platform.modules as ModuleInfo[];

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-background">
      <NavbarStaggered />
      <PlatformHero />
      <PipelineSection pipeline={pipeline} />
      <ModulesSection modules={modules} />
      <PlatformFooter />
    </main>
  );
}