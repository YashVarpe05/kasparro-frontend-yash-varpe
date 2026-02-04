import { PageShell } from "@/components/ui/PageShell";
import { Section } from "@/components/ui/Section";
import { SiteCard } from "@/components/ui/SiteCard";

export default function Proof() {
	return (
		<PageShell>
			<Section>
				<span className="inline-block py-1 px-3 mb-8 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-brand-muted tracking-wider uppercase">
					Case Studies
				</span>
				<h1 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-8 text-white">
					Proof of Truth
				</h1>
				<p className="text-xl text-brand-muted max-w-2xl">
					See what happens when ambiguity is removed.
				</p>
			</Section>

			<Section className="space-y-8">
				<SiteCard variant="narrative">
					<div className="flex flex-col md:flex-row gap-6">
						<div className="flex-1">
							<div className="text-xs font-mono text-red-400 mb-2 uppercase">
								Before
							</div>
							<p className="text-brand-muted italic">
								"This platform is good for small teams but lacks enterprise
								security features."
							</p>
						</div>
						<div className="flex-1">
							<div className="text-xs font-mono text-green-400 mb-2 uppercase">
								After
							</div>
							<p className="text-white">
								"Enterprise-grade security is core to the platform, SOC2 Type II
								compliant as of 2024."
							</p>
						</div>
					</div>
				</SiteCard>
			</Section>
		</PageShell>
	);
}
