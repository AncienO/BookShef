import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import Greeting from "@/components/dashboard/greeting";
import PublicToolCard from "@/components/dashboard/public-tool-card";
import CommunityToolkitCard from "@/components/dashboard/community-toolkit-card";
import type { PublicTool, Toolkit } from "@/lib/types/database";

type ToolkitWithMeta = Toolkit & { tool_count: number };

export default async function DashboardHomePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // Determine user name
  const name = user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split("@")[0] || "User";

  // Check if user has tools (first time state)
  const { count: userToolsCount } = await supabase
    .from("tools")
    .select("*", { count: "exact", head: true });

  const isFirstTime = userToolsCount === 0;

  // Fetch Public Tools
  const { data: rawPublicTools } = await supabase
    .from("public_tools")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(10);
    
  const publicTools: PublicTool[] = rawPublicTools ?? [];

  // Fetch Community Toolkits
  const { data: rawToolkits } = await supabase
    .from("toolkits")
    .select("*")
    .eq("is_public", true)
    .order("created_at", { ascending: false })
    .limit(6);
    
  const publicToolkits: Toolkit[] = rawToolkits ?? [];

  // Get tool counts for community toolkits
  const toolkitsWithMeta: ToolkitWithMeta[] = await Promise.all(
    publicToolkits.map(async (tk) => {
      const { count } = await supabase
        .from("toolkit_tools")
        .select("*", { count: "exact", head: true })
        .eq("toolkit_id", tk.id);

      return {
        ...tk,
        tool_count: count ?? 0,
      };
    })
  );

  return (
    <div className="p-6 lg:p-8 max-w-7xl mx-auto space-y-12">
      {/* 1. Welcome Header */}
      <section>
        <Greeting name={name} />
        <p className="text-white/60 mt-2 text-lg">
          Here is what is new in the AI world today.
        </p>
        {isFirstTime && (
          <div className="mt-4">
            <p className="text-brand-300/90 text-sm bg-brand-600/10 inline-block px-3 py-1.5 rounded-lg border border-brand-500/20 font-medium">
              Start by adding your first tool or exploring public toolkits below.
            </p>
          </div>
        )}
      </section>

      {/* 2. New AI Tools in the Market */}
      <section>
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-xl font-bold text-white">New &amp; Trending AI Tools</h2>
          <Link href="/dashboard/discover" className="text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors hidden sm:block">
            View All &rarr;
          </Link>
        </div>

        {publicTools.length > 0 ? (
          <div className="flex overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-4 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {publicTools.map((tool) => (
              <PublicToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="bg-[#111] border border-white/5 rounded-xl p-8 text-center">
            <span className="text-white/40 text-sm">New tools coming soon. Check back shortly.</span>
          </div>
        )}
        <div className="mt-4 sm:hidden">
            <Link href="/dashboard/discover" className="text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors">
              View All Tools &rarr;
            </Link>
        </div>
      </section>

      {/* 3. Toolkits from the Community */}
      <section>
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Toolkits from the Community</h2>
          <Link href="/dashboard/community" className="text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors">
            View All &rarr;
          </Link>
        </div>

        {toolkitsWithMeta.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {toolkitsWithMeta.map((tk) => (
              <CommunityToolkitCard key={tk.id} toolkit={tk} />
            ))}
          </div>
        ) : (
          <div className="bg-[#111] border border-white/5 rounded-xl p-8 text-center">
            <span className="text-white/40 text-sm">No public toolkits yet. Be the first to share yours.</span>
          </div>
        )}
      </section>
    </div>
  );
}
