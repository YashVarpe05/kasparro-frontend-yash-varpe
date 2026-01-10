import modulesData from "@/data/modules.json";
import dashboardData from "@/data/dashboard.json";
import auditResultsData from "@/data/audit-results.json";
import architectureData from "@/data/architecture.json";
import type {
	AuditModule,
	AuditResult,
	DashboardData,
	ArchitectureData,
} from "@/types";

const DELAY_MS = 1000;

function delay(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getDashboardData(): Promise<DashboardData> {
	await delay(DELAY_MS);
	// Ensure strict typing matching the JSON structure
	return dashboardData.dashboard as unknown as DashboardData;
}

export async function getAuditModules(): Promise<AuditModule[]> {
	await delay(DELAY_MS);
	return modulesData.modules as AuditModule[];
}

export async function getAuditResults(): Promise<Record<string, AuditResult>> {
	await delay(DELAY_MS);
	return auditResultsData.results as Record<string, AuditResult>;
}

export async function getArchitectureData(): Promise<ArchitectureData> {
	await delay(DELAY_MS);
	return architectureData.architecture as ArchitectureData;
}
