import { postToWeb3Forms } from "@/lib/web3forms";

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
  const fields: Record<string, string> = {
    email: email.trim().toLowerCase(),
    subject: "New GetHyre waitlist signup",
    from_name: "GetHyre Waitlist",
    source,
  };

  const role = targetRole?.trim().slice(0, 200);
  if (role) fields.target_role = role;

  await postToWeb3Forms({
    accessKey: process.env.NEXT_PUBLIC_W3F_KEY,
    fields,
  });
}
