import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms of use for GetHyre.ai. Placeholder structure pending legal review.",
};

const sections: LegalSection[] = [
  {
    heading: "Acceptance of terms",
    body: "Placeholder. State that creating an account or using the service constitutes acceptance of these terms, and note any minimum age requirement.",
  },
  {
    heading: "Description of the service",
    body: "Placeholder. Describe GetHyre as an AI career preparation platform providing an Employability Score, resume optimisation, job match scoring, mock interviews, career planning and skill gap analysis.",
  },
  {
    heading: "Beta status",
    body: "Placeholder. Note that the service is in private beta, that features may change or be withdrawn, and that availability is not guaranteed during this period.",
  },
  {
    heading: "Accounts and eligibility",
    body: "Placeholder. Cover account registration, accuracy of information, credential security and responsibility for activity under an account.",
  },
  {
    heading: "Acceptable use",
    body: "Placeholder. Prohibit misuse including uploading content the user has no rights to, attempting to reverse engineer the service, automated scraping and abusive behaviour.",
  },
  {
    heading: "Your content",
    body: "Placeholder. Confirm that users retain ownership of resumes and other uploaded content, and define the limited licence granted to GetHyre to process it in order to deliver the service.",
  },
  {
    heading: "AI-generated output",
    body: "Placeholder. Clarify that scores, rewrites, match percentages, feedback and plans are AI-generated guidance, not guarantees of employment or interview outcomes, and that users are responsible for reviewing content before use.",
  },
  {
    heading: "Subscriptions and payment",
    body: "Placeholder. Set out Free and Pro plan terms, the ₹299/month Pro price, billing cycle, cancellation, and refund policy.",
  },
  {
    heading: "Termination",
    body: "Placeholder. Describe when either party may terminate an account and what happens to stored data afterwards.",
  },
  {
    heading: "Limitation of liability",
    body: "Placeholder. Standard limitation of liability and disclaimer of warranties, subject to applicable Indian law.",
  },
  {
    heading: "Governing law",
    body: "Placeholder. Specify the governing law and the jurisdiction for disputes.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="Not yet published"
      intro="These terms govern your use of GetHyre.ai. The sections below are placeholders showing the intended structure — final legal text is pending."
      sections={sections}
    />
  );
}
