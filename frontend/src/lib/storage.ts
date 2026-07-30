import { supabase } from '@/lib/supabase'

const assetsBucket = 'assets'

export function getPublicAssetUrl(path: string): string {
  const { data } = supabase.storage.from(assetsBucket).getPublicUrl(path)

  return data.publicUrl
}
