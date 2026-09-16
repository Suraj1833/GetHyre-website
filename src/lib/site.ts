// Store search URLs, so the links resolve before the listings are live.
// Swap each for the direct listing URL once the apps are published.
export const PLAY_STORE_URL = "https://play.google.com/store/search?q=GetHyre&c=apps";
export const APP_STORE_URL = "https://apps.apple.com/search?term=GetHyre";

export function resolveStoreUrl(userAgent: string) {
  if (/iPhone|iPad|iPod|Macintosh/i.test(userAgent)) return APP_STORE_URL;
  return PLAY_STORE_URL;
}

export const productLinks = [
  {
    href: "/career-plan",
    label: "Career Plan",
    blurb: "A week-by-week plan built from your target role and your real skill gaps.",
  },
  {
    href: "/mock-interviews",
    label: "AI Mock Interviews",
    blurb: "Role-specific practice with scoring across communication, content and clarity.",
  },
  {
    href: "/resume-optimizer",
    label: "Resume Optimizer",
    blurb: "ATS score, AI rewrites per job description, keep or skip every edit.",
  },
  {
    href: "/job-match",
    label: "Job Match",
    blurb: "A jobs feed where every listing carries an AI match score for your profile.",
  },
];

export const footerColumns = [
  {
    title: "Product",
    links: [
      ...productLinks.map(({ href, label }) => ({ href, label })),
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/waitlist", label: "Join the waitlist" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms & Conditions" },
    ],
  },
];

export const scoreBreakdown = [
  { label: "Resume", value: 78 },
  { label: "Profile", value: 84 },
  { label: "Skills", value: 65 },
  { label: "Courses", value: 59 },
  { label: "Role fit", value: 71 },
  { label: "Interview", value: 74 },
];

export const plans = {
  free: {
    name: "Free",
    price: "$0",
    cadence: "/month",
    tagline: "Find out where you stand",
    features: [
      "Employability Score",
      "Job match scoring",
      "Basic ATS scoring and fixes",
      "Limited resume optimisations",
      "Limited mock interviews",
    ],
  },
  pro: {
    name: "GetHyre+",
    price: "$10",
    cadence: "/month",
    tagline: "For an active job hunt",
    features: [
      "1,000 monthly credits",
      "Extended mock interviews",
      "Extended resume optimisations",
      "Advanced AI skill insights",
      "Full access to Career Plan",
    ],
  },
};
