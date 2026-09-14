import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How GetHyre.ai handles your data. Placeholder structure pending legal review.",
};

const sections: LegalSection[] = [
  {
    heading: "Information we collect",
    body: "Placeholder. Describe the data collected at signup and in use: email address, resume content and uploaded files, target role and career preferences, mock interview recordings and transcripts, and usage data.",
  },
  {
    heading: "How we use your information",
    body: "Placeholder. Explain that data is used to generate the Employability Score, ATS analysis, job match scores, interview feedback and career plans, and to operate and improve the service.",
  },
  {
    heading: "AI processing",
    body: "Placeholder. State which AI processing happens on user content (resume rewriting, job match scoring, interview scoring, career plan and skill gap generation), whether third-party model providers are involved, and whether user content is used for model training.",
  },
  {
    heading: "Data sharing and third parties",
    body: "Placeholder. List any processors used for hosting, analytics, email delivery and payments, and confirm that personal data is not sold.",
  },
  {
    heading: "Data retention",
    body: "Placeholder. State how long resumes, interview recordings, transcripts and account data are retained, and what happens after account deletion.",
  },
  {
    heading: "Your rights",
    body: "Placeholder. Cover access, correction, deletion and export rights, and the process for exercising them. Confirm the applicable Indian data protection obligations.",
  },
  {
    heading: "Security",
    body: "Placeholder. Describe the safeguards protecting stored resumes, recordings and account credentials.",
  },
  {
    heading: "Changes to this policy",
    body: "Placeholder. Explain how users will be notified of material changes to this policy.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="Not yet published"
      intro="This page describes how GetHyre.ai collects, uses and protects your information. The sections below are placeholders showing the intended structure, and the final legal text is pending."
      sections={sections}
    />
  );
}
