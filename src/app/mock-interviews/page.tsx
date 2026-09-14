import type { Metadata } from "next";
import {
  FeatureHero,
  BenefitGrid,
  SplitBlock,
  WaitlistCta,
} from "@/components/sections/FeaturePage";
import { BrowserFrame } from "@/components/ui/DeviceFrame";
import {
  InterviewResultsCard,
  QuestionBreakdown,
} from "@/components/mockups/InterviewResults";

export const metadata: Metadata = {
  title: "AI Mock Interviews",
  description:
    "Practise role-specific interviews by text or recording, and get scored on communication, content, confidence, clarity and relevance with full transcripts.",
};

export default function MockInterviewsPage() {
  return (
    <>
      <FeatureHero
        eyebrow="AI Mock Interviews"
        title={
          <>
            Practise the interview{" "}
            <span className="brand-gradient-text">before it counts.</span>
          </>
        }
        body="Most students walk into their first interview having never said their answers out loud. Practise with role-specific questions, by text or recording, and get scored feedback on what actually went wrong."
        visual={
          <div className="relative">
            <BrowserFrame label="app.gethyre.ai/interviews">
              <InterviewResultsCard />
            </BrowserFrame>
            <div className="absolute -bottom-10 -right-2 w-56 sm:-right-8 sm:w-64">
              <QuestionBreakdown />
            </div>
          </div>
        }
      />

      <BenefitGrid
        eyebrow="Scoring"
        title="Five dimensions, so feedback is specific enough to act on"
        body="&quot;Be more confident&quot; helps nobody. You get a score on each dimension plus a Strengths and Improve summary after every session."
        benefits={[
          {
            title: "Communication & Clarity",
            body: "How clearly you structure an answer, and whether filler words are burying your point.",
          },
          {
            title: "Content",
            body: "Whether your answer has real substance — specifics, numbers, outcomes — or just describes duties.",
          },
          {
            title: "Confidence",
            body: "How assured your delivery reads, measured consistently across every session so you can see it improve.",
          },
          {
            title: "Relevance",
            body: "Whether you actually answered the question asked, or drifted into a rehearsed story.",
          },
        ]}
      />

      <SplitBlock
        eyebrow="Question by question"
        title="See exactly which answer let you down"
        body="An overall score tells you how it went. The per-question breakdown tells you what to practise next — with the full transcript of every answer saved, so you can reread what you actually said instead of what you remember saying."
        points={[
          "Text or recorded practice, whichever you'll actually do",
          "Role-specific question sets, not generic filler",
          "Transcripts saved for every answer",
        ]}
        visual={
          <div className="flex flex-col items-center gap-6">
            <div className="w-full max-w-sm">
              <QuestionBreakdown />
            </div>
            <BrowserFrame className="w-full">
              <InterviewResultsCard />
            </BrowserFrame>
          </div>
        }
      />

      <WaitlistCta
        title="Get the bad interview out of the way in private."
        body="GetHyre is in private beta. Join the waitlist for your invite."
      />
    </>
  );
}
