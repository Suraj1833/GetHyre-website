import type { Metadata } from "next";
import {
  FeatureHero,
  BenefitGrid,
  SplitBlock,
  WaitlistCta,
} from "@/components/sections/FeaturePage";
import { PhoneFrame, BrowserFrame } from "@/components/ui/DeviceFrame";
import { JobMatchList } from "@/components/mockups/JobMatchList";
import { MatchScoreChip } from "@/components/mockups/ResumeAts";

export const metadata: Metadata = {
  title: "Job Match",
  description:
    "A Jobs For You feed where every listing carries an AI match score against your profile, with filters for location, job type, experience and date posted.",
};

export default function JobMatchPage() {
  return (
    <>
      <FeatureHero
        eyebrow="Job Match"
        title={
          <>
            Every job in your feed comes with{" "}
            <span className="brand-gradient-text">a match score.</span>
          </>
        }
        body="Applying to 200 jobs and hearing nothing back isn't a strategy. GetHyre scores each listing against your profile so you can tell a real fit from a long shot before you spend an evening on the application."
        visual={
          <div className="relative">
            <PhoneFrame>
              <JobMatchList />
            </PhoneFrame>
            <div className="absolute -bottom-6 left-0 hidden sm:block">
              <MatchScoreChip />
            </div>
          </div>
        }
      />

      <BenefitGrid
        eyebrow="Jobs For You"
        title="Built to be scanned in seconds, not studied"
        benefits={[
          {
            title: "AI match scoring",
            body: "Each listing is scored against your resume, skills and target role — not just keyword-matched.",
          },
          {
            title: "Colour-coded fit",
            body: "Green for a strong match, amber for a stretch. You know where to start without reading every post.",
          },
          {
            title: "Filters that matter",
            body: "Narrow by location, job type, experience level and date posted, so nothing stale clutters the feed.",
          },
          {
            title: "Ties into your resume",
            body: "Found a match worth chasing? Send it straight to the Resume Optimizer and tailor for that exact role.",
          },
        ]}
      />

      <SplitBlock
        eyebrow="Why it works"
        title="A high match score tells you where your effort pays off"
        body="A tailored application to a job you're an 85% fit for beats fifty generic ones. The score gives you a reason to spend your time on the right listings — and shows you what's missing on the ones you want but don't yet qualify for."
        points={[
          "Spot the roles where you're already competitive",
          "See which skills keep appearing in jobs just out of reach",
          "Feed those gaps straight into your Career Plan",
        ]}
        visual={
          <BrowserFrame label="app.gethyre.ai/jobs">
            <JobMatchList />
          </BrowserFrame>
        }
      />

      <WaitlistCta
        title="Apply to fewer jobs. Hear back from more of them."
        body="GetHyre is in private beta. Join the waitlist for your invite."
      />
    </>
  );
}
