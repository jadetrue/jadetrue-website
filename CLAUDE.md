# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
```

No linting or test commands are configured.

## Architecture

**Next.js 15 personal portfolio/blog site using the Pages Router** (not App Router) with React 19, TypeScript, and Tailwind CSS v4.

### Blog System

Markdown files in `/posts/` with YAML frontmatter (`title`, `date`, `imageUrl`). The `/lib/posts.tsx` module reads posts from the filesystem. Pages are statically generated via `getStaticProps`/`getStaticPaths` at `/posts/[id]`.

### Key Directories

- `pages/` — Next.js Pages Router (index, blogs, resume, posts/[id])
- `components/` — React components including `Layout.tsx` (wraps all pages with nav, footer, dark mode) and `Typography/` (reusable Header/Body components with size/color/weight props)
- `lib/posts.tsx` — Blog post filesystem operations (getSortedPostsData, getPostData, getAllPostIds)
- `services/` — Utilities: date comparison, reading time calculation
- `styles/global.css` — Tailwind v4 imports (`@import 'tailwindcss'`) + custom CSS + Gistesy font-face
- `styles/fontawesome.ts` — FontAwesome icon library setup
- `public/fonts/` — Custom Gistesy display font

### Styling

Tailwind CSS v4 with `@tailwindcss/postcss` plugin. Dark mode uses class-based strategy (`dark:` prefix) stored in localStorage. Theme defines two custom colors (`primary: #1c2120`, `secondary: #fff`) and two font families (`display: Gistesy`, `body: Montserrat`). Blog content uses `@tailwindcss/typography` (`.prose` classes).

### TypeScript

Strict mode is **disabled** in tsconfig.json. Path aliases are not configured — imports use relative paths.

### Deployment

Deployed on Vercel. Uses `NEXT_PUBLIC_GOOGLE_ANALYTICS` environment variable.
