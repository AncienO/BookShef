-- BookShef Initial Schema
-- Run this in the Supabase SQL Editor (supabase.com → your project → SQL editor)

-- =========================================================
-- 1. TABLES
-- =========================================================

create table if not exists public.categories (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  name        text not null,
  colour      text not null default '#6366f1',
  created_at  timestamptz not null default now()
);

create table if not exists public.tools (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  name        text not null,
  url         text not null,
  description text,
  purpose     text,
  notes       text,
  created_at  timestamptz not null default now()
);

create table if not exists public.tool_categories (
  tool_id     uuid not null references public.tools(id) on delete cascade,
  category_id uuid not null references public.categories(id) on delete cascade,
  primary key (tool_id, category_id)
);

-- =========================================================
-- 2. ROW LEVEL SECURITY
-- =========================================================

alter table public.categories    enable row level security;
alter table public.tools         enable row level security;
alter table public.tool_categories enable row level security;

-- ---- categories ----
create policy "Users can view own categories"
  on public.categories for select
  using (auth.uid() = user_id);

create policy "Users can insert own categories"
  on public.categories for insert
  with check (auth.uid() = user_id);

create policy "Users can update own categories"
  on public.categories for update
  using (auth.uid() = user_id);

create policy "Users can delete own categories"
  on public.categories for delete
  using (auth.uid() = user_id);

-- ---- tools ----
create policy "Users can view own tools"
  on public.tools for select
  using (auth.uid() = user_id);

create policy "Users can insert own tools"
  on public.tools for insert
  with check (auth.uid() = user_id);

create policy "Users can update own tools"
  on public.tools for update
  using (auth.uid() = user_id);

create policy "Users can delete own tools"
  on public.tools for delete
  using (auth.uid() = user_id);

-- ---- tool_categories ----
-- Users can only manage join rows for tools they own
create policy "Users can view own tool_categories"
  on public.tool_categories for select
  using (
    exists (
      select 1 from public.tools t
      where t.id = tool_id and t.user_id = auth.uid()
    )
  );

create policy "Users can insert own tool_categories"
  on public.tool_categories for insert
  with check (
    exists (
      select 1 from public.tools t
      where t.id = tool_id and t.user_id = auth.uid()
    )
  );

create policy "Users can delete own tool_categories"
  on public.tool_categories for delete
  using (
    exists (
      select 1 from public.tools t
      where t.id = tool_id and t.user_id = auth.uid()
    )
  );
