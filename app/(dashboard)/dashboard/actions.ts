"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function addTool(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const name = (formData.get("name") as string).trim();
  const url = (formData.get("url") as string).trim();
  const description = (formData.get("description") as string | null)?.trim() ?? null;
  const purpose = (formData.get("purpose") as string | null)?.trim() ?? null;
  const notes = (formData.get("notes") as string | null)?.trim() ?? null;

  if (!name || !url) {
    return { error: "Name and URL are required." };
  }

  const { error } = await supabase.from("tools").insert({
    user_id: user.id,
    name,
    url,
    description: description || null,
    purpose: purpose || null,
    notes: notes || null,
  });

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/dashboard/tools");
  redirect("/dashboard/tools");
}

export async function updateTool(id: string, formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const name = (formData.get("name") as string).trim();
  const url = (formData.get("url") as string).trim();
  const description = (formData.get("description") as string | null)?.trim() ?? null;
  const purpose = (formData.get("purpose") as string | null)?.trim() ?? null;
  const notes = (formData.get("notes") as string | null)?.trim() ?? null;

  if (!name || !url) {
    return { error: "Name and URL are required." };
  }

  const { error } = await supabase
    .from("tools")
    .update({
      name,
      url,
      description: description || null,
      purpose: purpose || null,
      notes: notes || null,
    })
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/dashboard/tools");
  revalidatePath(`/dashboard/tools/${id}/edit`);
  redirect("/dashboard/tools");
}

export async function deleteTool(id: string) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: "Not authenticated." };

  const { error } = await supabase
    .from("tools")
    .delete()
    .eq("id", id)
    .eq("user_id", user.id);

  if (error) {
    return { error: error.message };
  }

  revalidatePath("/dashboard/tools");
  return { success: true };
}

export async function savePublicToolkit(toolkitId: string): Promise<{ success?: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return { error: "Not authenticated" };

  // 1. Fetch the toolkit
  const { data: toolkit, error: toolkitError } = await supabase
    .from("toolkits")
    .select("*")
    .eq("id", toolkitId)
    .single();

  if (toolkitError || !toolkit) return { error: "Toolkit not found" };

  // 2. Fetch all tools associated with this toolkit
  const { data: toolkitTools, error: toolsError } = await supabase
    .from("toolkit_tools")
    .select("tool_id")
    .eq("toolkit_id", toolkitId);

  if (toolsError) return { error: "Failed to fetch tools" };

  // 3. Create the new personal toolkit
  const { data: newToolkit, error: newToolkitError } = await supabase
    .from("toolkits")
    .insert({
      user_id: user.id,
      name: toolkit.name,
      is_public: false, // Ensure the copied one is private
      creator_name: null // It's now their own
    })
    .select()
    .single();

  if (newToolkitError || !newToolkit) return { error: "Failed to create your toolkit" };

  if (toolkitTools && toolkitTools.length > 0) {
    // 4. Fetch the actual tool records
    const toolIds = toolkitTools.map(t => t.tool_id);
    const { data: originalTools, error: originalToolsError } = await supabase
      .from("tools")
      .select("*")
      .in("id", toolIds);
      
    if (!originalToolsError && originalTools && originalTools.length > 0) {
      // 5. Insert duplicates of these tools for the new user
      const toolsToInsert = originalTools.map(t => ({
        user_id: user.id,
        name: t.name,
        url: t.url,
        description: t.description,
        purpose: t.purpose,
        notes: t.notes,
      }));
      
      const { data: insertedTools, error: insertToolsError } = await supabase
        .from("tools")
        .insert(toolsToInsert)
        .select();

      if (!insertToolsError && insertedTools) {
        // 6. Link the newly created tools to the newly created toolkit
        const newToolkitTools = insertedTools.map(t => ({
          toolkit_id: newToolkit.id,
          tool_id: t.id
        }));

        await supabase.from("toolkit_tools").insert(newToolkitTools);
      }
    }
  }

  revalidatePath("/dashboard/toolkits");
  revalidatePath("/dashboard/home");
  return { success: true };
}
