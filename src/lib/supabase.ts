// ============================================================
// Cliente de Supabase
//
// Dos clientes:
// - supabase: anon key. Cliente público, respeta RLS. Usable en frontend.
// - supabaseAdmin: service role. Salta RLS. SOLO usar desde código server-side.
// ============================================================

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'PUBLIC_SUPABASE_URL y PUBLIC_SUPABASE_ANON_KEY son obligatorias. ' +
      'Comprueba .env.local en desarrollo o Vercel Environment Variables en producción.'
  );
}

/**
 * Cliente público de Supabase. Usa la anon key. Respeta RLS.
 * Seguro para usar en frontend (browser).
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

/**
 * Cliente administrativo de Supabase. Usa la service role key.
 * ⚠ SOLO usar desde código server-side (Astro endpoints, scripts).
 * Salta RLS. Cualquier petición autenticada con esta key tiene acceso total.
 *
 * Devuelve null si la service role no está configurada (por ejemplo en build).
 */
export function getSupabaseAdmin() {
  const serviceRoleKey = import.meta.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceRoleKey) {
    return null;
  }
  return createClient(supabaseUrl!, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}
