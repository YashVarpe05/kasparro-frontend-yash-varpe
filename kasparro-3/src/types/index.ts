// Core domain types for Kasparro AI SEO Platform

export interface Brand {
  id: string;
  name: string;
  domain: string;
  logoUrl?: string;
  industry: string;
  createdAt: string;
  lastAuditAt: string;
}

export interface AuditModule {
  id: string;
  name: string;
  description: string;
  category: 'visibility' | 'trust' | 'content' | 'technical' | 'competitive';
  icon: string;
  score: number;
  maxScore: number;
  status: 'healthy' | 'warning' | 'critical' | 'pending';
}

export interface AuditResult {
  id: string;
  brandId: string;
  moduleId: string;
  timestamp: string;
  score: number;
  previousScore: number;
  insights: Insight[];
  issues: Issue[];
  recommendations: Recommendation[];
}

export interface Insight {
  id: string;
  type: 'positive' | 'neutral' | 'negative';
  title: string;
  description: string;
  metric?: string;
  value?: string | number;
  trend?: 'up' | 'down' | 'stable';
}

export interface Issue {
  id: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  description: string;
  affectedArea: string;
  detectedAt: string;
  status: 'open' | 'in-progress' | 'resolved';
}

export interface Recommendation {
  id: string;
  priority: 'low' | 'medium' | 'high';
  title: string;
  description: string;
  impact: string;
  effort: 'low' | 'medium' | 'high';
  category: string;
}

// Dashboard specific types
export interface DashboardMetric {
  id: string;
  label: string;
  value: number | string;
  previousValue?: number | string;
  unit?: string;
  trend?: 'up' | 'down' | 'stable';
  changePercent?: number;
}

export interface DashboardData {
  brandId: string;
  metrics: DashboardMetric[];
  lastUpdated: string;
}

// Architecture diagram types
export interface SystemBlock {
  id: string;
  name: string;
  type: 'input' | 'context' | 'module' | 'output';
  description: string;
  subComponents?: string[];
  connections?: string[];
}

export interface ArchitectureData {
  blocks: SystemBlock[];
  dataFlow: Array<{
    from: string;
    to: string;
    label?: string;
  }>;
}

// Platform page types
export interface PipelineStage {
  id: string;
  name: string;
  description: string;
  inputs?: string[];
  outputs?: string[];
  icon: string;
}

export interface ModuleInfo {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  capabilities: string[];
  icon: string;
}
