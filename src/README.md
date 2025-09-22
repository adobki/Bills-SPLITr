# Bills SPLITr Source Code

All project source code lives in this `/src` directory for a cleaner repository structure.

## Structure
- `app/` – App routes and pages (root: Bills List)
- `components/` – Custom, reusable components
- `components/ui/` – shadcn/ui components
- `lib/` – Supabase client, utilities, and server actions

## Supabase Setup
1. Create a project at https://app.supabase.com/.
2. Copy your Supabase project URL and anon/public key.
3. Copy `.env.example` to `.env.local` in the project root and fill in your credentials:
   - `VITE_SUPABASE_URL=...`
   - `VITE_SUPABASE_ANON_KEY=...`
4. The Supabase client is configured in `/src/lib/supabaseClient.ts`.

For project setup, contribution guidelines, and more, see the main [README.md](../README.md) in the project root.
