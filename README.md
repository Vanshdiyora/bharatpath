# BharatPath

A Next.js application for BharatPath, structured around role-based portals for college and employer workflows.

## Project Structure

```text
bharatpath/
├─ .gitignore
├─ AGENTS.md
├─ CLAUDE.md
├─ README.md
├─ eslint.config.mjs
├─ middleware.ts
├─ next-env.d.ts
├─ next.config.ts
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ tsconfig.json
│
├─ app/
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  │
│  ├─ login/
│  │  └─ page.tsx
│  │
│  ├─ college/
│  │  ├─ analytics/
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ settings/
│  │  │  └─ page.tsx
│  │  └─ students/
│  │     └─ page.tsx
│  │
│  └─ employer/
│     ├─ applications/
│     │  └─ page.tsx
│     ├─ candidates/
│     │  └─ page.tsx
│     ├─ dashboard/
│     │  └─ page.tsx
│     ├─ jobs/
│     │  └─ page.tsx
│     ├─ layout.tsx
│     ├─ page.tsx
│     └─ settings/
│        └─ page.tsx
│
├─ assets/
│  └─ fonts/
│     ├─ GeneralSans-Bold.woff2
│     ├─ GeneralSans-Medium.woff2
│     ├─ GeneralSans-Regular.woff2
│     └─ GeneralSans-Semibold.woff2
│
├─ components/
│  ├─ auth/
│  │  └─ login-form.tsx
│  │
│  ├─ common/
│  │  └─ dashboard/
│  │     ├─ metric-card.tsx
│  │     └─ recent-activity.tsx
│  │
│  ├─ layout/
│  │  ├─ header-context.tsx
│  │  ├─ portal-header.tsx
│  │  ├─ portal-mobile-nav.tsx
│  │  ├─ portal-shell.tsx
│  │  └─ portal-sidebar.tsx
│  │
│  └─ ui/
│     ├─ app-select.tsx
│     ├─ avatar.tsx
│     ├─ bar-chart.tsx
│     ├─ button.tsx
│     ├─ dropdown.tsx
│     ├─ filter-pills.tsx
│     ├─ index.ts
│     ├─ link-state-badge.tsx
│     ├─ panel.tsx
│     ├─ progress-list.tsx
│     ├─ score-band-badge.tsx
│     ├─ search-input.tsx
│     ├─ select-dropdown.tsx
│     ├─ stat-card.tsx
│     ├─ status-badge.tsx
│     ├─ table.tsx
│     └─ tooltip.tsx
│
├─ config/
│  ├─ api.ts
│  ├─ navigation.ts
│  ├─ portal.ts
│  └─ employer/
│     ├─ constants.ts
│     └─ navigation.ts
│
├─ features/
│  ├─ auth/
│  │  ├─ hooks/
│  │  │  └─ use-auth.ts
│  │  ├─ schemas/
│  │  │  └─ login.schema.ts
│  │  ├─ services/
│  │  │  └─ auth.service.ts
│  │  └─ types.ts
│  │
│  ├─ college/
│  │  ├─ analytics/
│  │  │  ├─ components/
│  │  │  │  ├─ analytics-dashboard.tsx
│  │  │  │  ├─ index.ts
│  │  │  │  └─ outcomes-table.tsx
│  │  │  ├─ hooks/
│  │  │  │  └─ use-analytics.ts
│  │  │  ├─ services/
│  │  │  │  └─ analytics.service.ts
│  │  │  └─ types.ts
│  │  │
│  │  ├─ dashboard/
│  │  │  ├─ components/
│  │  │  │  ├─ college-dashboard.tsx
│  │  │  │  └─ score-distribution.tsx
│  │  │  ├─ hooks/
│  │  │  │  └─ use-dashboard.ts
│  │  │  ├─ services/
│  │  │  │  └─ dashboard.service.ts
│  │  │  └─ types.ts
│  │  │
│  │  ├─ settings/
│  │  │  ├─ components/
│  │  │  │  ├─ billing.tsx
│  │  │  │  ├─ college-profile.tsx
│  │  │  │  ├─ college-settings.tsx
│  │  │  │  ├─ college-users.tsx
│  │  │  │  └─ index.ts
│  │  │  ├─ hooks/
│  │  │  │  └─ use-settings.ts
│  │  │  ├─ services/
│  │  │  │  ├─ billing.service.ts
│  │  │  │  ├─ college.service.ts
│  │  │  │  └─ users.service.ts
│  │  │  └─ types.ts
│  │  │
│  │  └─ students/
│  │     ├─ components/
│  │     │  ├─ bulk-upload-card.tsx
│  │     │  ├─ index.ts
│  │     │  ├─ invite-student-modal.tsx
│  │     │  ├─ link-states-summary.tsx
│  │     │  ├─ student-actions.tsx
│  │     │  ├─ student-filters.tsx
│  │     │  ├─ student-roster.tsx
│  │     │  ├─ student-status-badge.tsx
│  │     │  └─ student-table.tsx
│  │     ├─ hooks/
│  │     │  └─ use-students.ts
│  │     ├─ schemas/
│  │     │  └─ students.schema.ts
│  │     ├─ services/
│  │     │  └─ students.service.ts
│  │     └─ types.ts
│  │
│  ├─ employer/
│  │  ├─ applications/
│  │  │  ├─ components/
│  │  │  │  ├─ application-card.tsx
│  │  │  │  ├─ application-column.tsx
│  │  │  │  ├─ application-drawer.tsx
│  │  │  │  ├─ application-filter.tsx
│  │  │  │  ├─ application-pipeline.tsx
│  │  │  │  └─ applications-page-content.tsx
│  │  │  ├─ hooks/
│  │  │  │  └─ use-applications-page.ts
│  │  │  ├─ data.ts
│  │  │  ├─ index.ts
│  │  │  └─ types.ts
│  │  │
│  │  ├─ billing/
│  │  │  ├─ components/
│  │  │  │  ├─ buy-credits-modal.tsx
│  │  │  │  └─ credits-button.tsx
│  │  │  ├─ types.ts
│  │  │  └─ index.ts
│  │  │
│  │  ├─ candidates/
│  │  │  ├─ candidate-card.tsx
│  │  │  ├─ candidate-filters.tsx
│  │  │  ├─ candidate-unlock-dialog.tsx
│  │  │  ├─ candidates-page.tsx
│  │  │  ├─ data.ts
│  │  │  ├─ README.md
│  │  │  └─ types.ts
│  │  │
│  │  ├─ dashboard/
│  │  │  ├─ components/
│  │  │  │  ├─ dashboard-stats.tsx
│  │  │  │  ├─ employer-dashboard.tsx
│  │  │  │  ├─ employer-recent-activity.tsx
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ quick-actions.tsx
│  │  │  │  └─ top-jobs.tsx
│  │  │  ├─ hooks/
│  │  │  │  └─ use-dashboard.ts
│  │  │  ├─ services/
│  │  │  │  └─ dashboard.service.ts
│  │  │  └─ types.ts
│  │  │
│  │  ├─ jobs/
│  │  │  ├─ components/
│  │  │  │  ├─ index.ts
│  │  │  │  ├─ jobs-page.tsx
│  │  │  │  └─ jobs-table.tsx
│  │  │  ├─ data/
│  │  │  │  └─ jobs.data.ts
│  │  │  ├─ index.ts
│  │  │  └─ types.ts
│  │  │
│  │  └─ settings/
│  │     ├─ components/
│  │     │  ├─ account-tab.tsx
│  │     │  ├─ add-payment-method-modal.tsx
│  │     │  ├─ buy-credits-modal.tsx
│  │     │  ├─ company-tab.tsx
│  │     │  ├─ invite-member-modal.tsx
│  │     │  ├─ invoices-tab.tsx
│  │     │  ├─ payment-tab.tsx
│  │     │  ├─ settings-page.tsx
│  │     │  ├─ settings-tabs.tsx
│  │     │  ├─ subscription-tab.tsx
│  │     │  └─ team-tab.tsx
│  │     └─ index.ts
│  │
│  └─ notifications/
│     ├─ api/
│     │  └─ notification-api.ts
│     ├─ components/
│     │  ├─ notification-bell.tsx
│     │  ├─ notification-center.tsx
│     │  └─ notification-dropdown.tsx
│     ├─ index.ts
│     ├─ mock-notifications.ts
│     └─ types/
│        └─ notification.types.ts
│
├─ lib/
│  ├─ api/
│  │  ├─ client.ts
│  │  ├─ errors.ts
│  │  └─ types.ts
│  ├─ auth/
│  │  ├─ permissions.ts
│  │  ├─ roles.ts
│  │  └─ session.ts
│  └─ tenant/
│     ├─ resolver.ts
│     └─ types.ts
│
├─ public/
│  ├─ file.svg
│  ├─ globe.svg
│  ├─ next.svg
│  ├─ vercel.svg
│  └─ window.svg
│
├─ store/
│  ├─ api/
│  │  ├─ base-api.ts
│  │  └─ notification-api.ts
│  │
│  ├─ common/
│  │  ├─ selectors/
│  │  │  ├─ auth.selectors.ts
│  │  │  ├─ notification-selectors.ts
│  │  │  ├─ tenant.selectors.ts
│  │  │  └─ ui.selectors.ts
│  │  └─ slices/
│  │     ├─ auth.slice.ts
│  │     ├─ notification-slice.ts
│  │     ├─ tenant.slice.ts
│  │     └─ ui.slice.ts
│  │
│  ├─ college/
│  │  ├─ analytics/
│  │  ├─ dashboard/
│  │  ├─ settings/
│  │  └─ students/
│  │
│  ├─ employer/
│  │  ├─ applications/
│  │  ├─ billing/
│  │  ├─ candidates/
│  │  ├─ dashboard/
│  │  ├─ index.ts
│  │  ├─ jobs/
│  │  └─ settings/
│  │
│  ├─ hooks.ts
│  ├─ index.ts
│  └─ provider.tsx
│
├─ types/
│  ├─ common.ts
│  └─ employer/
│     ├─ application.ts
│     ├─ billing.ts
│     ├─ candidate.ts
│     ├─ dashboard.ts
│     └─ job.ts
│
└─ package.json
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser at http://localhost:3000

## Scripts

```bash
npm run dev     # start Next.js dev server
npm run build   # create production build
npm run start   # run production server
npm run lint    # run ESLint checks
```

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Redux Toolkit
- React Query
- Zod + React Hook Form

This project is organized into portal-specific feature modules for college and employer flows, with shared UI, config, API, and state-management layers.
