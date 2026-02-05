import {
  Eye,
  Shield,
  TrendingUp,
  Settings,
  Radar,
  Brain,
  Zap,
  Bot,
  BarChart3,
  LucideIcon,
} from "lucide-react";

export interface ModuleData {
  code: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  features: string[];
}

export interface PipelineStep {
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FeatureCard {
  icon: LucideIcon;
  title: string;
  bullets: string[];
}

export const modules: ModuleData[] = [
  {
    code: "VIS",
    icon: Eye,
    title: "Visibility Index",
    tagline: "Know where you stand",
    features: ["Cross-platform tracking", "Query coverage mapping", "Mention frequency analysis"],
  },
  {
    code: "TRS",
    icon: Shield,
    title: "Trust Score",
    tagline: "Build AI credibility",
    features: ["Citation accuracy audit", "Source authority ranking", "Fact-check validation"],
  },
  {
    code: "CTX",
    icon: Brain,
    title: "Context Engine",
    tagline: "Shape the narrative",
    features: ["Semantic positioning", "Entity relationship mapping", "Sentiment analysis"],
  },
  {
    code: "TCH",
    icon: Settings,
    title: "Technical Audit",
    tagline: "Remove AI blockers",
    features: ["Crawler accessibility", "Schema validation", "Structured data check"],
  },
  {
    code: "CMP",
    icon: Radar,
    title: "Competitive Radar",
    tagline: "Outpace rivals",
    features: ["Share of voice tracking", "Gap analysis", "Benchmark reports"],
  },
  {
    code: "OPT",
    icon: TrendingUp,
    title: "Optimization Lab",
    tagline: "Actionable playbooks",
    features: ["Priority recommendations", "Impact scoring", "Implementation guides"],
  },
];

export const pipelineSteps: PipelineStep[] = [
  {
    icon: Zap,
    label: "Connect",
    title: "Link Your Brand",
    description: "Connect your domain and define your brand identity, competitors, and target keywords in under 5 minutes.",
  },
  {
    icon: Bot,
    label: "Discover",
    title: "AI Crawls Everything",
    description: "Our agents query ChatGPT, Claude, Gemini, and Perplexity to find every mention of your brand.",
  },
  {
    icon: BarChart3,
    label: "Analyze",
    title: "Run Deep Audits",
    description: "Six specialized modules score your visibility, trust, context, technical health, and competitive position.",
  },
  {
    icon: Eye,
    label: "Act",
    title: "Get Your Playbook",
    description: "Receive prioritized recommendations with impact scores and step-by-step implementation guides.",
  },
];

export const stats: Stat[] = [
  { value: "78%", label: "Visibility Score" },
  { value: "92%", label: "Trust Score" },
  { value: "234", label: "Keywords Tracked" },
  { value: "18%", label: "Share of Voice" },
];

export const features: FeatureCard[] = [
  {
    icon: Eye,
    title: "See Everything",
    bullets: [
      "Track mentions across ChatGPT, Claude, Gemini & Perplexity",
      "Monitor thousands of queries in real-time",
      "Know exactly when AI talks about you",
    ],
  },
  {
    icon: Shield,
    title: "Protect Your Brand",
    bullets: [
      "Catch misinformation before it spreads",
      "Verify AI represents you accurately",
      "Flag outdated or incorrect citations",
    ],
  },
  {
    icon: TrendingUp,
    title: "Win AI Search",
    bullets: [
      "Get actionable optimization playbooks",
      "Outrank competitors in AI recommendations",
      "Turn AI into your best sales channel",
    ],
  },
];
