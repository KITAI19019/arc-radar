# Project Context

This project is a community radar chart website for Arcaea charts.

## Goal

Build a simple, elegant, and easy-to-use website that shows radar charts for Arcaea songs and charts.

The site is for a small community of around 200 users at first.

## Core Concepts

- Pack: a song pack.
- Song: a music track.
- Chart: one difficulty of one song, such as PST, PRS, FTR, ETR, or BYD.
- Radar score: community score for one chart.
- Revision: a proposed edit submitted by a community user.
- Comment: a user-written note about a chart.

Important: radar scores belong to charts, not only songs.

## MVP Pages

The first version should include:

1. Home page
2. Pack list
3. Pack detail page
4. Song detail page
5. Difficulty tabs
6. Radar chart
7. Search
8. Score revision proposal form
9. Simple admin moderation page

## Radar Dimensions

Each chart should have these radar dimensions:

- reading: reading and visual recognition difficulty
- technique: hand movement and input technique complexity
- rhythm: rhythm complexity
- burst: short high-density or explosive sections
- stamina: sustained difficulty over time
- accuracy: precision requirement
- fundamentals: general overall chart-handling ability

Scores use a 0–10 scale.

## MVP Rules

- Use demo data first.
- Do not import real data automatically.
- Do not use official Arcaea images, logos, UI, fonts, backgrounds, song jackets, or copyrighted assets.
- The UI may be inspired by futuristic rhythm-game aesthetics, but must be original.
- Community edits should not directly overwrite official displayed data.
- Users submit revision proposals.
- Admins approve or reject revisions.
- Keep the first version simple.

## Technical Direction

Preferred stack:

- TypeScript
- React, Astro, or Vite
- Tailwind CSS
- Cloudflare Pages or Workers
- Cloudflare D1
- GitHub PR workflow

Codex should always read this file before making changes.

## Development Style

Each Codex task should be small.

Do not ask Codex to build the whole website at once.

Each task should:

1. Do one thing.
2. Avoid unrelated refactoring.
3. Keep TypeScript types clear.
4. Add basic tests if appropriate.
5. Run build or typecheck.
6. Open a clear pull request.

## Current MVP Priority

Phase 1:

1. Initialize project.
2. Build homepage.
3. Build pack list.
4. Build pack detail page.
5. Build song detail page.
6. Add radar chart component.
7. Add search with demo data.

Phase 2:

1. Add Cloudflare D1 schema.
2. Add seed data.
3. Add API routes.
4. Add revision proposal form.
5. Add admin moderation.

Phase 3:

1. Small group testing.
2. Improve UI.
3. Add basic anti-spam.
4. Add better data aggregation.
