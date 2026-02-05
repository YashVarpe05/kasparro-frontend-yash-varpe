import { NextResponse } from "next/server";
import { z } from "zod";

const auditSchema = z.object({
	email: z.string().email("Invalid email address"),
	website: z.string().url("Invalid website URL"),
});

export async function POST(request: Request) {
	try {
		const body = await request.json();

		// Validate inputs with Zod
		const result = auditSchema.safeParse(body);

		if (!result.success) {
			return NextResponse.json(
				{ error: "Invalid input", details: result.error.flatten() },
				{ status: 400 },
			);
		}

		const { email, website } = result.data;

		// Here you would typically integrate with an email service like Resend or Postmark
		// For now, we'll just simulate a success response
		console.log("Audit Request Received:", { email, website });

		return NextResponse.json({ success: true, message: "Request received" });
	} catch (error) {
		console.error("Error processing audit request:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}
