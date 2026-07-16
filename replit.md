# Smart Portfolio

A high-fidelity, premium developer portfolio showcasing distributed systems, backend achievements, and frontend design systems.

## Run & Operate

- `pnpm run dev` — Run the Vite development server (port 5000)
- `pnpm run typecheck` — Run TypeScript type checking on the frontend code
- `pnpm run build` — Build the production bundle of the portfolio (outputs to `artifacts/portfolio/dist/public`)

## Stack

- pnpm workspaces, Vite, React, TypeScript 5.9
- UI & Styling: Tailwind CSS, Framer Motion, Lucide React, Shadcn UI, Radix UI

## Project Structure

- `artifacts/portfolio` — Core frontend React application
  - `src/components` — Portfolio section components (Hero, Tech Arsenal, Achievements, Contact, Systems Design)
  - `src/pages` — Frontend routes and page views (Home page, Not Found page)
  - `src/index.css` — Global styles, design variables, and glassmorphism styling
  - `vite.config.ts` — Vite build and dev server config
