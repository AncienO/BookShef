"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import type { Tool } from "@/lib/types/database";
import { deleteTool } from "@/app/(dashboard)/dashboard/actions";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [deleteError, setDeleteError] = useState<string | null>(null);

  function handleDelete() {
    setDeleteError(null);
    startTransition(async () => {
      const result = await deleteTool(tool.id);
      if (result?.error) {
        setDeleteError(result.error);
        setShowConfirm(false);
      }
    });
  }

  return (
    <>
      <article className="bg-[#111] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all duration-200 group flex flex-col">
        {/* Name + URL */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <h2 className="text-white font-semibold text-base leading-snug">{tool.name}</h2>
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-1 text-brand-400 hover:text-brand-300 text-xs font-medium transition-colors"
          >
            Open
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
              <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

        {/* URL mono */}
        <p className="text-xs text-white/30 truncate mb-3 font-mono">{tool.url}</p>

        {/* Description */}
        {tool.description && (
          <p className="text-white/60 text-sm line-clamp-2 mb-3">{tool.description}</p>
        )}

        {/* Purpose badge */}
        {tool.purpose && (
          <div className="flex flex-wrap gap-1.5 mb-3">
            <span className="inline-block px-2 py-0.5 rounded-full text-xs bg-brand-950/60 text-brand-300 border border-brand-800/40">
              {tool.purpose}
            </span>
          </div>
        )}

        {/* Footer: date + actions */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
          <p className="text-white/30 text-xs">
            {new Date(tool.created_at).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
          <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <Link
              href={`/dashboard/tools/${tool.id}/edit`}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-white/50 hover:text-white hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.263a1.75 1.75 0 0 0 0-2.474ZM4.75 13.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" />
              </svg>
              Edit
            </Link>
            <button
              onClick={() => setShowConfirm(true)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-red-400/70 hover:text-red-400 hover:bg-red-500/10 transition-colors border border-transparent hover:border-red-500/20"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                <path fillRule="evenodd" d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5A.75.75 0 0 1 9.95 6Z" clipRule="evenodd" />
              </svg>
              Delete
            </button>
          </div>
        </div>

        {deleteError && (
          <p className="text-red-400 text-xs mt-2">{deleteError}</p>
        )}
      </article>

      {/* Confirm modal */}
      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#111] border border-white/10 rounded-2xl p-6 max-w-sm w-full shadow-2xl">
            <h3 className="text-white font-semibold text-lg mb-2">Delete &ldquo;{tool.name}&rdquo;?</h3>
            <p className="text-white/50 text-sm mb-6">
              This tool will be permanently removed from your toolkit. This action cannot be undone.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={handleDelete}
                disabled={isPending}
                className="flex-1 py-2.5 px-4 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 hover:bg-red-500/25 text-sm font-semibold transition-colors disabled:opacity-50"
              >
                {isPending ? "Deleting…" : "Yes, delete"}
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                disabled={isPending}
                className="flex-1 py-2.5 px-4 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
