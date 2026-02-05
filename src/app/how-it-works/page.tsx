import { PageShell } from "@/components/ui/PageShell";
import { Section } from "@/components/ui/Section";
import { SiteCard } from "@/components/ui/SiteCard";

export default function HowItWorks() {
	return (
		<PageShell>
			<Section>
				<span className="inline-block py-1 px-3 mb-8 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-brand-muted tracking-wider uppercase">
					Integration
				</span>
				<h1 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-8 text-white animate-enter">
					How Kasparro Works
				</h1>
				<p
					className="text-xl text-brand-muted max-w-2xl animate-enter delay-100"
					style={{ opacity: 0, animationFillMode: "forwards" }}
				>
					We construct the deterministic layer your brand is missing.
				</p>
			</Section>

			<Section className="reveal">
				<div className="grid md:grid-cols-3 gap-6">
					<SiteCard variant="narrative" className="stagger-item delay-100">
						<h3 className="text-xl text-white mb-2">1. Audit</h3>
						<p className="text-brand-muted text-sm">
							We analyze how AI currently perceives your brand versus your
							desired truth.
						</p>
					</SiteCard>
					<SiteCard variant="narrative" className="stagger-item delay-200">
						<h3 className="text-xl text-white mb-2">2. Map</h3>
						<p className="text-brand-muted text-sm">
							We map your product truth to the questions AI actually asks.
						</p>
					</SiteCard>
					<SiteCard variant="narrative" className="stagger-item delay-300">
						<h3 className="text-xl text-white mb-2">3. Deploy</h3>
						<p className="text-brand-muted text-sm">
							We publish the Canonical Truth layer that AI systems index.
						</p>
					</SiteCard>
				</div>
			</Section>
		</PageShell>
	);
}
