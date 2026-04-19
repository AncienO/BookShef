-- BookChef Toolkits Migration
-- Run this in the Supabase SQL Editor AFTER 001_initial_schema.sql

-- =========================================================
-- 1. TABLES
-- =========================================================

create table if not exists public.toolkits (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  name        text not null,
  created_at  timestamptz not null default now()
);

create table if not exists public.toolkit_tools (
  toolkit_id  uuid not null references public.toolkits(id) on delete cascade,
  tool_id     uuid not null references public.tools(id) on delete cascade,
  primary key (toolkit_id, tool_id)
);

-- =========================================================
-- 2. ROW LEVEL SECURITY
-- =========================================================

alter table public.toolkits      enable row level security;
alter table public.toolkit_tools enable row level security;

-- ---- toolkits ----
create policy "Users can view own toolkits"
  on public.toolkits for select
  using (auth.uid() = user_id);

create policy "Users can insert own toolkits"
  on public.toolkits for insert
  with check (auth.uid() = user_id);

create policy "Users can update own toolkits"
  on public.toolkits for update
  using (auth.uid() = user_id);

create policy "Users can delete own toolkits"
  on public.toolkits for delete
  using (auth.uid() = user_id);

-- ---- toolkit_tools ----
create policy "Users can view own toolkit_tools"
  on public.toolkit_tools for select
  using (
    exists (
      select 1 from public.toolkits tk
      where tk.id = toolkit_id and tk.user_id = auth.uid()
    )
  );

create policy "Users can insert own toolkit_tools"
  on public.toolkit_tools for insert
  with check (
    exists (
      select 1 from public.toolkits tk
      where tk.id = toolkit_id and tk.user_id = auth.uid()
    )
  );

create policy "Users can delete own toolkit_tools"
  on public.toolkit_tools for delete
  using (
    exists (
      select 1 from public.toolkits tk
      where tk.id = toolkit_id and tk.user_id = auth.uid()
    )
  );
