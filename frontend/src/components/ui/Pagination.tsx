"use client";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface Props {
  page: number;
  hasNext: boolean;
  hasPrev: boolean;
  onPageChange: (page: number) => void;
}

export default function Pagination({ page, hasNext, hasPrev, onPageChange }: Props) {
  if (!hasNext && !hasPrev) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      <button
        disabled={!hasPrev}
        onClick={() => onPageChange(page - 1)}
        className="flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm font-medium text-secondary transition-colors hover:bg-sage hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
      >
        <HiChevronLeft /> Previous
      </button>
      <span className="text-sm font-semibold text-charcoal">Page {page}</span>
      <button
        disabled={!hasNext}
        onClick={() => onPageChange(page + 1)}
        className="flex items-center gap-1 rounded-full border border-border px-4 py-2 text-sm font-medium text-secondary transition-colors hover:bg-sage hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next <HiChevronRight />
      </button>
    </div>
  );
}
