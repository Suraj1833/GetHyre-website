import { NextResponse } from "next/server";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { email, goal } =
    (payload as { email?: unknown; goal?: unknown }) ?? {};

  if (typeof email !== "string" || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 400 },
    );
  }

  const entry = {
    email: email.toLowerCase().trim(),
    goal: typeof goal === "string" ? goal.trim().slice(0, 200) : "",
    createdAt: new Date().toISOString(),
  };

  // Stub: swap this for a database insert or an email-provider API call.
  console.log("[waitlist] new signup", entry);

  return NextResponse.json({ ok: true }, { status: 201 });
}
