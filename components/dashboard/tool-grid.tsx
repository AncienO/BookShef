"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Tool } from "@/lib/types/database";
import ToolCard from "./tool-card";

interface ToolGridProps {
  tools: Tool[];
}

export default function ToolGrid({ tools }: ToolGridProps) {
  const [search, setSearch] = useState("");
  const [purposeFilter, setPurposeFilter] = useState("all");

  // Derive unique purposes from tools
  const purposes = useMemo(() => {
    const set = new Set<string>();
    tools.forEach((t) => { if (t.purpose) set.add(t.purpose); });
    return Array.from(set).sort();
  }, [tools]);

  const filtered = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        search === "" ||
        tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.description?.toLowerCase().includes(search.toLowerCase()) ||
        tool.url.toLowerCase().includes(search.toLowerCase());
      const matchesPurpose =
        purposeFilter === "all" || tool.purpose === purposeFilter;
      return matchesSearch && matchesPurpose;
    });
  }, [tools, search, purposeFilter]);

  return (
    <div>
      {/* Search + Filter bar */}
      {tools.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none"
            >
              <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
            </svg>
            <input
              type="text"
              placeholder="Search tools…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-500 focus:bg-white/8 transition-colors"
            />
          </div>
          {purposes.length > 0 && (
            <select
              value={purposeFilter}
              onChange={(e) => setPurposeFilter(e.target.value)}
              className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-500 transition-colors appearance-none cursor-pointer min-w-[160px]"
            >
              <option value="all">All purposes</option>
              {purposes.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          )}
        </div>
      )}

      {/* No search results */}
      {tools.length > 0 && filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-white/40 text-sm">No tools match your search.</p>
          <button
            onClick={() => { setSearch(""); setPurposeFilter("all"); }}
            className="mt-3 text-brand-400 text-sm hover:text-brand-300 transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Empty state (no tools at all) */}
      {tools.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white/30">
              <path d="M11.25 4.533A9.707 9.707 0 0 0 6 3a9.735 9.735 0 0 0-3.25.555.75.75 0 0 0-.5.707v14.25a.75.75 0 0 0 1 .707A8.237 8.237 0 0 1 6 18.75c1.995 0 3.823.707 5.25 1.886V4.533ZM12.75 20.636A8.214 8.214 0 0 1 18 18.75c.966 0 1.89.166 2.75.47a.75.75 0 0 0 1-.707V4.262a.75.75 0 0 0-.5-.707A9.735 9.735 0 0 0 18 3a9.707 9.707 0 0 0-5.25 1.533v16.103Z" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-white mb-1">Build your toolkit</h2>
          <p className="text-white/40 text-sm max-w-xs mb-6">
            Start adding the AI tools you use every day and organise them in one place.
          </p>
          <Link
            href="/dashboard/tools/new"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all duration-200 shadow-[0_0_30px_6px_rgba(99,102,241,0.25)] hover:shadow-[0_0_40px_8px_rgba(99,102,241,0.35)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
            </svg>
            Add your first tool
          </Link>
        </div>
      )}

      {/* Tool grid */}
      {filtered.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {filtered.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}
