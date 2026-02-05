import Link from "next/link";

export default function TermsPage() {
	return (
		<main className="min-h-screen bg-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
			<article className="max-w-3xl mx-auto space-y-8">
				<div className="space-y-4">
					<h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
						Terms of Service
					</h1>
					<p className="text-xl text-brand-muted">
						Last Updated: {new Date().toLocaleDateString()}
					</p>
				</div>

				<div className="prose prose-invert prose-lg max-w-none">
					<p className="text-lg leading-relaxed text-brand-muted">
						Welcome to Kasparro. By accessing or using our services, you agree
						to be bound by these Terms of Service and all applicable laws and
						regulations.
					</p>

					<h2 className="text-2xl font-semibold text-white mt-12 mb-6">
						1. Acceptance of Terms
					</h2>
					<p className="text-brand-muted">
						By accessing or using our platform, you confirm your acceptance of
						these Terms of Service and agree to being responsible for compliance
						with any applicable local laws.
					</p>

					<h2 className="text-2xl font-semibold text-white mt-12 mb-6">
						2. Use License
					</h2>
					<p className="text-brand-muted">
						Permission is granted to temporarily download one copy of the
						materials (information or software) on Kasparro's website for
						personal, non-commercial transitory viewing only.
					</p>

					<h2 className="text-2xl font-semibold text-white mt-12 mb-6">
						3. Disclaimer
					</h2>
					<p className="text-brand-muted">
						The materials on Kasparro's website are provided on an 'as is'
						basis. Kasparro makes no warranties, expressed or implied, and
						hereby disclaims and negates all other warranties including, without
						limitation, implied warranties or conditions of merchantability,
						fitness for a particular purpose, or non-infringement of
						intellectual property or other violation of rights.
					</p>
				</div>

				<div className="pt-12 border-t border-white/10 mt-12">
					<Link
						href="/"
						className="text-brand-accent hover:text-white transition-colors"
					>
						← Back to Home
					</Link>
				</div>
			</article>
		</main>
	);
}
