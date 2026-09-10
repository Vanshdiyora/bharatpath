This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Structure

```text
bharatpath/
├─ .git/
├─ .gitignore
├─ .next/
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
├─ node_modules/
│
├─ app/
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
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
│  └─ login/
│     └─ page.tsx
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
│     ├─ avatar.tsx
│     ├─ bar-chart.tsx
│     ├─ button.tsx
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
│     └─ ...
│
├─ config/
│  ├─ api.ts
│  ├─ navigation.ts
│  └─ portal.ts
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
│  │  │  │  ├─ metric-card.tsx
│  │  │  │  ├─ recent-activity.tsx
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
│  │  │  │  └─ college-users.tsx
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
│  │  ├─ dashboard/
│  │  │  ├─ components/
│  │  │  │  ├─ employer-dashboard.tsx
│  │  │  │  ├─ metric-card.tsx
│  │  │  │  ├─ recent-activity.tsx
│  │  │  │  └─ score-distribution.tsx
│  │  │  ├─ hooks/
│  │  │  │  └─ use-dashboard.ts
│  │  │  ├─ services/
│  │  │  │  └─ dashboard.service.ts
│  │  │  └─ types.ts
│  │  └─ ...
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
│     ├─ types/
│     │  └─ notification.types.ts
│     └─ ...
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
│  ├─ college/
│  │  ├─ analytics/
│  │  ├─ dashboard/
│  │  ├─ settings/
│  │  └─ students/
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
│  ├─ hooks.ts
│  ├─ index.ts
│  └─ provider.tsx
│
└─ types/
   └─ common.ts
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
