"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import type { Toolkit } from "@/lib/types/database";
import { deleteToolkit } from "@/app/(dashboard)/dashboard/toolkits/actions";

interface ToolkitCardProps {
  toolkit: Toolkit & { tool_count: number; preview_names: string[] };
}

export default function ToolkitCard({ toolkit }: ToolkitCardProps) {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [deleteError, setDeleteError] = useState<string | null>(null);

  function handleDelete() {
    setDeleteError(null);
    startTransition(async () => {
      const result = await deleteToolkit(toolkit.id);
      if (result?.error) {
        setDeleteError(result.error);
        setShowConfirm(false);
      }
    });
  }

  return (
    <>
      <article className="bg-[#111] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all duration-200 group flex flex-col">
        {/* Name */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <h2 className="text-white font-semibold text-base leading-snug">{toolkit.name}</h2>
          <span className="flex-shrink-0 text-xs text-white/30 bg-white/5 border border-white/10 rounded-full px-2 py-0.5">
            {toolkit.tool_count} {toolkit.tool_count === 1 ? "tool" : "tools"}
          </span>
        </div>

        {/* Tool name previews */}
        {toolkit.preview_names.length > 0 ? (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {toolkit.preview_names.map((name) => (
              <span
                key={name}
                className="text-xs text-brand-300 bg-brand-950/50 border border-brand-800/30 px-2 py-0.5 rounded-full"
              >
                {name}
              </span>
            ))}
            {toolkit.tool_count > toolkit.preview_names.length && (
              <span className="text-xs text-white/30 px-2 py-0.5">
                +{toolkit.tool_count - toolkit.preview_names.length} more
              </span>
            )}
          </div>
        ) : (
          <p className="text-white/30 text-sm mb-4 italic">No tools yet</p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
          <p className="text-white/30 text-xs">
            {new Date(toolkit.created_at).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
          <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <Link
              href={`/dashboard/toolkits/${toolkit.id}`}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-white/50 hover:text-white hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
            >
              View
            </Link>
            <Link
              href={`/dashboard/toolkits/${toolkit.id}/edit`}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-white/50 hover:text-white hover:bg-white/10 transition-colors border border-transparent hover:border-white/10"
            >
              Edit
            </Link>
            <button
              onClick={() => setShowConfirm(true)}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium text-red-400/70 hover:text-red-400 hover:bg-red-500/10 transition-colors border border-transparent hover:border-red-500/20"
            >
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
            <h3 className="text-white font-semibold text-lg mb-2">Delete &ldquo;{toolkit.name}&rdquo;?</h3>
            <p className="text-white/50 text-sm mb-6">
              This toolkit will be permanently removed. Tools inside it will not be deleted.
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
