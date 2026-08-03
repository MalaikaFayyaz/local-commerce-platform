import { supabase } from '@/lib/supabase'
import { getPublicAssetUrl } from '@/lib/storage'
import type { Category } from '@/types'

export type DisplayCategory = Pick<Category, 'id' | 'image_url' | 'name'> & { productCount: number }
export async function getCategories(): Promise<DisplayCategory[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('id, name, image_url, products(count)')
    .eq('products.available', true)
    .is('products.archived_at', null)
    .order('display_order', { ascending: true })
  if (error) {
    throw error
  }
  return (data ?? []).map((category) => ({
    id: category.id,
    name: category.name,
    image_url: category.image_url ? getPublicAssetUrl(category.image_url) : null,
    productCount: category.products?.[0]?.count ?? 0,
  }))
}
