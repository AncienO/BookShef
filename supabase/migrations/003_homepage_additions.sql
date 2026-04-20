-- BookChef Homepage Additions Migration
-- Run this in the Supabase SQL Editor AFTER 002_toolkits.sql

-- =========================================================
-- 1. TABLES & COLUMNS
-- =========================================================

-- Add fields to toolkits
alter table public.toolkits add column if not exists is_public boolean default false;
alter table public.toolkits add column if not exists creator_name text;

-- Create public_tools table
create table if not exists public.public_tools (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  url         text not null,
  description text,
  purpose     text,
  created_at  timestamptz not null default now()
);

-- =========================================================
-- 2. ROW LEVEL SECURITY
-- =========================================================

alter table public.public_tools enable row level security;

-- public_tools: Anyone authenticated can read
create policy "Authenticated users can view public_tools"
  on public.public_tools for select
  to authenticated
  using (true);

-- Since RLS is enabled on public_tools and no INSERT/UPDATE/DELETE policies are defined,
-- no public client can modify these rows. Only the Supabase Dashboard, Service Role, 
-- or users bypassing RLS can write here. This securely satisfies the "writable by admin only" requirement.

-- Users can now see public toolkits (toolkits where is_public = true)
-- Ensure this doesn't conflict with "view own toolkits", we create a separate policy.
create policy "Users can view public toolkits"
  on public.toolkits for select
  to authenticated
  using (is_public = true);

-- Users can view toolkit_tools for public toolkits
create policy "Users can view public toolkit_tools"
  on public.toolkit_tools for select
  to authenticated
  using (
    exists (
      select 1 from public.toolkits tk
      where tk.id = toolkit_id and tk.is_public = true
    )
  );
