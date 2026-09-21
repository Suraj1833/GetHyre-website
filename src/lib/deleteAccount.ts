import { postToWeb3Forms } from "@/lib/web3forms";

export async function submitDeletionRequest({
  email,
  reason,
  improvement,
  wouldReturn,
}: {
  email: string;
  reason?: string;
  improvement?: string;
  wouldReturn?: string;
}) {
  const fields: Record<string, string> = {
    email: email.trim().toLowerCase(),
    subject: "Account deletion request",
    from_name: "GetHyre Deletion",
    source: "delete-account-page",
  };

  // Every follow-up question is optional, so only send the ones answered.
  const reasonValue = reason?.trim();
  if (reasonValue) fields.reason = reasonValue;

  const improvementValue = improvement?.trim().slice(0, 1000);
  if (improvementValue) fields.improvement = improvementValue;

  const wouldReturnValue = wouldReturn?.trim();
  if (wouldReturnValue) fields.would_return = wouldReturnValue;

  await postToWeb3Forms({
    accessKey: process.env.NEXT_PUBLIC_W3F_DELETE_KEY,
    fields,
  });
}
