import { PageShell } from "@/components/ui/PageShell";
import { Section } from "@/components/ui/Section";

export default function About() {
	return (
		<PageShell>
			<Section>
				<h1 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-8 text-white animate-enter">
					About Kasparro
				</h1>
				<p className="text-xl text-brand-muted max-w-2xl mb-8 animate-enter delay-100">
					We believe brands deserve to be understood, not interpreted.
				</p>
				<div className="text-brand-muted space-y-4 max-w-2xl animate-enter delay-200">
					<p>
						The internet was built for browsing. The new internet is built for
						reasoning. When AI agents reason about your product, they need
						facts, not fluff.
					</p>
					<p>Kasparro provides the infrastructure for that transition.</p>
				</div>
			</Section>
		</PageShell>
	);
}
