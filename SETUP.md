# BookChef Setup Guide

This guide walks you through getting BookChef running locally.

---

## 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and create a new project.
2. Copy your credentials from **Settings → API**:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY`

---

## 2. Run the Database Migration

1. In your Supabase project, go to the **SQL Editor**.
2. Open `supabase/migrations/001_initial_schema.sql` from this repo.
3. Paste the full contents and click **Run**.

This creates the `tools`, `categories`, and `tool_categories` tables with RLS policies applied.

---

## 3. Configure Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com) → **APIs & Services → Credentials**.
2. Create an **OAuth 2.0 Client ID** (Web application).
3. Add **Authorised redirect URIs**:
   ```
   https://<your-supabase-project>.supabase.co/auth/v1/callback
   ```
4. Copy the **Client ID** and **Client Secret**.
5. In your Supabase dashboard, go to **Authentication → Providers → Google**.
6. Enable Google, paste in Client ID and Client Secret.
7. Save.

---

## 4. Configure Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

---

## 5. Install Dependencies & Run

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/login`.

---

## 6. Vercel Deployment

1. Push this repo to GitHub.
2. Import on [vercel.com](https://vercel.com).
3. Add the three environment variables under **Settings → Environment Variables**.
4. Add your Vercel domain to Supabase: **Authentication → URL Configuration → Site URL** and **Redirect URLs**.
5. Deploy.
