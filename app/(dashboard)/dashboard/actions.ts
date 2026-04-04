"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function addTool(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

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

  revalidatePath("/dashboard");
  redirect("/dashboard");
}
