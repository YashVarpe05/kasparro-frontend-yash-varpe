import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

export const metadata: Metadata = {
	title: "Deterministic Content + Surface | Kasparro",
	description:
		"Infrastructure for AI discovery. Turn brand truth into AI-recommended answers.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark scroll-smooth">
			<body
				className={cn(
					inter.variable,
					jetbrainsMono.variable,
					"font-sans antialiased bg-background text-foreground selection:bg-white selection:text-black min-h-screen flex flex-col",
				)}
			>
				<div className="fixed inset-0 pointer-events-none bg-grid z-0"></div>

				{/* Subtle hero glow */}
				<div className="pointer-events-none fixed inset-0 z-0">
					<div
						className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
						style={{
							background:
								"radial-gradient(circle, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0) 60%)",
						}}
					></div>
				</div>

				<Nav />

				{/* Main content wrapper to push footer down if needed */}
				<main className="flex-grow">{children}</main>

				<RevealOnScroll />
			</body>
		</html>
	);
}
