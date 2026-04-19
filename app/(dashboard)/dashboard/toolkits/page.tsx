import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Toolkit } from "@/lib/types/database";
import ToolkitCard from "@/components/dashboard/toolkit-card";

type ToolkitWithMeta = Toolkit & { tool_count: number; preview_names: string[] };

export default async function ToolkitsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // Fetch all toolkits
  const { data: rawToolkits, error } = await supabase
    .from("toolkits")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) console.error("Error fetching toolkits:", error);

  const toolkits: Toolkit[] = rawToolkits ?? [];

  // For each toolkit, fetch tool count + up to 3 tool names via toolkit_tools join
  const toolkitsWithMeta: ToolkitWithMeta[] = await Promise.all(
    toolkits.map(async (tk) => {
      const { data: joinRows } = await supabase
        .from("toolkit_tools")
        .select("tool_id, tools(name)")
        .eq("toolkit_id", tk.id);

      const rows = (joinRows ?? []) as Array<{ tool_id: string; tools: { name: string } | null }>;
      const names = rows.map((r) => r.tools?.name ?? "").filter(Boolean);

      return {
        ...tk,
        tool_count: names.length,
        preview_names: names.slice(0, 3),
      };
    })
  );

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">My Toolkits</h1>
          <p className="text-white/40 text-sm mt-1">
            {toolkitsWithMeta.length === 0
              ? "No toolkits yet — create your first one."
              : `${toolkitsWithMeta.length} toolkit${toolkitsWithMeta.length !== 1 ? "s" : ""}`}
          </p>
        </div>
        {toolkitsWithMeta.length > 0 && (
          <Link
            href="/dashboard/toolkits/new"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold transition-all duration-200 shadow-[0_0_20px_4px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_6px_rgba(99,102,241,0.3)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
            </svg>
            New Toolkit
          </Link>
        )}
      </div>

      {/* Empty state */}
      {toolkitsWithMeta.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white/30">
              <path d="M5.566 4.657A4.505 4.505 0 0 1 6.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0 0 15.75 3h-7.5a3 3 0 0 0-2.684 1.657ZM2.25 12a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3v-6ZM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 0 1 6.75 6h10.5a3 3 0 0 1 2.683 1.657A4.505 4.505 0 0 0 18.75 7.5H5.25Z" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-white mb-1">Create your first toolkit</h2>
          <p className="text-white/40 text-sm max-w-xs mb-6">
            Group your favourite AI tools into themed collections for easy access.
          </p>
          <Link
            href="/dashboard/toolkits/new"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-all duration-200 shadow-[0_0_30px_6px_rgba(99,102,241,0.25)] hover:shadow-[0_0_40px_8px_rgba(99,102,241,0.35)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
            </svg>
            Create Toolkit
          </Link>
        </div>
      )}

      {/* Toolkit grid */}
      {toolkitsWithMeta.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {toolkitsWithMeta.map((tk) => (
            <ToolkitCard key={tk.id} toolkit={tk} />
          ))}
        </div>
      )}
    </div>
  );
}
