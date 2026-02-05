import React from "react";
import { cn } from "@/lib/utils";

interface PageShellProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
}

export function PageShell({ children, className, ...props }: PageShellProps) {
	return (
		<div
			className={cn(
				"relative z-10 pt-36 md:pt-44 pb-20 px-6 max-w-7xl mx-auto w-full",
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
}
