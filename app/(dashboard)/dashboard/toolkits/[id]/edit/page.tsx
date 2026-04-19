import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import type { Tool, Toolkit } from "@/lib/types/database";
import EditToolkitForm from "@/components/dashboard/edit-toolkit-form";

interface EditToolkitPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditToolkitPage({ params }: EditToolkitPageProps) {
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

  // Fetch all user's tools
  const { data: rawTools } = await supabase
    .from("tools")
    .select("*")
    .order("name", { ascending: true });

  const allTools: Tool[] = rawTools ?? [];

  // Fetch currently selected tools for this toolkit
  const { data: joinRows } = await supabase
    .from("toolkit_tools")
    .select("tool_id")
    .eq("toolkit_id", id);

  const selectedToolIds = (joinRows ?? []).map((r) => r.tool_id);

  return (
    <div className="p-6 lg:p-8 max-w-2xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Link
          href={`/dashboard/toolkits/${id}`}
          className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">Edit Toolkit</h1>
          <p className="text-white/40 text-sm mt-0.5 truncate max-w-xs">{toolkit.name}</p>
        </div>
      </div>

      <EditToolkitForm
        toolkit={toolkit}
        allTools={allTools}
        selectedToolIds={selectedToolIds}
      />
    </div>
  );
}
