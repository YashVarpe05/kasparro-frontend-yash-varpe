import { DashboardShell } from "@/components/layout";
import { Skeleton } from "@/components/ui/skeleton";

export default function AuditLoading() {
	return (
		<DashboardShell
			title="Audit"
			description="Loading audit modules and results..."
		>
			<div className="flex h-[calc(100vh-16rem)] rounded-2xl overflow-hidden border border-border/50 bg-background shadow-sm">
				{/* Sidebar Skeleton */}
				<div className="w-80 border-r bg-muted/20 p-3 space-y-2">
					<Skeleton className="h-14 w-full rounded-xl" />
					<Skeleton className="h-14 w-full rounded-xl" />
					<Skeleton className="h-14 w-full rounded-xl" />
					<Skeleton className="h-14 w-full rounded-xl" />
					<Skeleton className="h-14 w-full rounded-xl" />
					<Skeleton className="h-14 w-full rounded-xl" />
					<Skeleton className="h-14 w-full rounded-xl" />
				</div>

				{/* Details Panel Skeleton */}
				<div className="flex-1 p-6 space-y-6">
					<div className="flex items-center justify-between">
						<div className="space-y-2">
							<Skeleton className="h-8 w-64" />
							<Skeleton className="h-4 w-96" />
						</div>
						<Skeleton className="h-12 w-32 rounded-full" />
					</div>

					<div className="grid grid-cols-3 gap-4">
						<Skeleton className="h-24 rounded-lg" />
						<Skeleton className="h-24 rounded-lg" />
						<Skeleton className="h-24 rounded-lg" />
					</div>

					<div className="space-y-4">
						<Skeleton className="h-40 rounded-lg" />
						<Skeleton className="h-40 rounded-lg" />
					</div>
				</div>
			</div>
		</DashboardShell>
	);
}
