import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import type { Tool } from "@/lib/types/database";
import CreateToolkitClient from "./client";

export default async function NewToolkitPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: tools } = await supabase
    .from("tools")
    .select("*")
    .order("name", { ascending: true });

  const allTools: Tool[] = tools ?? [];

  return <CreateToolkitClient allTools={allTools} />;
}
