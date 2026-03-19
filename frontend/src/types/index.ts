/* ------------------------------------------------------------------ */
/*  Shared TypeScript types — mirrors the Django REST API contracts    */
/* ------------------------------------------------------------------ */

export interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
}

/* ---- Accounts ---------------------------------------------------- */

export type UserRole = "admin" | "staff" | "volunteer" | "donor";

export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  role: UserRole;
  phone: string;
  bio: string;
  profile_image: string | null;
  date_joined: string;
}

/* ---- Projects ---------------------------------------------------- */

export type ProjectStatus = "planned" | "ongoing" | "completed" | "suspended";

export interface ProjectCategory {
  id: number;
  slug: string;
  label: string;
  order: number;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  location: string;
  is_featured?: boolean;
  category: ProjectCategory | null;
  start_date: string;
  end_date: string | null;
  status: ProjectStatus;
  impact_metrics: Record<string, number | string>;
  featured_image: string | null;
  created_by: string | null;
  created_at: string;
  updated_at: string;
}

/* ---- Events ------------------------------------------------------ */

export interface Event {
  id: number;
  name: string;
  slug: string;
  description: string;
  venue: string;
  date: string;
  end_date: string | null;
  registration_link: string;
  capacity: number;
  featured_image: string | null;
  is_published: boolean;
  created_by: string | null;
  created_at: string;
  updated_at: string;
}

/* ---- Blog -------------------------------------------------------- */

export interface PostSummary {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  author: string | null;
  featured_image: string | null;
  published_date: string | null;
}

export interface Post extends PostSummary {
  content: string;
  status: "draft" | "published";
  created_at: string;
  updated_at: string;
}

/* ---- Team / Leadership -------------------------------------------- */

export interface TeamMemberStat {
  value: string;
  label: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  credentials: string;
  bio: string;
  education: string;
  experience: string;
  focus_areas: string;
  stats: TeamMemberStat[];
  image: string | null;
  is_featured: boolean;
  order: number;
  linkedin_url: string;
  twitter_url: string;
  email: string;
}

/* ---- Gallery ----------------------------------------------------- */

export interface GalleryImage {
  id: number;
  image: string;
  caption: string;
  project: number | null;
  project_title: string | null;
  is_featured: boolean;
  uploaded_at: string;
}

/* ---- Volunteers -------------------------------------------------- */

export type Availability = "weekdays" | "weekends" | "both" | "flexible";

export interface VolunteerApplication {
  full_name: string;
  email: string;
  phone: string;
  skills: string;
  availability: Availability;
  notes: string;
}

export interface Volunteer extends VolunteerApplication {
  id: number;
  user: number | null;
  approved_status: "pending" | "approved" | "rejected";
  created_at: string;
  updated_at: string;
}

/* ---- Donations --------------------------------------------------- */

export interface Donation {
  id: number;
  donor_name: string;
  email: string;
  amount: string;
  currency: "KES" | "USD" | "EUR" | "GBP";
  payment_status: "pending" | "completed" | "failed" | "refunded";
  transaction_reference: string | null;
  project: number | null;
  notes: string;
  created_at: string;
  updated_at: string;
}
