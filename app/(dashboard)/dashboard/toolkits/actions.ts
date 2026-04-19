"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function createToolkit(name: string, toolIds: string[]) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  if (!name.trim()) return { error: "Toolkit name is required." };

  // Insert toolkit
  const { data: toolkit, error: tkError } = await supabase
    .from("toolkits")
    .insert({ user_id: user.id, name: name.trim() })
    .select()
    .single();

  if (tkError || !toolkit) {
    return { error: tkError?.message ?? "Failed to create toolkit." };
  }

  // Insert tool associations
  if (toolIds.length > 0) {
    const rows = toolIds.map((tool_id) => ({ toolkit_id: toolkit.id, tool_id }));
    const { error: joinError } = await supabase.from("toolkit_tools").insert(rows);
    if (joinError) {
      return { error: joinError.message };
    }
  }

  revalidatePath("/dashboard/toolkits");
  redirect("/dashboard/toolkits");
}

export async function updateToolkit(id: string, name: string, toolIds: string[]) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  if (!name.trim()) return { error: "Toolkit name is required." };

  // Update toolkit name
  const { error: tkError } = await supabase
    .from("toolkits")
    .update({ name: name.trim() })
    .eq("id", id)
    .eq("user_id", user.id);

  if (tkError) return { error: tkError.message };

  // Replace all tool associations: delete old, insert new
  const { error: deleteError } = await supabase
    .from("toolkit_tools")
    .delete()
    .eq("toolkit_id", id);

  if (deleteError) return { error: deleteError.message };

  if (toolIds.length > 0) {
    const rows = toolIds.map((tool_id) => ({ toolkit_id: id, tool_id }));
    const { error: insertError } = await supabase.from("toolkit_tools").insert(rows);
    if (insertError) return { error: insertError.message };
  }

  revalidatePath("/dashboard/toolkits");
  revalidatePath(`/dashboard/toolkits/${id}`);
  revalidatePath(`/dashboard/toolkits/${id}/edit`);
  redirect(`/dashboard/toolkits/${id}`);
}

export async function deleteToolkit(id: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: "Not authenticated." };

  const { error } = await supabase
    .from("toolkits")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) return { error: error.message };

  revalidatePath("/dashboard/toolkits");
  return { success: true };
}
