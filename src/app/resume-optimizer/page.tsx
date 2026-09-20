import type { Metadata } from "next";
import {
  FeatureHero,
  BenefitGrid,
  SplitBlock,
  WaitlistCta,
} from "@/components/sections/FeaturePage";
import { BrowserFrame } from "@/components/ui/DeviceFrame";
import {
  AtsScoreCard,
  SuggestedEditCard,
} from "@/components/mockups/ResumeAts";

export const metadata: Metadata = {
  title: "Resume Optimizer",
  description:
    "Get an ATS score out of 100 broken down by keywords, formatting, length, skills match and contact info, plus AI rewrites you approve edit by edit.",
};

export default function ResumeOptimizerPage() {
  return (
    <>
      <FeatureHero
        eyebrow="Resume Optimizer"
        title={
          <>
            Your resume, scored the way{" "}
            <span className="brand-gradient-text">an ATS reads it.</span>
          </>
        }
        body="Upload your resume and GetHyre scores it out of 100, flags exactly which sections are weak and rewrites the content against the job you're actually applying to."
        visual={
          <BrowserFrame className="w-full">
            <AtsScoreCard>
              <SuggestedEditCard embedded />
            </AtsScoreCard>
          </BrowserFrame>
        }
      />

      <BenefitGrid
        eyebrow="ATS Score"
        title="Five checks that decide whether a human ever sees your resume"
        body="Each one is flagged Good, Needs Work or Missing, with a plain-English fix list rather than a vague grade."
        benefits={[
          {
            title: "Keywords",
            body: "See which keywords from the job description are missing, and where to add them naturally.",
          },
          {
            title: "Formatting",
            body: "Catch the layout choices that break automated parsers before they cost you a shortlist.",
          },
          {
            title: "Length",
            body: "Check whether your resume runs to the right length for how much experience you actually have.",
          },
          {
            title: "Skills Match",
            body: "See which skills the role requires that your resume never mentions.",
          },
          {
            title: "Contact Info",
            body: "Flags a missing LinkedIn, phone or email before a recruiter has no way to reach you.",
          },
        ]}
      />

      <SplitBlock
        eyebrow="AI Rewriting"
        title="AI suggests. You decide. Nothing is overwritten."
        body="GetHyre rewrites bullet points to match the job description, turning vague duties into specific, measurable achievements. Every suggestion appears side by side with your original, and you keep or skip each one individually."
        points={[
          "Keep or skip each edit, never a silent overwrite",
          "Rewrites target the exact job description you paste in",
          "Full version history, so you can always go back",
        ]}
        visual={
          <div className="mx-auto w-full max-w-sm">
            <SuggestedEditCard />
          </div>
        }
      />

      <SplitBlock
        eyebrow="Resume Match %"
        title="A match score for every job you apply to"
        body="Paste a job description and get a Resume Match % showing how closely your resume lines up before you hit submit, then fix the gap while it still matters."
        reverse
        points={[
          "Compare one resume against many job descriptions",
          "Track the score climbing as you apply each suggested edit",
          "Keep a separate tailored version per application",
        ]}
        visual={
          <BrowserFrame label="gethyre.ai/resume">
            <AtsScoreCard />
          </BrowserFrame>
        }
      />

      <WaitlistCta
        title="Fix your resume before the next application, not after the rejection."
        body="GetHyre is in private beta. Join the waitlist for your invite."
      />
    </>
  );
}
