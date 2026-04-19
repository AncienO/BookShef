import { redirect } from "next/navigation";

// Backward compatibility shim — redirect old /dashboard/new to /dashboard/tools/new
export default function OldNewPage() {
  redirect("/dashboard/tools/new");
}
