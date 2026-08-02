import { supabase } from '@/lib/supabase'
import { getPublicAssetUrl } from '@/lib/storage'
import type { Product } from '@/types'

export type DisplayProduct = Pick<Product, 'description' | 'id' | 'name' | 'price_in_paisa'> & {
  imageUrl: string | null
}

export async function getProducts(categoryId: string | null): Promise<DisplayProduct[]> {
  let query = supabase
    .from('products')
    .select('id, name, description, price_in_paisa, image_url')
    .eq('available', true)
    .is('archived_at', null)

  if (categoryId) {
    query = query.eq('category_id', categoryId)
  }

  const { data, error } = await query

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
