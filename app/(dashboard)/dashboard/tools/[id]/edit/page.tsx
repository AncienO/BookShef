import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import EditToolForm from "@/components/dashboard/edit-tool-form";

interface EditToolPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditToolPage({ params }: EditToolPageProps) {
  const { id } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: tool, error } = await supabase
    .from("tools")
    .select("*")
    .eq("id", id)
    .eq("user_id", user.id)
    .single();

  if (error || !tool) notFound();

  return (
    <div className="p-6 lg:p-8 max-w-2xl">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Link
          href="/dashboard"
          className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
            <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
          </svg>
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-white">Edit Tool</h1>
          <p className="text-white/40 text-sm mt-0.5 truncate max-w-xs">{tool.name}</p>
        </div>
      </div>

      <EditToolForm tool={tool} />
    </div>
  );
}
