import { PageShell } from "@/components/ui/PageShell";
import { Section } from "@/components/ui/Section";
import { SiteCard } from "@/components/ui/SiteCard";
import { FooterCTA } from "@/components/FooterCTA";

export default function Home() {
	return (
		<PageShell>
			<Section>
				<span className="inline-block py-1 px-3 mb-8 rounded-full border border-white/10 bg-white/5 text-xs font-mono text-brand-muted tracking-wider uppercase">
					System C: Deterministic Content + Surface
				</span>

				<h1 className="text-4xl md:text-6xl font-medium tracking-tighter leading-[1.1] mb-8 text-white animate-enter">
					How Kasparro turns brand truth into{" "}
					<span className="text-brand-muted">AI-recommended answers.</span>
				</h1>

				<p
					className="text-xl md:text-2xl text-brand-muted font-light leading-relaxed max-w-2xl animate-enter delay-100"
					style={{ opacity: 0, animationFillMode: "forwards" }}
				>
					Revenue leaks when AI can’t safely explain your product.
					<span className="text-white/90 block mt-2">
						AI hesitates when your knowledge surface is unreliable.
					</span>
				</p>
			</Section>

			<Section className="space-y-12 reveal">
				<div className="border-l border-white/10 pl-6 mt-6">
					<h2 className="text-2xl font-medium text-white mb-4">
						Your customers are no longer browsing. <br />
						They're asking.
					</h2>

					<p className="text-brand-muted text-lg mb-6">
						When they ask questions, they trust AI to answer. When AI hesitates,
						hedges, or explains you incorrectly, revenue leaks:
					</p>

					<ul className="space-y-3 font-mono text-sm text-brand-muted">
						<li className="flex items-center gap-3 stagger-item delay-100">
							<span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
							Recommendations don't happen
						</li>
						<li className="flex items-center gap-3 stagger-item delay-200">
							<span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
							Comparisons tilt against you
						</li>
						<li className="flex items-center gap-3 stagger-item delay-300">
							<span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
							Intent dies before it reaches your site
						</li>
					</ul>
				</div>
			</Section>

			<Section className="reveal">
				<div className="mb-12">
					<p className="text-lg text-brand-muted max-w-2xl">
						Most brands respond by publishing more. Blogs. FAQs. Landing pages.
						<br />
						<span className="text-white">
							AI doesn’t see volume — it sees inconsistency.
						</span>
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 md:gap-16">
					<div>
						<h3 className="text-xs font-mono text-brand-muted uppercase tracking-wider mb-6 pb-4 border-b border-white/10">
							Most Brands Think In Terms Of
						</h3>

						<ul className="space-y-4 text-brand-muted opacity-60">
							<li className="flex items-center gap-4 stagger-item delay-100">
								<svg
									className="w-5 h-5 flex-shrink-0"
									fill="none"
									aria-hidden="true"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
									></path>
								</svg>
								Blogs
							</li>
							<li className="flex items-center gap-4 stagger-item">
								<svg
									className="w-5 h-5 flex-shrink-0"
									fill="none"
									aria-hidden="true"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
									></path>
								</svg>
								Landing Pages
							</li>
							<li className="flex items-center gap-4 stagger-item delay-200">
								<svg
									className="w-5 h-5 flex-shrink-0"
									fill="none"
									aria-hidden="true"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									></path>
								</svg>
								FAQs
							</li>
							<li className="flex items-center gap-4 stagger-item delay-300">
								<svg
									className="w-5 h-5 flex-shrink-0"
									fill="none"
									aria-hidden="true"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									></path>
								</svg>
								SEO Keywords
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-xs font-mono text-white uppercase tracking-wider mb-6 pb-4 border-b border-white/20 md:border-white/50">
							AI Actually Sees
						</h3>

						<ul className="space-y-4 text-white">
							<li className="flex items-center gap-4 stagger-item delay-100">
								<span className="text-red-400 font-mono text-lg">×</span>{" "}
								Fragmented explanations
							</li>
							<li className="flex items-center gap-4 stagger-item delay-200">
								<span className="text-red-400 font-mono text-lg">×</span>{" "}
								Inconsistent claims
							</li>
							<li className="flex items-center gap-4 stagger-item delay-300">
								<span className="text-red-400 font-mono text-lg">×</span>{" "}
								Missing answers
							</li>
							<li className="flex items-center gap-4 stagger-item delay-400">
								<span className="text-red-400 font-mono text-lg">×</span> Unsafe
								language
							</li>
						</ul>

						<div className="mt-8 text-sm text-brand-muted border-l-2 border-white/20 pl-4 stagger-item delay-500">
							So it fills the gaps — or avoids you entirely. <br />
							<strong className="text-white">Deterministic Content</strong> is
							how Kasparro removes the guesswork.
						</div>
					</div>
				</div>
			</Section>

			<Section className="reveal">
				<h2 className="text-3xl font-medium text-white mb-8">
					Stop being interpreted. Start being understood.
				</h2>

				<p className="text-brand-muted text-lg mb-10 leading-relaxed">
					Kasparro maps every product to a finite set of questions AI and
					customers actually ask. What is it? How does it work? Is it safe?
				</p>

				<SiteCard variant="canonical">
					<p className="font-mono text-xs text-brand-muted mb-4 uppercase tracking-widest">
						The Rule
					</p>
					<p className="text-white text-xl">
						Each question gets one authoritative answer. No duplication. No
						contradictions. No infinite publishing. When the surface is
						complete, the system stops.
					</p>
				</SiteCard>
			</Section>

			<Section className="max-w-5xl reveal">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl text-white font-medium mb-4">
						From truth to visibility: The Content Surface
					</h2>
					<p className="text-brand-muted">
						Kasparro separates truth from storytelling so neither contaminates
						the other.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					<SiteCard variant="narrative" className="relative">
						<div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-6xl font-bold select-none text-white">
							01
						</div>
						<h3 className="text-xl font-medium text-white mb-2">
							Layer 1: Canonical Truth
						</h3>
						<p className="text-xs font-mono text-brand-muted uppercase tracking-wider mb-6">
							What AI Trusts
						</p>

						<div className="space-y-6">
							<div className="text-brand-muted text-sm leading-relaxed">
								Structured, conservative, and unambiguous. This is what AI
								systems rely on, summaries are derived from, and comparisons
								reference.
							</div>

							<ul className="space-y-2 text-sm text-white/90 font-mono">
								<li className="flex gap-3">
									<span className="text-blue-400">→</span> Factual explanations
								</li>
								<li className="flex gap-3">
									<span className="text-blue-400">→</span> Permitted claims
								</li>
								<li className="flex gap-3">
									<span className="text-blue-400">→</span> Compliance-safe
									language
								</li>
							</ul>

							<div className="pt-4 border-t border-white/5">
								<p className="text-xs text-brand-muted italic">
									It’s not persuasive — and that’s the point.
								</p>
							</div>
						</div>
					</SiteCard>

					<SiteCard variant="narrative" className="relative">
						<div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-6xl font-bold select-none text-white">
							02
						</div>
						<h3 className="text-xl font-medium text-white mb-2">
							Layer 2: Narrative Projection
						</h3>
						<p className="text-xs font-mono text-brand-muted uppercase tracking-wider mb-6">
							What Humans Engage With
						</p>

						<div className="space-y-6">
							<div className="text-brand-muted text-sm leading-relaxed">
								Translates the same truth into real-world context and
								audience-specific storytelling.
							</div>

							<ul className="space-y-2 text-sm text-white/90 font-mono">
								<li className="flex gap-3">
									<span className="text-green-400">→</span> Real-world context
								</li>
								<li className="flex gap-3">
									<span className="text-green-400">→</span> Use-case framing
								</li>
								<li className="flex gap-3">
									<span className="text-green-400">→</span> No exaggeration or
									new promises
								</li>
							</ul>

							<div className="pt-4 border-t border-white/5">
								<p className="text-xs text-brand-muted italic">
									Humans read this layer. AI never treats it as evidence.
								</p>
							</div>
						</div>
					</SiteCard>
				</div>
			</Section>

			<Section>
				<h2 className="text-2xl font-medium text-white mb-6">
					Why this separation matters for revenue
				</h2>

				<div className="grid md:grid-cols-2 gap-8 text-sm">
					<div>
						<p className="font-mono text-red-400 mb-4 uppercase text-xs tracking-wider">
							When Mixed:
						</p>
						<ul className="space-y-2 text-brand-muted">
							<li>AI distrusts you</li>
							<li>Compliance risk rises</li>
							<li>Teams rewrite endlessly</li>
						</ul>
					</div>

					<div>
						<p className="font-mono text-green-400 mb-4 uppercase text-xs tracking-wider">
							When Separated:
						</p>
						<ul className="space-y-2 text-white">
							<li>AI recommends confidently</li>
							<li>Humans convert clearly</li>
							<li>Brand consistency scales</li>
						</ul>
					</div>
				</div>

				<div className="mt-10 p-6 bg-white/5 border-l-2 border-white rounded-r-lg">
					<p className="text-lg text-white">
						Revenue doesn’t leak because of bad marketing. <br />
						<span className="text-brand-muted">
							It leaks because AI can’t safely explain you.
						</span>
					</p>
				</div>
			</Section>

			<Section className="reveal">
				<h2 className="text-xs font-mono text-brand-muted uppercase tracking-wider mb-8">
					What Kasparro Prevents By Design
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-16">
					<div className="flex items-center gap-3 text-brand-muted stagger-item">
						<span className="text-red-400">❌</span> Hallucinated benefits
					</div>
					<div className="flex items-center gap-3 text-brand-muted stagger-item">
						<span className="text-red-400">❌</span> Over-claiming in
						comparisons
					</div>
					<div className="flex items-center gap-3 text-brand-muted stagger-item">
						<span className="text-red-400">❌</span> Inconsistent product
						explanations
					</div>
					<div className="flex items-center gap-3 text-brand-muted stagger-item">
						<span className="text-red-400">❌</span> Endless “content refresh”
						cycles
					</div>
					<div className="flex items-center gap-3 text-brand-muted stagger-item">
						<span className="text-red-400">❌</span> Compliance drift
					</div>
					<div className="flex items-center gap-3 text-brand-muted stagger-item">
						<span className="text-red-400">❌</span> SEO churn without trust
					</div>
				</div>

				<div className="mb-16">
					<p className="text-white text-lg font-medium">
						This isn’t optimization.{" "}
						<span className="text-brand-muted">
							It’s infrastructure for AI discovery.
						</span>
					</p>
				</div>

				<div>
					<h3 className="text-2xl text-white mb-6">The Outcome</h3>
					<p className="text-brand-muted mb-8">
						Your brand becomes easier for AI to summarize, safer to recommend,
						and harder to misrepresent across ChatGPT, Gemini, Perplexity — and
						whatever comes next.
					</p>

					<div className="p-8 border border-white/10 rounded-xl bg-gradient-to-br from-white/5 to-transparent text-center">
						<p className="text-xs font-mono text-brand-muted mb-4 uppercase tracking-widest">
							One line we stand by
						</p>
						<p className="text-xl md:text-2xl text-white font-medium">
							"AI doesn’t reward louder brands.
							<br />
							It rewards clearer ones.“
						</p>
					</div>
				</div>
			</Section>

			<FooterCTA />
		</PageShell>
	);
}
