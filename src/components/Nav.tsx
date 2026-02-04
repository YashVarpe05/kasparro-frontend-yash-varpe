import Link from "next/link";
import { cn } from "@/lib/utils";

export function Nav() {
	return (
		<nav
			aria-label="Main Navigation"
			className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-black/80 backdrop-blur-md transition-all duration-300"
		>
			<div className="max-w-4xl flex flex-wrap items-center justify-between mx-auto p-4 md:p-6">
				<Link
					href="/"
					className="flex items-center space-x-3 rtl:space-x-reverse z-50"
				>
					<span className="self-center text-lg font-medium tracking-tight text-white">
						Kasparro
					</span>
				</Link>

				<div className="w-full md:block md:w-auto mt-6 md:mt-0">
					<ul className="font-medium flex flex-wrap gap-x-4 md:gap-x-8 gap-y-3 justify-start md:justify-end">
						<li>
							<Link
								href="#"
								className="block py-1 text-sm text-brand-muted hover:text-white transition-colors"
							>
								Entropy
							</Link>
						</li>
						<li>
							<Link
								href="#"
								className="block py-1 text-sm text-brand-muted hover:text-white transition-colors"
							>
								Brand Brain
							</Link>
						</li>
						<li>
							<Link
								href="/"
								className="block py-1 text-sm text-white border-b border-white/20"
								aria-current="page"
							>
								Deterministic Content
							</Link>
						</li>
						<li>
							<Link
								href="#request"
								className="block py-1 text-sm text-brand-muted hover:text-white transition-colors"
							>
								Request Audit
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
