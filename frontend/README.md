# Break the Silence — Next.js Frontend

Production-ready frontend for the **Break the Silence** NGO website, built with Next.js (App Router), TypeScript, Tailwind CSS, TanStack Query, and Framer Motion.

Consumes the Django REST API backend at `/api/v1/`.

---

## Folder Structure

```
frontend/src/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (Navbar, Footer, QueryProvider)
│   ├── page.tsx                # Home page
│   ├── loading.tsx             # Global loading spinner
│   ├── error.tsx               # Global error boundary
│   ├── not-found.tsx           # 404 page
│   ├── about/page.tsx          # About page
│   ├── projects/
│   │   ├── page.tsx            # Projects listing with filters
│   │   └── [slug]/page.tsx     # Project detail (dynamic route)
│   ├── events/page.tsx         # Events listing
│   ├── blog/
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Blog detail (dynamic route)
│   ├── gallery/page.tsx        # Gallery masonry layout
│   ├── volunteer/page.tsx      # Volunteer application form
│   ├── contact/page.tsx        # Contact info + form
│   └── donate/page.tsx         # Donate page (UI only)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Responsive navbar with mobile menu
│   │   └── Footer.tsx          # Site-wide footer
│   └── ui/
│       ├── SectionTitle.tsx    # Animated section header
│       ├── ProjectCard.tsx     # Project card with status badge
│       ├── EventCard.tsx       # Event card with date/venue
│       ├── BlogCard.tsx        # Blog post card
│       ├── ImpactCounter.tsx   # Animated number counter
│       ├── CTABanner.tsx       # Call-to-action banner
│       ├── Skeleton.tsx        # Loading skeleton components
│       ├── EmptyState.tsx      # Empty results UI
│       ├── Pagination.tsx      # Page navigation
│       ├── FilterBar.tsx       # Search + dropdown filter
│       └── FormField.tsx       # Reusable form input/textarea/select
│
├── features/
│   └── home/
│       ├── Hero.tsx            # Hero section with CTA buttons
│       ├── ImpactStats.tsx     # Animated impact counters
│       ├── FeaturedProjects.tsx # Top 3 projects from API
│       └── MissionBanner.tsx   # Mission pillars cards
│
├── services/                   # API service functions
│   ├── projects.ts
│   ├── events.ts
│   ├── blog.ts
│   ├── gallery.ts
│   └── volunteers.ts
│
├── hooks/                      # React Query hooks
│   ├── useProjects.ts
│   ├── useEvents.ts
│   ├── usePosts.ts
│   └── useGallery.ts
│
├── types/index.ts              # Shared TypeScript interfaces
├── lib/api.ts                  # Centralized Axios instance
└── providers/QueryProvider.tsx # TanStack Query client provider
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- The Django backend running at `http://localhost:8000`

### 1. Install dependencies

```bash
cd frontend
npm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
# Edit .env.local if your API runs on a different URL
```

### 3. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm start
```

---

## Design Decisions

| Decision | Rationale |
|----------|-----------|
| **App Router** | Server/client component model, built-in layouts, loading states, and metadata API |
| **TanStack Query** | Automatic caching, deduplication, stale-while-revalidate — ideal for paginated API data |
| **Axios instance** | Centralized base URL, auth header injection, timeout handling |
| **Framer Motion** | Smooth scroll-reveal animations that feel professional without being heavy |
| **Tailwind v4 @theme** | CSS-first custom properties — no config file, cleaner DX |
| **Eco-green palette** | `#16A34A` primary grounded with warm earth tones — clean, trustworthy NGO aesthetic |
| **Slug-based routes** | SEO-friendly dynamic routes that match the Django API design |
| **Separate list/detail serializers** | BlogCard uses summary data; detail page loads full content only when needed |
| **CSS columns for gallery** | True masonry layout without JavaScript — performant and responsive |
| **Mobile-first** | All layouts start from small screens and progressively enhance |
| **Feature folders** | Page-specific components in `features/` keep the codebase organized as it grows |

---

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, impact stats, mission pillars, featured projects, CTA |
| About | `/about` | Mission, vision, values, story, team |
| Projects | `/projects` | Filterable project grid with pagination |
| Project Detail | `/projects/[slug]` | Full project with impact metrics |
| Events | `/events` | Searchable event listing |
| Blog | `/blog` | Searchable blog listing |
| Blog Detail | `/blog/[slug]` | Full article |
| Gallery | `/gallery` | Masonry image grid |
| Volunteer | `/volunteer` | Application form |
| Contact | `/contact` | Contact info + message form |
| Donate | `/donate` | Donation tiers (UI only) |
| 404 | any invalid route | Custom not-found page |
