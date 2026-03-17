"use client";

import { HiSearch } from "react-icons/hi";

interface FilterOption {
  value: string;
  label: string;
}

interface Props {
  search: string;
  onSearchChange: (val: string) => void;
  filterValue?: string;
  onFilterChange?: (val: string) => void;
  filterOptions?: FilterOption[];
  filterLabel?: string;
  placeholder?: string;
}

export default function FilterBar({
  search,
  onSearchChange,
  filterValue,
  onFilterChange,
  filterOptions,
  filterLabel = "Filter",
  placeholder = "Search...",
}: Props) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
      {/* Search */}
      <div className="relative flex-1">
        <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-full border border-border py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Dropdown filter */}
      {filterOptions && onFilterChange && (
        <select
          value={filterValue}
          onChange={(e) => onFilterChange(e.target.value)}
          className="rounded-full border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary"
          aria-label={filterLabel}
        >
          <option value="">All {filterLabel}</option>
          {filterOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
