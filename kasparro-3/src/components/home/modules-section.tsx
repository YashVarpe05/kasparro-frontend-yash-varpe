"use client";

import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { modules } from "@/data/home";

export function ModulesSection() {
	return (
		<section className="py-24 bg-background dark:bg-black">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<p className="text-violet-600 dark:text-violet-400 text-sm font-semibold tracking-widest uppercase mb-4">
						Modular Architecture
					</p>
					<h2 className="text-4xl font-bold mb-4 text-foreground dark:text-white">
						Six Engines. One Platform.
					</h2>
					<p className="text-muted-foreground dark:text-gray-400 max-w-xl mx-auto">
						Each module runs independently, feeds into the others, and delivers
						precise, actionable intelligence.
					</p>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{modules.map((module, idx) => (
						<div key={idx} className="group relative">
							<div className="border border-border dark:border-neutral-800 rounded-3xl bg-card dark:bg-neutral-950 overflow-hidden shadow-sm">
								{/* Evervault Card Header */}
								<div className="relative h-40 w-full">
									<EvervaultCard text={module.code} className="h-full" />
									<Icon className="absolute h-6 w-6 -top-3 -left-3 text-muted-foreground/50 dark:text-neutral-700" />
									<Icon className="absolute h-6 w-6 -top-3 -right-3 text-muted-foreground/50 dark:text-neutral-700" />
									<Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-muted-foreground/50 dark:text-neutral-700" />
									<Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-muted-foreground/50 dark:text-neutral-700" />
								</div>
								{/* Content */}
								<div className="p-6 border-t border-border dark:border-neutral-800">
									<div className="flex items-center gap-3 mb-3">
										<div className="h-10 w-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
											<module.icon className="h-5 w-5 text-violet-600 dark:text-violet-400" />
										</div>
										<div>
											<h3 className="font-semibold text-foreground dark:text-white">
												{module.title}
											</h3>
											<p className="text-xs text-muted-foreground dark:text-gray-500">
												{module.tagline}
											</p>
										</div>
									</div>
									<ul className="space-y-2 mt-4">
										{module.features.map((feature, fidx) => (
											<li
												key={fidx}
												className="flex items-center gap-2 text-sm text-muted-foreground dark:text-gray-400"
											>
												<div className="h-1.5 w-1.5 rounded-full bg-violet-500" />
												{feature}
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
