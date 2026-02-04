import { PageShell } from "@/components/ui/PageShell";
import { Section } from "@/components/ui/Section";
import { FooterCTA } from "@/components/FooterCTA";

export default function Contact() {
	return (
		<PageShell>
			<Section>
				<h1 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-8 text-white">
					Contact
				</h1>
				<p className="text-xl text-brand-muted max-w-2xl mb-8">
					Ready to secure your brand's AI future?
				</p>
			</Section>
			<FooterCTA />
		</PageShell>
	);
}
