import Link from "next/link";

export default function SitemapPage() {
	return (
		<main className="min-h-screen bg-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto">
				<div className="mb-12">
					<h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 mb-4">
						Sitemap
					</h1>
					<p className="text-xl text-brand-muted">
						Complete overview of available pages on Kasparro.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12">
					<div>
						<h2 className="text-2xl font-semibold text-white mb-6 border-b border-white/10 pb-4">
							Main Pages
						</h2>
						<ul className="space-y-4">
							<li>
								<Link
									href="/"
									className="text-lg text-brand-muted hover:text-white transition-colors flex items-center gap-2 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-brand-accent group-hover:bg-white transition-colors" />
									Home
								</Link>
							</li>
							<li>
								<Link
									href="/how-it-works"
									className="text-lg text-brand-muted hover:text-white transition-colors flex items-center gap-2 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-brand-accent group-hover:bg-white transition-colors" />
									How It Works
								</Link>
							</li>
							<li>
								<Link
									href="/platform"
									className="text-lg text-brand-muted hover:text-white transition-colors flex items-center gap-2 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-brand-accent group-hover:bg-white transition-colors" />
									Platform
								</Link>
							</li>
							<li>
								<Link
									href="/proof"
									className="text-lg text-brand-muted hover:text-white transition-colors flex items-center gap-2 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-brand-accent group-hover:bg-white transition-colors" />
									Proof
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="text-lg text-brand-muted hover:text-white transition-colors flex items-center gap-2 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-brand-accent group-hover:bg-white transition-colors" />
									About
								</Link>
							</li>
							<li>
								<Link
									href="/contact"
									className="text-lg text-brand-muted hover:text-white transition-colors flex items-center gap-2 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-brand-accent group-hover:bg-white transition-colors" />
									Contact
								</Link>
							</li>
							<li>
								<Link
									href="/request-audit"
									className="text-lg text-brand-muted hover:text-white transition-colors flex items-center gap-2 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-brand-accent group-hover:bg-white transition-colors" />
									Request Audit
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h2 className="text-2xl font-semibold text-white mb-6 border-b border-white/10 pb-4">
							Legal & Utility
						</h2>
						<ul className="space-y-4">
							<li>
								<Link
									href="/privacy"
									className="text-lg text-brand-muted hover:text-white transition-colors flex items-center gap-2 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-brand-accent group-hover:bg-white transition-colors" />
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/terms"
									className="text-lg text-brand-muted hover:text-white transition-colors flex items-center gap-2 group"
								>
									<span className="w-1.5 h-1.5 rounded-full bg-brand-accent group-hover:bg-white transition-colors" />
									Terms of Service
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</main>
	);
}
