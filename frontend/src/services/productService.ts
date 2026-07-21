import { supabase } from './supabaseClient'
import type { Database } from './supabaseClient'

export type Product = Database['public']['Tables']['products']['Row']
export type Category = Database['public']['Tables']['categories']['Row']

/**
 * Fetch all categories
 */
export async function getCategories(): Promise<Category[]> {
  try {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('display_order', { ascending: true })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw error
  }
}

/**
 * Fetch all available products
 */
export async function getProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .is('archived_at', null)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching products:', error)
    throw error
  }
}

/**
 * Fetch featured products
 */
export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('featured', true)
      .eq('available', true)
      .is('archived_at', null)
      .limit(6)

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching featured products:', error)
    throw error
  }
}

/**
 * Fetch products by category
 */
export async function getProductsByCategory(categoryId: string): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('category_id', categoryId)
      .eq('available', true)
      .is('archived_at', null)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching products by category:', error)
    throw error
  }
}

/**
 * Search products by name
 */
export async function searchProducts(query: string): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .ilike('name', `%${query}%`)
      .eq('available', true)
      .is('archived_at', null)

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error searching products:', error)
    throw error
  }
}

/**
 * Create a new product (admin)
 */
export async function createProduct(
  product: Omit<Product, 'id' | 'created_at' | 'updated_at' | 'archived_at'>
): Promise<Product> {
  try {
    const { data, error } = await supabase
      .from('products')
      .insert([product])
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error creating product:', error)
    throw error
  }
}

/**
 * Update a product (admin)
 */
export async function updateProduct(
  id: string,
  updates: Partial<Omit<Product, 'id' | 'created_at' | 'archived_at'>>
): Promise<Product> {
  try {
    const { data, error } = await supabase
      .from('products')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error updating product:', error)
    throw error
  }
}

/**
 * Archive a product (soft delete)
 */
export async function archiveProduct(id: string): Promise<void> {
  try {
    const { error } = await supabase
      .from('products')
      .update({ archived_at: new Date().toISOString() })
      .eq('id', id)

    if (error) throw error
  } catch (error) {
    console.error('Error archiving product:', error)
    throw error
  }
}
