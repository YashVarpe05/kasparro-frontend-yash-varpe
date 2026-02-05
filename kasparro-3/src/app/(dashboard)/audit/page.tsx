import { DashboardShell } from "@/components/layout";
import { AuditClient } from "./client";
import { getAuditModules, getAuditResults } from "@/lib/api";

export default async function AuditPage() {
	const [modules, results] = await Promise.all([
		getAuditModules(),
		getAuditResults(),
	]);

	return (
		<DashboardShell
			title="Audit"
			description="Detailed module analysis and recommendations"
		>
			<AuditClient modules={modules} results={results} />
		</DashboardShell>
	);
}
