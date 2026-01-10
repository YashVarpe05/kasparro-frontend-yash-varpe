"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";
import { ModeToggle } from "./mode-toggle";
import { useState, useEffect } from "react";

const StaggeredMenu = dynamic(
	() => import("@/components/StaggeredMenu").then((mod) => mod.StaggeredMenu),
	{ ssr: false }
);

const menuItems = [
	{ label: "Home", ariaLabel: "Go to home page", link: "/" },
	{ label: "Dashboard", ariaLabel: "View your dashboard", link: "/dashboard" },
	{
		label: "Platform",
		ariaLabel: "Learn about our platform",
		link: "/platform",
	},
	{ label: "Audit", ariaLabel: "Run an AI audit", link: "/audit" },
	{ label: "About", ariaLabel: "About Kasparro", link: "/about" },
];

const socialItems = [
	{ label: "Twitter", link: "https://twitter.com" },
	{ label: "LinkedIn", link: "https://linkedin.com" },
	{ label: "GitHub", link: "https://github.com" },
];

export function NavbarStaggered() {
	const { theme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const isDark = mounted && (theme === "dark" || resolvedTheme === "dark");

	// Theme-aware colors
	const panelBg = isDark ? "#0a0a0a" : "#ffffff";
	const panelText = isDark ? "#ffffff" : "#000000";
	const layerColors = isDark ? ["#1e1b4b", "#4c1d95"] : ["#f5f3ff", "#ddd6fe"];
	const menuBtnColor = "#ffffff";
	const openMenuBtnColor = isDark ? "#ffffff" : "#000000";

	return (
		<>
			{/* Floating Nav - clean minimal */}
			{/* Floating Nav - clean minimal */}
			<nav
				className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-border/50 ${
					menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
				}`}
			>
				<div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-4">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<Link href="/" className="flex items-center gap-3 group">
							<div className="h-10 w-10 rounded-xl bg-violet-600 flex items-center justify-center shadow-lg shadow-violet-500/25 group-hover:scale-105 transition-transform">
								<span className="text-xl font-bold text-white">K</span>
							</div>
							<span className="text-xl font-bold text-foreground tracking-tight">
								Kasparro
							</span>
						</Link>

						{/* Right side - Theme toggle only */}
						<div className="flex items-center">
							<ModeToggle />
						</div>
					</div>
				</div>
			</nav>

			{/* Staggered Menu Overlay - no logo, positioned right */}
			<div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-40">
				<StaggeredMenu
					position="right"
					colors={layerColors}
					items={menuItems}
					socialItems={socialItems}
					displaySocials={true}
					displayItemNumbering={true}
					logoUrl=""
					menuButtonColor={menuBtnColor}
					openMenuButtonColor={openMenuBtnColor}
					accentColor="#8b5cf6"
					isFixed={false}
					changeMenuColorOnOpen={true}
					closeOnClickAway={true}
					onMenuOpen={() => setMenuOpen(true)}
					onMenuClose={() => setMenuOpen(false)}
					panelBgColor={panelBg}
					panelTextColor={panelText}
				/>
			</div>
		</>
	);
}
