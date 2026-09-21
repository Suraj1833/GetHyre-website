// Shared Web3Forms submitter. Forms post straight from the browser and
// Web3Forms emails each submission to the team inbox. Access keys are public
// by design, and each form passes its own.
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function postToWeb3Forms({
  accessKey,
  fields,
}: {
  accessKey: string | undefined;
  fields: Record<string, string>;
}) {
  if (!accessKey) {
    throw new Error("Web3Forms access key is not set.");
  }

  const res = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ access_key: accessKey, ...fields }),
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
