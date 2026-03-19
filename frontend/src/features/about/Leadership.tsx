"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getMediaUrl } from "@/lib/media";
import { useTeamMembers } from "@/hooks/useTeam";
import type { TeamMember } from "@/types";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaEnvelope,
  FaX,
  FaArrowRight,
  FaChevronRight,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
} from "react-icons/fa6";
import SectionTitle from "@/components/ui/SectionTitle";
import EmptyState from "@/components/ui/EmptyState";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop";
const FALLBACK_AVATAR =
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop";

export default function Leadership() {
  const { data: members, isLoading } = useTeamMembers();
  const leaders = Array.isArray(members) ? members : [];
  const [activeProfile, setActiveProfile] = useState<TeamMember | null>(null);

  const minister = leaders.find((l) => l.is_featured);
  const executiveTeam = leaders
    .filter((l) => !l.is_featured)
    .sort((a, b) => a.order - b.order);

  const closeModal = useCallback(() => {
    setActiveProfile(null);
    document.body.style.overflow = "";
  }, []);

  const openModal = useCallback((leader: TeamMember) => {
    setActiveProfile(leader);
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [closeModal]);

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

  if (leaders.length === 0) {
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
        {minister && (
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-border bg-white shadow-lg"
            >
              <div className="flex flex-col lg:flex-row">
                <div className="relative h-80 shrink-0 overflow-hidden lg:h-auto lg:w-2/5">
                  <img
                    src={
                      minister.image
                        ? getMediaUrl(minister.image)
                        : FALLBACK_IMAGE
                    }
                    alt={minister.name}
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
                      {minister.position}
                    </span>
                    <h3 className="mb-1 text-2xl font-extrabold sm:text-3xl">
                      {minister.name}
                    </h3>
                    {minister.credentials && (
                      <span className="mb-4 block text-sm text-stone-400">
                        {minister.credentials}
                      </span>
                    )}
                    <p className="mb-6 leading-relaxed text-stone-300">
                      {minister.bio}
                    </p>
                    {Array.isArray(minister.stats) && minister.stats.length > 0 && (
                      <div className="mb-6 flex gap-8">
                        {minister.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <span className="block text-2xl font-bold text-primary-light">
                              {stat.value}
                            </span>
                            <span className="text-xs text-stone-400">
                              {stat.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="mb-6 flex gap-4">
                      {minister.linkedin_url && (
                        <a
                          href={minister.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-600 text-stone-400 transition-colors hover:border-primary-light hover:text-primary-light"
                        >
                          <FaLinkedinIn className="text-sm" />
                        </a>
                      )}
                      {minister.twitter_url && (
                        <a
                          href={minister.twitter_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Twitter"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-600 text-stone-400 transition-colors hover:border-primary-light hover:text-primary-light"
                        >
                          <FaXTwitter className="text-sm" />
                        </a>
                      )}
                      {minister.email && (
                        <a
                          href={`mailto:${minister.email}`}
                          aria-label="Email"
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-600 text-stone-400 transition-colors hover:border-primary-light hover:text-primary-light"
                        >
                          <FaEnvelope className="text-sm" />
                        </a>
                      )}
                    </div>
                    <button
                      onClick={() => openModal(minister)}
                      className="inline-flex items-center gap-2 rounded-full bg-primary-light px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"
                    >
                      View Full Profile <FaArrowRight className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Executive Team */}
        {executiveTeam.length > 0 && (
          <>
            <div className="mb-10">
              <h3 className="text-xl font-bold text-charcoal">
                Executive Leadership Team
              </h3>
              <div className="mt-2 h-1 w-16 rounded-full bg-primary" />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {executiveTeam.map((leader, index) => (
                <motion.div
                  key={leader.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="relative h-56 overflow-hidden bg-muted">
                    <img
                      src={
                        leader.image
                          ? getMediaUrl(leader.image)
                          : FALLBACK_AVATAR
                      }
                      alt={leader.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = FALLBACK_AVATAR;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="absolute bottom-3 left-3 right-3 flex justify-center gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                      {leader.linkedin_url && (
                        <a
                          href={leader.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-primary transition-colors hover:bg-primary hover:text-white"
                        >
                          <FaLinkedinIn className="text-sm" />
                        </a>
                      )}
                      {leader.email && (
                        <a
                          href={`mailto:${leader.email}`}
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
                      {leader.position}
                    </span>
                    <h4 className="mb-2 text-lg font-bold text-charcoal">
                      {leader.name}
                    </h4>
                    <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-secondary">
                      {leader.bio}
                    </p>
                    <button
                      onClick={() => openModal(leader)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                    >
                      View Profile <FaChevronRight className="text-xs" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Profile Modal */}
      <AnimatePresence>
        {activeProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/80 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-charcoal transition-colors hover:bg-muted"
              >
                <FaX />
              </button>
              <div className="flex max-h-[90vh] flex-col overflow-y-auto sm:flex-row">
                <div className="relative h-64 shrink-0 sm:h-auto sm:w-2/5">
                  <img
                    src={
                      activeProfile.image
                        ? getMediaUrl(activeProfile.image)
                        : FALLBACK_IMAGE
                    }
                    alt={activeProfile.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_IMAGE;
                    }}
                  />
                </div>
                <div className="flex-1 space-y-4 p-6 sm:p-8">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    {activeProfile.position}
                  </span>
                  <h2 className="text-2xl font-extrabold text-charcoal">
                    {activeProfile.name}
                  </h2>
                  {activeProfile.credentials && (
                    <p className="text-sm text-secondary">
                      {activeProfile.credentials}
                    </p>
                  )}
                  <div className="prose prose-sm max-w-none text-secondary">
                    {activeProfile.bio}
                  </div>
                  <div className="space-y-3">
                    {activeProfile.education && (
                      <div className="flex gap-3">
                        <FaGraduationCap className="mt-0.5 shrink-0 text-primary" />
                        <div>
                          <span className="block text-xs font-semibold uppercase text-secondary">
                            Education
                          </span>
                          <span className="text-sm">
                            {activeProfile.education}
                          </span>
                        </div>
                      </div>
                    )}
                    {activeProfile.experience && (
                      <div className="flex gap-3">
                        <FaBriefcase className="mt-0.5 shrink-0 text-primary" />
                        <div>
                          <span className="block text-xs font-semibold uppercase text-secondary">
                            Experience
                          </span>
                          <span className="text-sm">
                            {activeProfile.experience}
                          </span>
                        </div>
                      </div>
                    )}
                    {activeProfile.focus_areas && (
                      <div className="flex gap-3">
                        <FaAward className="mt-0.5 shrink-0 text-primary" />
                        <div>
                          <span className="block text-xs font-semibold uppercase text-secondary">
                            Focus Areas
                          </span>
                          <span className="text-sm">
                            {activeProfile.focus_areas}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-3 pt-2">
                    {activeProfile.linkedin_url && (
                      <a
                        href={activeProfile.linkedin_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:border-primary hover:text-primary"
                      >
                        <FaLinkedinIn className="text-sm" />
                      </a>
                    )}
                    {activeProfile.twitter_url && (
                      <a
                        href={activeProfile.twitter_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:border-primary hover:text-primary"
                      >
                        <FaXTwitter className="text-sm" />
                      </a>
                    )}
                    {activeProfile.email && (
                      <a
                        href={`mailto:${activeProfile.email}`}
                        aria-label="Email"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:border-primary hover:text-primary"
                      >
                        <FaEnvelope className="text-sm" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
