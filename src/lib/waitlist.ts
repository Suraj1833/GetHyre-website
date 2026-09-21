// Waitlist signups post straight from the browser to Web3Forms, which emails
// each one to the team inbox. The access key is public by design.
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export type WaitlistSource = "waitlist-page" | "inline-cta";

export async function submitWaitlist({
  email,
  targetRole,
  source,
}: {
  email: string;
  targetRole?: string;
  source: WaitlistSource;
}) {
  const accessKey = process.env.NEXT_PUBLIC_W3F_KEY;
  if (!accessKey) {
    throw new Error("NEXT_PUBLIC_W3F_KEY is not set.");
  }

  const payload: Record<string, string> = {
    access_key: accessKey,
    email: email.trim().toLowerCase(),
    subject: "New GetHyre waitlist signup",
    from_name: "GetHyre Waitlist",
    source,
  };

  const role = targetRole?.trim().slice(0, 200);
  if (role) payload.target_role = role;

  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = (await res.json().catch(() => null)) as {
    success?: boolean;
    message?: string;
  } | null;

  if (!res.ok || !data?.success) {
    throw new Error(
      data?.message ?? `Web3Forms responded with status ${res.status}.`,
    );
  }
}
