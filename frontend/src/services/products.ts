import { supabase } from '@/lib/supabase'
import { getPublicAssetUrl } from '@/lib/storage'
import type { Product } from '@/types'

export type DisplayProduct = Pick<Product, 'description' | 'id' | 'name' | 'price_in_paisa'> & {
  imageUrl: string | null
}

export async function getProductsByCategory(categoryId: string): Promise<DisplayProduct[]> {
  const { data, error } = await supabase
    .from('products')
    .select('id, name, description, price_in_paisa, image_url')
    .eq('category_id', categoryId)
    .eq('available', true)
    .is('archived_at', null)

  if (error) {
    throw error
  }

  return (data ?? []).map((product) => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price_in_paisa: product.price_in_paisa,
    imageUrl: product.image_url ? getPublicAssetUrl(product.image_url) : null,
  }))
}
