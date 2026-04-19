"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import type { Tool } from "@/lib/types/database";
import { createToolkit } from "../actions";

interface CreateToolkitPageClientProps {
  allTools: Tool[];
}

const STEPS = ["Name", "Select Tools", "Review & Save"];

export default function CreateToolkitClient({ allTools }: CreateToolkitPageClientProps) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [picked, setPicked] = useState<string[]>([]);
  const [nameError, setNameError] = useState<string | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function toggleTool(id: string) {
    setPicked((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  }

  function handleSave() {
    setSaveError(null);
    startTransition(async () => {
      const result = await createToolkit(name, picked);
      if (result?.error) setSaveError(result.error);
    });
  }

  const pickedTools = allTools.filter((t) => picked.includes(t.id));

  return (
    <div className="p-6 lg:p-8 max-w-2xl">
      {/* Back link */}
      <div className="flex items-center gap-3 mb-8">
        <Link
          href="/dashboard/toolkits"
          className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">Create Toolkit</h1>
          <p className="text-white/40 text-sm mt-0.5">Group your AI tools into a themed collection</p>
        </div>
      </div>

      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-8">
        {STEPS.map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <div
              className={`flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold transition-colors ${
                i === step
                  ? "bg-brand-600 text-white"
                  : i < step
                  ? "bg-brand-600/30 text-brand-300"
                  : "bg-white/10 text-white/30"
              }`}
            >
              {i < step ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                </svg>
              ) : (
                i + 1
              )}
            </div>
            <span className={`text-sm font-medium hidden sm:block ${i === step ? "text-white" : "text-white/30"}`}>
              {label}
            </span>
            {i < STEPS.length - 1 && (
              <div className={`h-px w-6 ${i < step ? "bg-brand-600/50" : "bg-white/10"}`} />
            )}
          </div>
        ))}
      </div>

      {/* Step 0: Name */}
      {step === 0 && (
        <div className="bg-[#111] border border-white/10 rounded-2xl p-6 lg:p-8">
          <h2 className="text-white font-semibold text-xl mb-1">Name your toolkit</h2>
          <p className="text-white/40 text-sm mb-6">Give it a descriptive name like &ldquo;Writing Stack&rdquo; or &ldquo;Dev Tools&rdquo;.</p>
          <div className="space-y-4">
            <input
              type="text"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); if (!name.trim()) { setNameError("Please enter a name."); return; } setNameError(null); setStep(1); } }}
              placeholder="e.g. Writing Stack"
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-colors"
            />
            {nameError && <p className="text-red-400 text-sm">{nameError}</p>}
            <div className="flex gap-3">
              <button
                onClick={() => { if (!name.trim()) { setNameError("Please enter a name."); return; } setNameError(null); setStep(1); }}
                className="py-3 px-6 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_4px_rgba(99,102,241,0.2)]"
              >
                Continue
              </button>
              <Link href="/dashboard/toolkits" className="py-3 px-5 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors">
                Cancel
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Step 1: Tool picker */}
      {step === 1 && (
        <div className="bg-[#111] border border-white/10 rounded-2xl p-6 lg:p-8">
          <h2 className="text-white font-semibold text-xl mb-1">Select tools</h2>
          <p className="text-white/40 text-sm mb-6">
            {picked.length === 0 ? "Pick the tools to include in this toolkit." : `${picked.length} tool${picked.length !== 1 ? "s" : ""} selected`}
          </p>
          {allTools.length === 0 ? (
            <div className="mb-6">
              <p className="text-white/40 text-sm">You have no tools yet.{" "}
                <Link href="/dashboard/tools/new" className="text-brand-400 hover:text-brand-300 underline-offset-2 hover:underline">Add one first.</Link>
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 max-h-80 overflow-y-auto pr-1">
              {allTools.map((tool) => {
                const isSelected = picked.includes(tool.id);
                return (
                  <button
                    key={tool.id}
                    type="button"
                    onClick={() => toggleTool(tool.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "border-brand-500/50 bg-brand-600/10 text-white"
                        : "border-white/10 bg-white/5 text-white/70 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <div className={`flex-shrink-0 w-5 h-5 rounded-md border flex items-center justify-center transition-colors ${isSelected ? "bg-brand-600 border-brand-500" : "border-white/20"}`}>
                      {isSelected && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-white">
                          <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium truncate">{tool.name}</p>
                      {tool.purpose && <p className="text-xs text-white/30 truncate">{tool.purpose}</p>}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
          <div className="flex gap-3">
            <button onClick={() => setStep(2)} className="py-3 px-6 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_4px_rgba(99,102,241,0.2)]">
              Continue
            </button>
            <button onClick={() => setStep(0)} className="py-3 px-5 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors">
              Back
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Review */}
      {step === 2 && (
        <div className="bg-[#111] border border-white/10 rounded-2xl p-6 lg:p-8">
          <h2 className="text-white font-semibold text-xl mb-1">Review &amp; Save</h2>
          <p className="text-white/40 text-sm mb-6">Everything look good? Hit save to create your toolkit.</p>

          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white/30 flex-shrink-0">
                <path d="M5.433 13.917l1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z" />
              </svg>
              <div>
                <p className="text-xs text-white/30 mb-0.5">Name</p>
                <p className="text-white font-medium">{name}</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <p className="text-xs text-white/30 mb-2">Tools ({pickedTools.length})</p>
              {pickedTools.length === 0 ? (
                <p className="text-white/40 text-sm italic">No tools — you can add them later</p>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  {pickedTools.map((t) => (
                    <span key={t.id} className="text-xs px-2 py-0.5 rounded-full bg-brand-950/50 text-brand-300 border border-brand-800/30">
                      {t.name}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {saveError && (
            <div className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 mb-4">
              {saveError}
            </div>
          )}

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              disabled={isPending}
              className="py-3 px-6 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_4px_rgba(99,102,241,0.2)] disabled:opacity-50"
            >
              {isPending ? "Saving…" : "Create Toolkit"}
            </button>
            <button onClick={() => setStep(1)} className="py-3 px-5 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors">
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
