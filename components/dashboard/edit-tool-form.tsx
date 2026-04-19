"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import type { Tool } from "@/lib/types/database";
import { updateTool } from "@/app/(dashboard)/dashboard/actions";

interface EditToolFormProps {
  tool: Tool;
}

export default function EditToolForm({ tool }: EditToolFormProps) {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      const result = await updateTool(tool.id, formData);
      if (result?.error) setError(result.error);
    });
  }

  return (
    <div className="bg-[#111] border border-white/10 rounded-2xl p-6 lg:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1.5">
            Name <span className="text-brand-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            defaultValue={tool.name}
            placeholder="e.g. ChatGPT"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-colors"
          />
        </div>

        {/* URL */}
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-white/80 mb-1.5">
            URL <span className="text-brand-400">*</span>
          </label>
          <input
            id="url"
            name="url"
            type="url"
            required
            defaultValue={tool.url}
            placeholder="https://chat.openai.com"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-colors"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-white/80 mb-1.5">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            defaultValue={tool.description ?? ""}
            placeholder="What does this tool do?"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-colors resize-none"
          />
        </div>

        {/* Purpose */}
        <div>
          <label htmlFor="purpose" className="block text-sm font-medium text-white/80 mb-1.5">
            Purpose
          </label>
          <input
            id="purpose"
            name="purpose"
            type="text"
            defaultValue={tool.purpose ?? ""}
            placeholder="e.g. Writing, Coding, Research"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-colors"
          />
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-white/80 mb-1.5">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            defaultValue={tool.notes ?? ""}
            placeholder="Any personal notes, tips, or reminders…"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-colors resize-none"
          />
        </div>

        {error && (
          <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
            {error}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            disabled={isPending}
            className="flex-1 sm:flex-none py-3 px-6 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_4px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_6px_rgba(99,102,241,0.3)]"
          >
            {isPending ? "Saving…" : "Save changes"}
          </button>
          <Link
            href="/dashboard"
            className="py-3 px-5 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:border-white/20 hover:bg-white/10 text-sm font-medium transition-colors"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
