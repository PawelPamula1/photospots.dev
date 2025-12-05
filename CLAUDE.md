# CLAUDE.md - PhotoSpots Waitlist Website

## Project Overview

PhotoSpots.dev.pl is a modern Next.js 15 landing page and waitlist website for PhotoSpots - a mobile application that helps travelers discover and share photography locations. This website serves as the primary marketing and user acquisition tool, collecting waitlist signups via MailerLite and featuring an admin panel for moderating user-submitted photo spots.

**Project Type:** Marketing Website + Waitlist + Admin Panel
**Primary Purpose:** User acquisition, waitlist management, content moderation
**Live URL:** photospots.dev.pl

---

## Tech Stack

### Core Framework
- **Next.js 15.3.5** with App Router architecture
- **React 19.0.0** (latest stable)
- **TypeScript 5** with strict mode enabled
- **Node.js 20+** runtime requirement

### Styling & UI
- **Tailwind CSS 4** (latest version with new PostCSS plugin)
- **shadcn/ui** components (Radix UI primitives, "New York" style variant)
- **Lucide React 0.525.0** for icons
- **class-variance-authority** + **clsx** + **tailwind-merge** for component variants

### Internationalization
- **next-intl 4.3.4** for comprehensive i18n support
- Supports: English (default) and Polish
- Locale-based routing with `/[locale]` pattern

### External Services
- **PostHog 1.260.2** - Privacy-friendly analytics (EU-hosted: eu.i.posthog.com)
- **MailerLite API** - Email marketing and waitlist management
- **Cloudinary** - Image hosting and optimization
- **Backend API** - Custom Express.js API (see spotshot-api CLAUDE.md)

---

## Project Structure

```
photospots.dev.pl/
├── src/
│   ├── app/
│   │   └── [locale]/              # Internationalized routing (en, pl)
│   │       ├── admin/             # Admin moderation panel
│   │       ├── sections/          # Landing page sections
│   │       ├── components/        # Shared page components
│   │       ├── confirmed/         # Email confirmation page
│   │       ├── delete-account/    # Account deletion page
│   │       ├── privacy/           # Privacy policy
│   │       ├── terms/             # Terms of service
│   │       ├── layout.tsx         # Locale-specific layout
│   │       ├── page.tsx           # Home page
│   │       └── globals.css        # Global styles + Tailwind
│   ├── components/ui/             # shadcn/ui components
│   ├── i18n/                      # i18n configuration
│   ├── lib/                       # Utility functions
│   └── middleware.ts              # Next.js middleware for i18n routing
├── messages/
│   ├── en.json                    # English translations
│   └── pl.json                    # Polish translations
└── public/                        # Static assets (images)
```

### Key Directories Explained

**`src/app/[locale]/sections/`** - Landing page sections (Hero, Problem, AboutApp, HowItWorks, JoinCTA)
**`src/app/[locale]/admin/`** - Complete admin panel with hooks and components for content moderation
**`src/components/ui/`** - Base UI components from shadcn (copied into project, not npm package)
**`messages/`** - JSON translation files organized by feature
**`public/`** - Optimized images for hero, how-it-works, about sections

---

## Architecture & Patterns

### App Router Architecture
- **File-based routing** with Next.js 15 App Router
- **Dynamic locale routing** using `[locale]` parameter (en, pl)
- **Server Components by default**, Client Components marked with `"use client"`
- **Layout composition** for consistent structure across pages

### Component Organization
1. **Page Sections** (`/sections`) - Large page blocks for landing page
2. **Shared Components** (`/components`) - Reusable across pages (JoinButton, LocaleSwitcher)
3. **Feature Components** (`/admin/components`) - Scoped to specific features
4. **UI Primitives** (`/components/ui`) - Base design system components (shadcn)

### Custom Hooks Pattern
- **useAdminHooks.ts** - Encapsulates all admin panel business logic
  - State management
  - API communication
  - Data fetching
  - Returns clean interface for components
  - Separates logic from presentation

### Data Flow
- **API Communication** via native fetch API
- **No global state library** - React useState for local state
- **Optimistic updates** - UI updates immediately on user actions
- **No caching** - Uses `cache: "no-store"` for fresh data

---

## Internationalization (i18n)

### Configuration
```typescript
// Supported locales
locales: ["en", "pl"]
defaultLocale: "en"
```

### Implementation
- **Middleware** in `src/middleware.ts` handles locale detection and routing
- **Server and Client** translation support via next-intl
- **Translation files** in `/messages/en.json` and `/messages/pl.json`

### Usage Patterns

**Client Components:**
```typescript
import { useTranslations } from "next-intl";

const t = useTranslations("HomePage");
t("title") // Access translation
```

**Rich Text with Components:**
```typescript
t.rich("consent", {
  terms: (chunks) => <a href="/terms">{chunks}</a>,
  privacy: (chunks) => <a href="/privacy">{chunks}</a>
})
```

**Locale Switching:**
- LocaleSwitcher component in header
- Uses custom Select component with Radix UI
- Navigation helpers preserve locale across routes

### Translation Structure
Translations are organized by feature:
- HomePage
- JoinForm (waitlist signup)
- Problem
- AboutApp
- HowItWorks
- JoinCTA
- Privacy
- Terms

---

## Key Features

### 1. Landing Page
- **Hero Section** - Full-screen hero with responsive images and CTA
- **Problem Statement** - Explains the pain point (finding photo spots while traveling)
- **About App** - Describes PhotoSpots application
- **How It Works** - 5-step visual guide with app screenshots
- **Join CTA** - Waitlist signup form with email collection
- **Footer** - Links to Terms, Privacy, and attribution

### 2. Waitlist System
- Email collection via **MailerLite API**
- GDPR-compliant consent checkbox
- PostHog event tracking on signup
- Success/error handling with user feedback
- Email confirmation flow

### 3. Admin Moderation Panel (`/admin`)
- View pending photo spots awaiting approval
- Filter by country, city, and limit
- Approve or reject submitted spots
- View spot details (name, location, description, author)
- Google Maps integration for location verification
- Real-time updates with optimistic UI
- Skeleton loading states

### 4. Legal Pages
- Comprehensive Privacy Policy with GDPR compliance
- Terms of Service with safety disclaimers
- Both fully internationalized (EN, PL)

---

## Styling Approach

### Tailwind CSS 4
- **CSS Variables** for theme customization in `globals.css`
- **Custom theme** with design tokens (colors, radii, shadows)
- **Dark mode support** with `.dark` class (CSS variables switch)
- **Utility-first** approach with inline Tailwind classes
- **PostCSS 4** using new `@tailwindcss/postcss` plugin

### Design System
- **Colors**: Custom color scheme using oklch color space
  - Light mode: Clean whites and neutrals
  - Dark mode: Deep blues and grays (#0b0f12, #011e49)
- **Typography**: Geist Sans font family
- **Shadows**: Custom shadow-xs utility
- **Border Radius**: Consistent 0.625rem

### Component Styling
- **shadcn/ui** components with Radix UI primitives
- **cn() utility** (`lib/utils.ts`) - Merges Tailwind classes intelligently
- **tw-animate-css** for animation utilities
- **Responsive design** - Mobile-first with breakpoints (md, lg)

---

## API Integration

### Backend API
```typescript
// Environment variable
NEXT_PUBLIC_API_URL=http://localhost:3000 // Defaults to localhost:3000
```

### Endpoints Used
```typescript
// Moderation
GET  /api/moderation/pending      // Fetch pending spots with filters
PUT  /api/moderation/accept/:id   // Approve a spot
DELETE /api/moderation/reject/:id // Reject a spot
```

### Data Types
```typescript
type Author = {
  id: string;
  username: string;
  avatar_url?: string | null;
}

type Spot = {
  id: string;
  name: string;
  city: string;
  country: string;
  image: string;
  description: string;
  latitude: number;
  longitude: number;
  photo_tips?: string | null;
  accepted: boolean;
  created_at: string;
  author_id: string | null;
  author?: Author | null;
}
```

### API Communication Pattern
```typescript
// Example from useAdminHooks.ts
const fetchSpots = async () => {
  const response = await fetch(`${API_URL}/api/moderation/pending?...`, {
    cache: "no-store"
  });
  const data = await response.json();
  // Handle response
}
```

---

## Environment Variables

### Required Variables
```bash
# MailerLite Integration
NEXT_PUBLIC_MAILERLITE_API_KEY     # API authentication
NEXT_PUBLIC_MAILERLITE_GROUP_ID    # Subscriber group ID

# PostHog Analytics
NEXT_PUBLIC_POSTHOG_KEY            # PostHog project key
NEXT_PUBLIC_POSTHOG_HOST           # EU region hosting (eu.i.posthog.com)

# Backend API
NEXT_PUBLIC_API_URL                # API endpoint (default: http://localhost:3000)
```

---

## Development

### Scripts
```bash
npm run dev      # Start development server (port 3000)
npm run build    # Build production bundle
npm run start    # Start production server (port 3002)
npm run lint     # Run ESLint
```

### Development Server
- Runs on port 3000 by default
- Hot module replacement enabled
- Fast Refresh for instant updates

### Building for Production
- TypeScript compilation with strict mode
- Next.js optimization (image optimization, code splitting)
- ESLint errors ignored during builds (workaround)

---

## Configuration Files

### `next.config.ts`
- next-intl plugin integration
- Image domain whitelisting (res.cloudinary.com)
- Experimental features (viewTransitions API)
- Build configuration

### `tsconfig.json`
- TypeScript compiler options
- Path aliases: `@/*` maps to `./src/*`
- Strict mode enabled
- Target: ES2017

### `components.json`
- shadcn/ui configuration
- Style: "new-york"
- Component paths and aliases
- Icon library: lucide

### `postcss.config.mjs`
- Tailwind CSS 4 PostCSS plugin configuration

---

## Coding Conventions

### TypeScript
- **Strict mode enabled** - All types must be explicit
- **Interface over type** for object shapes (when possible)
- **Proper typing** - No `any` types unless absolutely necessary
- **Type imports** - Use `import type` for type-only imports

### React Components
- **Functional components** only (no class components)
- **"use client" directive** at top of file for client components
- **Server components by default** - Only mark as client when needed
- **Props interfaces** - Named `ComponentNameProps`

### File Naming
- **kebab-case** for files and folders (`user-profile.tsx`)
- **PascalCase** for React components (`UserProfile.tsx`)
- **camelCase** for utilities and hooks (`useAdminHooks.ts`)

### Component Structure
```typescript
"use client"; // If client component

import statements...

interface ComponentProps {
  // Props definition
}

export default function Component({ props }: ComponentProps) {
  // Hooks
  // Event handlers
  // Render logic

  return (
    <div>
      {/* JSX */}
    </div>
  );
}
```

### Styling
- **Tailwind classes inline** - No separate CSS files for components
- **Use cn() utility** for conditional classes
- **Mobile-first** - Base styles for mobile, then `md:` and `lg:` breakpoints
- **Semantic HTML** - Use proper HTML5 elements

---

## Important Notes

### Security
- **NEXT_PUBLIC_* variables** are exposed to the browser
- **MailerLite API key** is public (design choice, rate-limited by MailerLite)
- **GDPR compliance** - Consent checkbox required for waitlist
- **Admin panel** has no authentication (internal tool, should be protected)

### Performance
- **Image optimization** via Next.js Image component
- **Priority loading** for above-the-fold images
- **Lazy loading** for below-the-fold content
- **Responsive images** with `sizes` attribute

### Accessibility
- **Radix UI primitives** provide built-in accessibility
- **Semantic HTML** used throughout
- **Keyboard navigation** supported
- **Focus management** in interactive components

---

## Working with This Codebase

### Adding a New Landing Page Section
1. Create component in `src/app/[locale]/sections/NewSection.tsx`
2. Add translations to `messages/en.json` and `messages/pl.json`
3. Import and add to `src/app/[locale]/page.tsx`
4. Add images to `public/` if needed

### Adding a New Translation
1. Add key to `messages/en.json` and `messages/pl.json`
2. Use `useTranslations()` hook in component
3. Access with `t("your.key")`

### Adding a New shadcn Component
```bash
npx shadcn@latest add [component-name]
```
This copies the component into `src/components/ui/`

### Modifying the Admin Panel
- Business logic: `src/app/[locale]/admin/useAdminHooks.ts`
- UI components: `src/app/[locale]/admin/components/`
- Main page: `src/app/[locale]/admin/page.tsx`

---

## Common Patterns

### Fetching Data from API
```typescript
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch(`${API_URL}/api/endpoint`, {
        cache: "no-store"
      });
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
}, []);
```

### Using Translations
```typescript
import { useTranslations } from "next-intl";

const t = useTranslations("FeatureName");
return <h1>{t("title")}</h1>;
```

### Conditional Styling with cn()
```typescript
import { cn } from "@/lib/utils";

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  isDisabled && "disabled-classes"
)} />
```

---

## Testing

Currently, there are **no automated tests** in this project. Consider adding:
- Unit tests for utilities (Jest/Vitest)
- Component tests (React Testing Library)
- E2E tests for critical flows (Playwright/Cypress)

---

## Deployment

### Production Build
```bash
npm run build  # Creates optimized production build
npm run start  # Runs production server on port 3002
```

### Deployment Checklist
1. Set all environment variables in hosting platform
2. Ensure `NEXT_PUBLIC_API_URL` points to production API
3. Configure custom domain DNS
4. Enable HTTPS
5. Test all locale routes (en, pl)
6. Verify MailerLite integration
7. Check PostHog analytics tracking

---

## Related Documentation

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Tailwind CSS 4 Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [PostHog Documentation](https://posthog.com/docs)
- [MailerLite API Documentation](https://developers.mailerlite.com/)

---

## Troubleshooting

### Common Issues

**Build fails with ESLint errors:**
- ESLint errors are currently ignored during builds (next.config.ts)
- Run `npm run lint` to see all issues
- Fix critical issues before deploying

**Translations not showing:**
- Check locale is in supported locales (en, pl)
- Verify translation key exists in both en.json and pl.json
- Restart dev server after adding new translations

**Images not loading:**
- Verify image domain is whitelisted in next.config.ts
- Check image paths in public/ folder
- Use Next.js Image component for optimization

**Admin panel not showing spots:**
- Check NEXT_PUBLIC_API_URL is correct
- Verify backend API is running
- Open browser console for network errors

---

**Last Updated:** 2025-12-04
**Codebase Version:** Based on analysis of current state
**Maintained By:** Paul Pamula
