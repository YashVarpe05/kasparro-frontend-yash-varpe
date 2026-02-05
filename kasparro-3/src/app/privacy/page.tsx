import Link from "next/link";

export default function PrivacyPage() {
	return (
		<main className="min-h-screen bg-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
			<article className="max-w-3xl mx-auto space-y-8">
				<div className="space-y-4">
					<h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
						Privacy Policy
					</h1>
					<p className="text-xl text-brand-muted">
						Effective Date: {new Date().toLocaleDateString()}
					</p>
				</div>

				<div className="prose prose-invert prose-lg max-w-none">
					<p className="text-lg leading-relaxed text-brand-muted">
						At Kasparro, we prioritize the privacy and security of our users.
						This Privacy Policy outlines how we collect, use, and protect your
						information when you use our AI infrastructure services.
					</p>

					<h2 className="text-2xl font-semibold text-white mt-12 mb-6">
						1. Information Collection
					</h2>
					<p className="text-brand-muted">
						We collect information that you provide directly to us, such as when
						you request an audit, create an account, or contact support. This
						may include your name, email address, and company details.
					</p>

					<h2 className="text-2xl font-semibold text-white mt-12 mb-6">
						2. Use of Information
					</h2>
					<p className="text-brand-muted">
						We use the information we collect to operate, maintain, and improve
						our services, to communicate with you, and to ensure the security of
						our platform.
					</p>

					<h2 className="text-2xl font-semibold text-white mt-12 mb-6">
						3. Data Security
					</h2>
					<p className="text-brand-muted">
						We use commercial grade security measures to protect your personal
						information. However, no method of transmission over the Internet,
						or method of electronic storage, is 100% secure.
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
