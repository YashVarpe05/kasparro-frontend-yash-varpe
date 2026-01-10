import { DashboardShell } from "@/components/layout";
import { MetricsGrid, ModuleOverview } from "@/components/dashboard";
import { getDashboardData, getAuditModules } from "@/lib/api";

export default async function DashboardPage() {
	const [dashboardData, modules] = await Promise.all([
		getDashboardData(),
		getAuditModules(),
	]);

	const lastUpdated = new Date(dashboardData.lastUpdated);

	return (
		<DashboardShell
			title="Dashboard"
			description={`Last updated: ${lastUpdated.toLocaleString()}`}
		>
			<MetricsGrid metrics={dashboardData.metrics} />
			<ModuleOverview modules={modules} />
		</DashboardShell>
	);
}
