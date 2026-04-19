import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Tool } from "@/lib/types/database";
import ToolGrid from "@/components/dashboard/tool-grid";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: tools, error } = await supabase
    .from("tools")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching tools:", error);
  }

  const userTools: Tool[] = tools ?? [];

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">My Tools</h1>
          <p className="text-white/40 text-sm mt-1">
            {userTools.length === 0
              ? "No tools yet — add your first one."
              : `${userTools.length} tool${userTools.length !== 1 ? "s" : ""} in your collection`}
          </p>
        </div>
        {userTools.length > 0 && (
          <Link
            href="/dashboard/tools/new"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold transition-all duration-200 shadow-[0_0_20px_4px_rgba(99,102,241,0.2)] hover:shadow-[0_0_30px_6px_rgba(99,102,241,0.3)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
            </svg>
            Add Tool
          </Link>
        )}
      </div>

      <ToolGrid tools={userTools} />
    </div>
  );
}
