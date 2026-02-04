import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { email, website } = body;

		// Validate inputs
		if (!email || !website) {
			return NextResponse.json(
				{ error: "Email and website are required." },
				{ status: 400 },
			);
		}

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
