import type { Metadata } from "next";
import {
  FeatureHero,
  BenefitGrid,
  SplitBlock,
  WaitlistCta,
} from "@/components/sections/FeaturePage";
import { BrowserFrame } from "@/components/ui/DeviceFrame";
import { CareerPlanCard, SkillGapTable } from "@/components/mockups/CareerPlan";

export const metadata: Metadata = {
  title: "Career Plan",
  description:
    "Set a target role, timeline and current level, and get an AI-generated week-by-week plan across skills, resume and interview prep — built on a real skill gap analysis.",
};

export default function CareerPlanPage() {
  return (
    <>
      <FeatureHero
        eyebrow="Career Plan & Skill Gap"
        title={
          <>
            A plan for the next four months,{" "}
            <span className="brand-gradient-text">not a list of advice.</span>
          </>
        }
        body="Tell GetHyre the role you want, how long you have, and where you're starting from. You get a week-by-week plan across skills, resume and interview prep — tracked to completion, so you can see whether you're actually moving."
        visual={
          <BrowserFrame label="app.gethyre.ai/career-plan">
            <CareerPlanCard />
          </BrowserFrame>
        }
      />

      <BenefitGrid
        eyebrow="How the plan is built"
        title="Three inputs, one plan that fits your actual situation"
        benefits={[
          {
            title: "Target role",
            body: "The job you're working towards. Every skill requirement in your plan is derived from it.",
          },
          {
            title: "Timeline",
            body: "2, 4 or 6 months, or a full year. The plan's intensity adjusts to the time you really have.",
          },
          {
            title: "Current level",
            body: "Beginner, Intermediate or Advanced — so you don't get told to start where you already are.",
          },
          {
            title: "Tracked weekly",
            body: "Each week's tasks are checked off as you finish them, and your progress feeds your Employability Score.",
          },
        ]}
      />

      <SplitBlock
        eyebrow="Skill Gap Analysis"
        title="Required versus current, for every skill that matters"
        body="A plain table showing what your target role demands against where you stand today, with each gap tagged High, Medium or Low. The high-gap skills become the first weeks of your plan, paired with recommended courses."
        points={[
          "Every skill tagged High, Medium or Low gap",
          "High-gap skills lead the learning plan",
          "Course recommendations mapped to the specific gaps",
        ]}
        reverse
        visual={
          <div className="rounded-2xl border border-zinc-200 shadow-[0_25px_60px_-35px_rgba(11,11,18,0.5)]">
            <SkillGapTable />
          </div>
        }
      />

      <WaitlistCta
        title="Stop wondering what to study next."
        body="GetHyre is in private beta. Join the waitlist for your invite."
      />
    </>
  );
}
