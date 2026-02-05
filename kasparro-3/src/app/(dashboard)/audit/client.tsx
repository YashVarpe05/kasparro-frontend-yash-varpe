"use client";

import { useEffect } from "react";
import { AuditSidebar, ModuleDetails } from "@/components/features";
import { useKasparroStore } from "@/store";
import type { AuditModule, AuditResult } from "@/types";

interface AuditClientProps {
	modules: AuditModule[];
	results: Record<string, AuditResult>;
}

export function AuditClient({ modules, results }: AuditClientProps) {
	const { selectedModuleId, setSelectedModuleId } = useKasparroStore();

	// Select first module by default
	useEffect(() => {
		if (!selectedModuleId && modules.length > 0) {
			setSelectedModuleId(modules[0].id);
		}
	}, [selectedModuleId, setSelectedModuleId, modules]);

	const selectedModule = modules.find((m) => m.id === selectedModuleId);
	const selectedResult = selectedModuleId ? results[selectedModuleId] : null;

	return (
		<div className="flex h-[calc(100vh-16rem)] rounded-2xl overflow-hidden border border-border/50 bg-linear-to-br from-background to-muted/5 shadow-sm">
			<AuditSidebar modules={modules} />
			{selectedModule && selectedResult ? (
				<ModuleDetails module={selectedModule} result={selectedResult} />
			) : (
				<div className="flex-1 flex items-center justify-center text-muted-foreground">
					Select a module to view details
				</div>
			)}
		</div>
	);
}
