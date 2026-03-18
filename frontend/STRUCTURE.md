# Break the Silence — Frontend Structure

## Config

Edit `src/config/site.ts` to customize:
- **founderImageUrl** — Set `NEXT_PUBLIC_FOUNDER_IMAGE` in `.env` for founder photo
- **partners** — Add partner names, logo URLs, and hrefs
- **defaultTestimonials** — Static fallback when API is unavailable

## Folder Structure

```
frontend/src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout, SEO metadata
│   ├── page.tsx                  # Home page
│   ├── globals.css               # Tailwind theme, base styles
│   ├── about/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── contact/page.tsx
│   ├── donate/page.tsx
│   ├── events/page.tsx
│   ├── gallery/page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── volunteer/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/                       # Reusable UI components
│       ├── BlogCard.tsx
│       ├── CTABanner.tsx
│       ├── EmptyState.tsx
│       ├── EventCard.tsx
│       ├── FilterBar.tsx
│       ├── FormField.tsx
│       ├── ImpactCounter.tsx
│       ├── Pagination.tsx
│       ├── ProjectCard.tsx
│       ├── SectionTitle.tsx
│       └── Skeleton.tsx
│
├── features/
│   └── home/
│       ├── Hero.tsx
│       ├── ImpactStats.tsx
│       ├── FounderStory.tsx
│       ├── ProgramAreas.tsx
│       ├── FeaturedProjects.tsx
│       ├── Testimonies.tsx
│       └── PartnersLogos.tsx
│
├── hooks/
│   ├── useEvents.ts
│   ├── useGallery.ts
│   ├── usePosts.ts
│   └── useProjects.ts
│
├── config/
│   └── site.ts                   # Founder image, partners, default testimonials
│
├── lib/
│   ├── api.ts                    # Axios instance
│   └── animations.ts             # Framer Motion presets
│
├── providers/
│   └── QueryProvider.tsx
│
├── services/                     # API service layer
│   ├── blog.ts
│   ├── events.ts
│   ├── gallery.ts
│   ├── projects.ts
│   └── volunteers.ts
│
└── types/
    └── index.ts
```

---

## Home Page Sections (in order)

1. **Hero** — Emotional advocacy message, CTAs (Volunteer, Donate, Projects)
2. **ImpactStats** — Key metrics (girls reached, champions trained, programs, survivors)
3. **FounderStory** — Authentic narrative, link to About
4. **ProgramAreas** — Primary (GBV, advocacy, empowerment) + Secondary (climate, skills, employment)
5. **FeaturedProjects** — Dynamic from API
6. **Testimonies** — Community voices
7. **CTABanner** — Volunteer / Donate
8. **PartnersLogos** — Partner placeholders

---

## Component Examples

### SectionTitle (reusable)

```tsx
<SectionTitle
  title="Our Program Areas"
  subtitle="From GBV prevention to climate innovation."
  centered={true}
/>
```

### CTABanner

```tsx
<CTABanner
  title="Ready to Make a Difference?"
  description="Volunteer, donate, or spread the word."
  buttonText="Volunteer Now"
  buttonHref="/volunteer"
  variant="primary"  // or "accent"
/>
```

### ImpactCounter

```tsx
<ImpactCounter value={5000} label="Young Girls Reached" suffix="+" />
```

---

## API Service Layer

All services use the shared `api` instance from `lib/api.ts` (Axios with JWT interceptor).

| Service      | Functions                    | Endpoint pattern      |
|-------------|------------------------------|------------------------|
| `projects.ts` | `fetchProjects`, `fetchProjectBySlug` | `/projects/`, `/projects/{slug}/` |
| `events.ts`   | `fetchEvents`, `fetchEventBySlug`     | `/events/`, `/events/{slug}/`     |
| `blog.ts`     | `fetchPosts`, `fetchPostBySlug`      | `/blog/`, `/blog/{slug}/`        |
| `gallery.ts`  | `fetchGallery`                       | `/gallery/`                       |
| `volunteers.ts` | `submitVolunteer`                    | POST `/volunteers/`               |

**Pattern:** Each service exports async functions that return typed data. Hooks (`useProjects`, `useEvents`, etc.) wrap these with TanStack Query.

---

## Tailwind Theme Customization

Defined in `globals.css` via `@theme inline`:

| Token        | Hex       | Usage                          |
|-------------|-----------|---------------------------------|
| `primary`   | `#5B21B6` | Advocacy purple, CTAs          |
| `primary-light` | `#7C3AED` | Hover states                |
| `primary-dark`  | `#4C1D95` | Hero gradient, emphasis     |
| `terracotta` | `#C2410C` | Secondary accent, climate     |
| `terracotta-light` | `#EA580C` | Highlights             |
| `sage`      | `#ECFDF5` | Soft backgrounds               |
| `charcoal`  | `#1C1917` | Text, dark sections           |
| `secondary` | `#78716C` | Muted text                     |

---

## Animation Strategy

Centralized in `lib/animations.ts`:

- **fadeInUp** — Standard reveal for headings
- **fadeIn** — Simple opacity
- **staggerContainer** / **staggerItem** — Sequential list animations
- **viewportOnce** — Trigger once when in view

All animations use Framer Motion with `ease: [0.22, 1, 0.36, 1]` for smooth, professional motion. Respect `prefers-reduced-motion` where applicable.

---

## SEO Metadata Strategy

- **Keywords:** gender-based violence prevention, GBV awareness, youth empowerment, women empowerment, sexual violence advocacy, girls protection, community education, gender justice
- **Default title:** "Break the Silence — GBV Prevention, Youth & Women Empowerment"
- **Template:** `%s | Break the Silence` for page-specific titles
- **Open Graph** and **Twitter** cards configured
- Add page-specific `metadata` exports in each route for deeper SEO
