Run these steps (no local node required):
1. Create Supabase project. Open SQL Editor and run supabase/schema.sql then supabase/seed.sql.
2. Create GitHub repo and upload all files (root contains package.json and app/).
3. In Vercel, import the GitHub repo. Add environment variables from .env.example (NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE).
4. Deploy. Vercel will build the app and it will connect to Supabase.

