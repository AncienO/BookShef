"use client";

import { useState, useTransition } from "react";
import type { Toolkit } from "@/lib/types/database";
import { savePublicToolkit } from "@/app/(dashboard)/dashboard/actions";

interface CommunityToolkitCardProps {
  toolkit: Toolkit & { tool_count: number };
}

export default function CommunityToolkitCard({ toolkit }: CommunityToolkitCardProps) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function handleSave() {
    setError(null);
    setSuccess(false);
    startTransition(async () => {
      const result = await savePublicToolkit(toolkit.id);
      if (result?.error) {
        setError(result.error);
      } else {
        setSuccess(true);
      }
    });
  }

  return (
    <article className="bg-[#111] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all duration-200 group flex flex-col min-h-[160px]">
      <div className="flex items-start justify-between gap-2 mb-2">
        <div>
          <h3 className="text-white font-semibold text-base leading-snug line-clamp-1" title={toolkit.name}>
            {toolkit.name}
          </h3>
          <p className="text-white/40 text-xs mt-0.5">by {toolkit.creator_name || "Community Member"}</p>
        </div>
        <span className="flex-shrink-0 text-xs text-brand-300 bg-brand-950/50 border border-brand-800/30 rounded-full px-2 py-0.5">
          {toolkit.tool_count} {toolkit.tool_count === 1 ? "tool" : "tools"}
        </span>
      </div>

      <div className="mt-auto pt-4 flex items-center justify-between">
        <span className="text-white/30 text-xs">
          {new Date(toolkit.created_at).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
        </span>
        <button
          onClick={handleSave}
          disabled={isPending || success}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 border ${
            success
              ? "text-green-400 bg-green-500/10 border-green-500/20"
              : "text-white bg-white/5 hover:bg-brand-600 border-white/10 hover:border-brand-500 disabled:opacity-50"
          }`}
        >
          {isPending ? (
            "Saving..."
          ) : success ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              Saved
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
              Save to Library
            </>
          )}
        </button>
      </div>
      {error && <p className="text-red-400 text-xs mt-2 text-right">{error}</p>}
    </article>
  );
}
