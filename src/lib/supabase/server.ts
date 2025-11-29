import { getCookie, setCookie } from '@tanstack/react-start/server';
import { createServerClient } from '@supabase/ssr';

export function getSupabaseServerClient() {
  return createServerClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          const cookiesObj =
            (getCookie(undefined as any) as
              | Record<string, string>
              | undefined) ?? {};
          return Object.entries(cookiesObj).map(([name, value]) => ({
            name,
            value,
          }));
        },
        setAll(cookies) {
          cookies.forEach((cookie) => {
            setCookie(cookie.name, cookie.value);
          });
        },
      },
    },
  );
}
