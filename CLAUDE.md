# CLAUDE.md — 201web

## Project Overview

**201web** is a single-page marketing/portfolio website for a Brazilian web development agency. It is built with Next.js (Pages Router) and TypeScript, and is entirely frontend-focused — there is no database, no authentication, and no meaningful backend.

Content and comments in the codebase are written in **Portuguese**.

---

## Development Commands

Use **Yarn** as the package manager (a `yarn.lock` is present — do not use npm).

```bash
yarn dev      # Start dev server at http://localhost:3000
yarn build    # Production build
yarn start    # Start production server
yarn lint     # Run ESLint (next/core-web-vitals)
```

There is no test runner configured.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 13.1.6 (Pages Router) |
| Language | TypeScript 4.9 (strict mode) |
| UI library | Chakra UI 2.4.9 |
| CSS-in-JS | Emotion (via Chakra UI) |
| Animations | Framer Motion 9 |
| Typewriter effect | react-type-animation 2.1.2 |
| Fonts | Poppins, Josefin Sans (Google Fonts, loaded in `_document.tsx`) |

> **Note:** This project uses the **Pages Router**, not the App Router. Do not introduce App Router patterns (`app/` directory, `layout.tsx`, server components, etc.).

---

## Directory Structure

```
src/
  components/
    about/              # Team member cards
    aboutCompany/       # Company description section
    footer/             # Site footer
    header/             # Navigation header
    mainContent/        # Hero/landing section and feature blocks
    method/             # 4-step methodology section
    patterns/           # Reusable primitive components
  pages/
    index.tsx           # Main (and only) page — composes all sections
    _app.tsx            # Chakra UI provider, global styles
    _document.tsx       # HTML document, Google Fonts loading
    api/hello.ts        # Unused example API route
  styles/
    globals.css         # CSS custom properties, keyframe animations
    theme/index.ts      # Chakra UI custom theme (breakpoints, colors, fonts)
public/
  Icons/                # SVG / icon assets
  Images/               # Section/feature images
```

---

## Responsive Design Pattern

Each major section has **two component variants**:

- Desktop: `ComponentName.tsx`
- Mobile: `ComponentNameMob.tsx`

`src/pages/index.tsx` uses `useBreakpointValue` to select which variant to render:

```ts
const versionMob = useBreakpointValue({ base: true, sm: true, md: false, lg: false, xlg: false });
// renders <ComponentMob /> when true, <Component /> when false
```

Custom breakpoints (defined in `src/styles/theme/index.ts`):

| Name | Value |
|---|---|
| `base` | 0px |
| `sm` | 480px |
| `md` | 1024px |
| `lg` | 1360px |
| `xlg` | 1920px |

---

## Conventions

### Components
- **PascalCase** filenames: `AboutBox.tsx`, `FooterContainer.tsx`
- Mobile variants append `Mob`: `AboutBoxMob.tsx`, `FooterContainerMob.tsx`
- Primary layout primitive is Chakra UI's `<Flex>` (flexbox-based)
- Props are typed with inline TypeScript interfaces or named types

### Path Alias
`@/*` resolves to `./src/*` (configured in `tsconfig.json`):
```ts
import HeaderComponent from "@/components/header/HeaderComponent";
```

### Animations
- Scroll-triggered animations use Framer Motion `useAnimation` controls combined with the browser's `IntersectionObserver` API
- Animation variants (initial/animate states) are defined per-component and triggered inside `useEffect`

### Theme Tokens (`src/styles/theme/index.ts`)
| Token | Value |
|---|---|
| `blue` | `#657EFF` |
| `black` | `#151932` |
| `gray` | `#676566` |
| `white` | `#ffffff` |
| Background | `#F1EFEF` (page bg) |

Text styles: `Light` (200), `Regular` (400), `Bold` (700), `JBold` (700), `JLight` (500) — all Poppins.

---

## What Does NOT Exist

- No test framework (Jest, Vitest, React Testing Library, etc.)
- No CI/CD configuration (.github/workflows/, etc.)
- No database or ORM
- No `.env` files or environment variables
- No form submission backend (contact info is static text)
- No App Router (`app/` directory)

---

## Git Workflow

- Remote: `http://local_proxy@127.0.0.1:34515/git/MuriloCordeiro/201web`
- AI-generated feature branches must follow: `claude/<description>-<sessionId>`
- Always push with: `git push -u origin <branch-name>`
