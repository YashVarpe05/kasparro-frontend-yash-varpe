"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

export function FooterCTA() {
	const [formData, setFormData] = useState({
		email: "",
		website: "",
	});
	const [status, setStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("loading");

		// Simulate API call
		try {
			await fetch("/api/audit-request", {
				method: "POST",
				body: JSON.stringify(formData),
				headers: { "Content-Type": "application/json" },
			});
			setStatus("success");
		} catch (error) {
			console.error(error);
			setStatus("error");
		}
	};

	return (
		<footer
			id="request"
			className="max-w-xl mx-auto pt-20 border-t border-white/10 text-center reveal"
		>
			<h2 className="text-3xl font-medium text-white mb-6">
				Stop letting AI guess your brand.
			</h2>

			<p className="text-brand-muted mb-10">
				Kasparro makes your brand clear — deterministically. Start with the AI
				Trust Readiness Audit.
			</p>

			{status === "success" ? (
				<div className="p-6 bg-green-500/10 border border-green-500/20 rounded-md text-green-400">
					Request received. We will be in touch shortly.
				</div>
			) : (
				<form onSubmit={handleSubmit} className="space-y-4 text-left">
					<div>
						<label
							htmlFor="email"
							className="block text-xs font-mono text-brand-muted mb-2 uppercase"
						>
							Work Email
						</label>
						<input
							type="email"
							id="email"
							required
							value={formData.email}
							onChange={(e) =>
								setFormData({ ...formData, email: e.target.value })
							}
							className="w-full bg-black border border-white/20 text-white p-3 rounded-md focus:border-white focus:outline-none transition-colors focus:ring-2 focus:ring-white/20"
							placeholder="name@company.com"
						/>
					</div>

					<div>
						<label
							htmlFor="website"
							className="block text-xs font-mono text-brand-muted mb-2 uppercase"
						>
							Brand Website
						</label>
						<input
							type="url"
							id="website"
							required
							value={formData.website}
							onChange={(e) =>
								setFormData({ ...formData, website: e.target.value })
							}
							className="w-full bg-black border border-white/20 text-white p-3 rounded-md focus:border-white focus:outline-none transition-colors focus:ring-2 focus:ring-white/20"
							placeholder="company.com"
						/>
					</div>

					<button
						type="submit"
						className="w-full bg-white text-black font-medium py-3 px-6 rounded-md hover:bg-gray-200 transition-colors mt-4 disabled:opacity-50"
						disabled={status === "loading"}
					>
						{status === "loading" ? "Sending..." : "Request Audit"}
					</button>

					<p className="text-center text-xs text-brand-muted mt-4">
						We review requests selectively. If it’s a fit, we’ll respond with
						next steps.
					</p>
				</form>
			)}

			<div className="mt-20 pb-10 text-xs text-brand-muted font-mono">
				© Kasparro. Infrastructure for AI Discovery.
			</div>
		</footer>
	);
}
