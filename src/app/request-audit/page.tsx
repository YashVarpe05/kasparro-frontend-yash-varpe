import { PageShell } from "@/components/ui/PageShell";
import { Section } from "@/components/ui/Section";
import { FooterCTA } from "@/components/FooterCTA";

export default function RequestAudit() {
	return (
		<PageShell>
			<Section>
				<span className="inline-block py-1 px-3 mb-8 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-brand-muted tracking-wider uppercase">
					Start Here
				</span>
				<h1 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-8 text-white">
					AI Trust Readiness Audit
				</h1>
				<p className="text-xl max-w-2xl text-brand-muted">
					Find out exactly where your brand is leaking revenue in the AI
					ecosystem.
				</p>
			</Section>

			<Section className="prose prose-invert max-w-2xl">
				<p>Our audit covers:</p>
				<ul>
					<li>Hallucination Risk Score</li>
					<li>Competitive Displacement Analysis</li>
					<li>Knowledge Graph Coverage</li>
				</ul>
			</Section>

			<FooterCTA />
		</PageShell>
	);
}
