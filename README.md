# Kasparro - AI-Native SEO & Brand Intelligence Platform

A production-grade frontend for an AI SEO platform that monitors and optimizes brand visibility in AI-generated responses across ChatGPT, Claude, Gemini, and other LLMs.

## Architecture Overview

```
src/
├── app/                    # Next.js App Router - routing + layout shells only
│   ├── (dashboard)/        # Dashboard route group with shared layout
│   │   ├── dashboard/      # Main metrics dashboard
│   │   ├── audit/          # Module audit view with sidebar + details
│   │   └── architecture/   # System architecture visualization
│   ├── about/              # Mission & product philosophy
│   ├── platform/           # How it works - pipeline + modules
│   └── page.tsx            # Landing page
├── components/
│   ├── layout/             # Layout shells (DashboardShell, AppSidebar, PageContainer)
│   ├── features/           # Feature components (MetricCard, AuditSidebar, ModuleDetails)
│   └── ui/                 # Primitives from shadcn/ui (Button, Card, Badge, etc.)
├── data/                   # Typed JSON datasets - single source of truth
├── store/                  # Zustand global state
└── types/                  # TypeScript interfaces for all domain models
```

## Data Flow

```
JSON Data (/data/*.json)
       ↓
Type Validation (/types/index.ts)
       ↓
Zustand Store (/store/index.ts) ← Global selections (brandId, moduleId)
       ↓
Feature Components (/components/features/)
       ↓
Layout Components (/components/layout/)
       ↓
Page Routes (/app/)
```

### Key Principle: UI Components Never Own Data

- All audit data lives in `/data` as JSON
- Components receive typed data via props or read from Zustand store
- No hard-coded content in JSX
- State flows down, selections flow through Zustand

## Component Architecture

### Three-Layer System

1. **UI Primitives** (`/components/ui/`)

   - Button, Card, Badge, Table, Tabs, etc.
   - Zero business logic
   - shadcn/ui components

2. **Feature Components** (`/components/features/`)

   - `MetricCard` - Dashboard metric display with trend indicators
   - `AuditSidebar` - Module list with status/score indicators
   - `ModuleDetails` - Insights, issues, recommendations view
   - `ArchitectureDiagram` - System block visualization
   - `BrandSelector` - Brand picker dropdown

3. **Layout Components** (`/components/layout/`)
   - `DashboardShell` - Main dashboard wrapper with sidebar + header
   - `AppSidebar` - Navigation sidebar
   - `PageContainer` - Centered content wrapper

## State Management

Using Zustand for minimal, focused global state:

```typescript
interface KasparroStore {
	selectedBrandId: string | null;
	selectedModuleId: string | null;
	setSelectedBrandId: (id: string | null) => void;
	setSelectedModuleId: (id: string | null) => void;
}
```

### Why Zustand?

- No prop drilling for selection state
- Components read directly from store
- Actions are colocated with state
- Zero boilerplate compared to Redux

## Type System

All data conforms to strict TypeScript interfaces:

```typescript
// Core Domain Types
Brand; // Company/website being audited
AuditModule; // Analysis module (visibility, trust, content, etc.)
AuditResult; // Module output with score, insights, issues, recommendations
Insight; // Positive/neutral/negative observation
Issue; // Problem with severity and status
Recommendation; // Action item with priority and effort estimate

// UI Types
DashboardMetric; // Card metric with trend data
SystemBlock; // Architecture diagram block
PipelineStage; // Platform page pipeline step
```

## Design Decisions & Tradeoffs

### JSON Data Instead of API

**Decision:** Mock data in JSON files instead of API calls
**Why:**

- Demonstrates data-driven architecture
- Easy to swap with real API later (same interfaces)
- No backend dependency for frontend development
  **Tradeoff:** No real-time data, manual updates needed

### Zustand Over Context

**Decision:** Zustand for global state instead of React Context
**Why:**

- Simpler API, less boilerplate
- Better performance (no unnecessary re-renders)
- Actions colocated with state
  **Tradeoff:** Additional dependency

### Route Groups for Dashboard

**Decision:** Using `(dashboard)` route group
**Why:**

- Shared sidebar/header across dashboard pages
- Clean URL structure (/dashboard, /audit, /architecture)
- Easy to add more dashboard routes
  **Tradeoff:** Slightly more complex folder structure

### Component Granularity

**Decision:** Medium-sized feature components rather than atomic
**Why:**

- Balance between reusability and practicality
- Reduces prop drilling
- Easier to understand data flow
  **Tradeoff:** Some duplication possible if components diverge
  ## Bonus Features Implemented
  ### Loading States & Skeletons
  - **Simulated API**: Added `lib/api.ts` to mimic async network requests with a 1s delay.
  - **Suspense Boundaries**: Implemented `loading.tsx` for both Dashboard and Audit pages.
  - **Skeletons**: Used `animate-pulse` skeletons for a polished loading experience, ensuring the UI doesn't jump when data arrives.

## Running the Project

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **State:** Zustand
- **Animations:** Framer Motion (subtle only)

## Test: Data Swappability

The architecture is designed so that swapping JSON with real API data requires:

1. Replace JSON imports with API calls (fetch/SWR/React Query)
2. Ensure response matches TypeScript interfaces
3. **Zero changes to components**

If you can't swap data sources without changing UI components, the architecture is wrong.
