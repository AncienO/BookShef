"use client";

import type { PublicTool } from "@/lib/types/database";

interface PublicToolCardProps {
  tool: PublicTool;
}

export default function PublicToolCard({ tool }: PublicToolCardProps) {
  return (
    <article className="min-w-[280px] w-full bg-[#111] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all duration-200 group flex flex-col snap-start">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="text-white font-semibold text-base leading-snug line-clamp-1" title={tool.name}>
          {tool.name}
        </h3>
        {tool.purpose && (
          <span className="flex-shrink-0 text-xs text-brand-300 bg-brand-950/50 border border-brand-800/30 rounded-full px-2 py-0.5 whitespace-nowrap">
            {tool.purpose}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-white/50 text-sm mb-5 line-clamp-2 min-h-[2.5rem]">
        {tool.description || "No description provided."}
      </p>

      {/* Footer */}
      <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-white/30">
          Added {new Date(tool.created_at).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
        </span>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-white/5 hover:bg-brand-600 border border-white/10 hover:border-brand-500 transition-all duration-200"
        >
          Visit Tool
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
            <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </article>
  );
}
