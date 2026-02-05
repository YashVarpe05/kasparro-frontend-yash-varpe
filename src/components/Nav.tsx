"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { scaleInY, transition } from "@/lib/motion";

const links = [
	{ name: "Home", href: "/" },
	{ name: "How It Works", href: "/how-it-works" },
	{ name: "Platform", href: "/platform" },
	{ name: "Proof", href: "/proof" },
	{ name: "About", href: "/about" },
	{ name: "Contact", href: "/contact" },
];

export function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	// Close mobile menu when route changes
	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	// Lock body scroll when mobile menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	return (
		<nav
			className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-black/80 backdrop-blur-md transition-all duration-300"
			aria-label="Main Navigation"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<div className="flex-shrink-0">
						<Link href="/" className="flex items-center gap-2 group">
							<span className="text-xl font-bold tracking-tight text-white group-hover:text-brand-accent transition-colors">
								Kasparro
							</span>
						</Link>
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:block">
						<div className="ml-10 flex items-baseline space-x-8">
							{links.map((link) => {
								const isActive = pathname === link.href;
								return (
									<Link
										key={link.name}
										href={link.href}
										className={cn(
											"text-sm font-medium transition-colors duration-200",
											isActive
												? "text-white"
												: "text-brand-muted hover:text-white",
										)}
										aria-current={isActive ? "page" : undefined}
									>
										{link.name}
										{isActive && (
											<motion.div
												layoutId="navbar-indicator"
												className="h-0.5 w-full bg-white mt-1 rounded-full"
												transition={transition}
											/>
										)}
									</Link>
								);
							})}
						</div>
					</div>

					{/* CTA Button (Desktop) */}
					<div className="hidden md:block">
						<Link
							href="/request-audit"
							className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-full text-black bg-white hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
						>
							Request Audit
						</Link>
					</div>

					{/* Mobile Menu Button */}
					<div className="-mr-2 flex md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							type="button"
							className="inline-flex items-center justify-center p-2 rounded-md text-brand-muted hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded={isOpen}
						>
							<span className="sr-only">Open main menu</span>
							{isOpen ? (
								<X className="block h-6 w-6" aria-hidden="true" />
							) : (
								<Menu className="block h-6 w-6" aria-hidden="true" />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu (Overlay) */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						{...scaleInY}
						className="md:hidden border-b border-white/10 bg-black/95 backdrop-blur-xl absolute top-full left-0 w-full overflow-hidden"
						id="mobile-menu"
					>
						<div className="px-4 pt-2 pb-6 space-y-2">
							{links.map((link) => {
								const isActive = pathname === link.href;
								return (
									<Link
										key={link.name}
										href={link.href}
										className={cn(
											"block px-3 py-4 rounded-md text-base font-medium text-center",
											isActive
												? "bg-white/10 text-white"
												: "text-brand-muted hover:text-white hover:bg-white/5",
										)}
										aria-current={isActive ? "page" : undefined}
									>
										{link.name}
									</Link>
								);
							})}
							<div className="pt-4 mt-4 border-t border-white/10">
								<Link
									href="/request-audit"
									className="block w-full px-5 py-4 text-center font-medium rounded-lg text-black bg-white hover:bg-gray-200 transition-colors"
								>
									Request Audit
								</Link>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
}
