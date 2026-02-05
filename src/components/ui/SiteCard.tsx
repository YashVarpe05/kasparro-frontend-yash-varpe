import React from "react";
import { cn } from "@/lib/utils";

interface SiteCardProps extends React.HTMLAttributes<HTMLDivElement> {
	variant?: "canonical" | "narrative" | "glass";
	children: React.ReactNode;
}

export function SiteCard({
	variant = "narrative",
	children,
	className,
	...props
}: SiteCardProps) {
	const variants = {
		// Sharper, higher-contrast for rules/truth
		canonical: "bg-brand-gray border border-white/5 rounded-lg glow-border p-8",
		// Softer, for explanation
		narrative:
			"bg-white/5 border border-white/5 rounded-xl transition-all duration-300 hover:border-white/10 hover:bg-white/10 p-8",
		// Glass effect
		glass: "backdrop-blur-md bg-black/80 border border-white/10 rounded-lg p-6",
	};

	return (
		<div className={cn(variants[variant], "hover-lift", className)} {...props}>
			{children}
		</div>
	);
}
