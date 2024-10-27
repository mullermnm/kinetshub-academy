import { env } from '$env/dynamic/public';
import type { ConfigType } from '$lib/utils/types/config';

export const config: ConfigType = {
  supabaseConfig: {
    url: env.PUBLIC_SUPABASE_URL || 'http://147.79.102.35:8000',
    anonKey: env.PUBLIC_SUPABASE_ANON_KEY || 'anon-key'
  }
};
