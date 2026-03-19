"use client";

import { motion } from "framer-motion";
import { getMediaUrl } from "@/lib/media";
import { useTeamMembers } from "@/hooks/useTeam";
import type { TeamMember } from "@/types";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
} from "react-icons/fa6";
import SectionTitle from "@/components/ui/SectionTitle";
import EmptyState from "@/components/ui/EmptyState";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop";

function FeaturedLeader({ member }: { member: TeamMember }) {
  const imageUrl = member.image ? getMediaUrl(member.image) : FALLBACK_IMAGE;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-2xl border border-border bg-white shadow-lg"
    >
      <div className="flex flex-col lg:flex-row">
        <div className="relative h-80 shrink-0 overflow-hidden lg:h-auto lg:w-2/5">
          <img
            src={imageUrl}
            alt={member.name}
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.src = FALLBACK_IMAGE;
            }}
          />
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-primary/30 to-transparent" />
        </div>
        <div className="flex flex-1 flex-col justify-between bg-primary-dark p-8 text-white">
          <div>
            <span className="mb-3 inline-block rounded-full bg-primary/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              {member.position}
            </span>
            <h3 className="mb-1 text-2xl font-extrabold sm:text-3xl">
              {member.name}
            </h3>
            {member.credentials && (
              <span className="mb-4 block text-sm text-stone-400">
                {member.credentials}
              </span>
            )}
            <p className="mb-6 leading-relaxed text-stone-300">
              {member.bio}
            </p>
            <div className="flex gap-6">
              {member.linkedin_url && (
                <a
                  href={member.linkedin_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-600 text-stone-400 transition-colors hover:border-primary-light hover:text-primary-light"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
              )}
              {member.twitter_url && (
                <a
                  href={member.twitter_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-600 text-stone-400 transition-colors hover:border-primary-light hover:text-primary-light"
                >
                  <FaXTwitter className="text-sm" />
                </a>
              )}
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  aria-label="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-600 text-stone-400 transition-colors hover:border-primary-light hover:text-primary-light"
                >
                  <FaEnvelope className="text-sm" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function LeaderCard({ member, index }: { member: TeamMember; index: number }) {
  const imageUrl = member.image ? getMediaUrl(member.image) : FALLBACK_IMAGE;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 * index }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative h-56 overflow-hidden bg-muted">
        <img
          src={imageUrl}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute bottom-3 left-3 right-3 flex justify-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          {member.linkedin_url && (
            <a
              href={member.linkedin_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <FaLinkedinIn className="text-sm" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary transition-colors hover:bg-primary hover:text-white"
            >
              <FaEnvelope className="text-sm" />
            </a>
          )}
        </div>
      </div>
      <div className="p-5">
        <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-primary">
          {member.position}
        </span>
        <h4 className="mb-2 text-lg font-bold text-charcoal">{member.name}</h4>
        <p className="line-clamp-3 text-sm leading-relaxed text-secondary">
          {member.bio}
        </p>
      </div>
    </motion.div>
  );
}

export default function Leadership() {
  const { data: members, isLoading } = useTeamMembers();
  const allMembers = members ?? [];
  const featured = allMembers.find((m) => m.is_featured);
  const teamMembers = allMembers
    .filter((m) => !m.is_featured)
    .sort((a, b) => a.order - b.order);

  if (isLoading) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="Leadership"
            subtitle="Meet the dedicated leaders driving our mission."
          />
          <div className="animate-pulse space-y-8">
            <div className="h-80 rounded-2xl bg-muted" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-72 rounded-2xl bg-muted" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (allMembers.length === 0) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="Leadership"
            subtitle="Meet the dedicated leaders driving our mission."
          />
          <EmptyState message="No team members added yet. Add leadership in the admin." />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20" id="leadership">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionTitle
          title="Leadership"
          subtitle="Meet the dedicated leaders driving our mission to end gender-based violence and empower youth."
        />

        {/* Featured Leader */}
        {featured && (
          <div className="mb-16">
            <FeaturedLeader member={featured} />
          </div>
        )}

        {/* Executive Team */}
        {teamMembers.length > 0 && (
          <>
            <div className="mb-10">
              <h3 className="text-xl font-bold text-charcoal">
                Executive Leadership Team
              </h3>
              <div className="mt-2 h-1 w-16 rounded-full bg-primary" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <LeaderCard key={member.id} member={member} index={index} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
