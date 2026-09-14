export const APP_URL = "https://app.gethyre.ai";

export const productLinks = [
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
  {
    href: "/mock-interviews",
    label: "AI Mock Interviews",
    blurb: "Role-specific practice with scoring across communication, content and clarity.",
  },
  {
    href: "/career-plan",
    label: "Career Plan",
    blurb: "A week-by-week plan built from your target role and your real skill gaps.",
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
  { label: "Jobs", value: 71 },
  { label: "Interview", value: 74 },
];

export const plans = {
  free: {
    name: "Free",
    price: "₹0",
    cadence: "/month",
    tagline: "Everything you need to find out where you stand.",
    features: [
      "5 resume generations per month",
      "3 AI mock interviews per month",
      "Job match scoring",
      "Employability Score with full breakdown",
      "Visible usage meter — always know what's left",
    ],
  },
  pro: {
    name: "Pro",
    price: "₹299",
    cadence: "/month",
    tagline: "For students in the middle of an active job hunt.",
    features: [
      "Unlimited resume optimisations",
      "Unlimited AI mock interviews",
      "Advanced AI skill insights",
      "Career Planner access",
      "Everything in Free",
    ],
  },
};
