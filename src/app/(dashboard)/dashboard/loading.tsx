import { DashboardShell } from "@/components/layout";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
	return (
		<DashboardShell title="Dashboard" description="Loading latest metrics...">
			<div className="space-y-6">
				{/* Metrics Grid Skeleton */}
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					{Array.from({ length: 4 }).map((_, i) => (
						<Skeleton key={i} className="h-32 rounded-xl" />
					))}
				</div>

				{/* Modules Overview Skeleton */}
				<div className="space-y-4">
					<Skeleton className="h-8 w-48" />
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
						{Array.from({ length: 6 }).map((_, i) => (
							<Skeleton key={i} className="h-24 rounded-lg" />
						))}
					</div>
				</div>
			</div>
		</DashboardShell>
	);
}
