import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import ToolCard from "@/components/dashboard/tool-card";
import type { Tool, Toolkit } from "@/lib/types/database";

interface ViewToolkitPageProps {
  params: Promise<{ id: string }>;
}

export default async function ViewToolkitPage({ params }: ViewToolkitPageProps) {
  const { id } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // Fetch toolkit
  const { data: toolkit, error: tkError } = await supabase
    .from("toolkits")
    .select("*")
    .eq("id", id)
    .eq("user_id", user.id)
    .single<Toolkit>();

  if (tkError || !toolkit) notFound();

  // Fetch tools in this toolkit
  const { data: joinRows } = await supabase
    .from("toolkit_tools")
    .select("tool_id, tools(*)")
    .eq("toolkit_id", id);

  const tools: Tool[] = (joinRows ?? []).map((r: { tool_id: string; tools: Tool | null }) => r.tools).filter(Boolean) as Tool[];

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard/toolkits"
            className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-colors flex-shrink-0"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
            </svg>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-white">{toolkit.name}</h1>
            <p className="text-white/40 text-sm mt-1">
              {tools.length} {tools.length === 1 ? "tool" : "tools"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <Link
            href={`/dashboard/toolkits/${id}/edit`}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3.5 h-3.5">
              <path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.263a1.75 1.75 0 0 0 0-2.474ZM4.75 13.25a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" />
            </svg>
            Edit
          </Link>
        </div>
      </div>

      {/* Tools */}
      {tools.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-white/40 text-sm mb-4">This toolkit has no tools yet.</p>
          <Link
            href={`/dashboard/toolkits/${id}/edit`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold transition-all hover:scale-[1.02]"
          >
            Add tools
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}
