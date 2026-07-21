import { createClient } from './../../../supabase/migrations/node_modules/supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase credentials not configured. Using mock data.')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types
export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          name: string
          description: string | null
          price_in_paisa: number
          image_url: string | null
          featured: boolean
          available: boolean
          category_id: string
          created_at: string
          updated_at: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          description: string | null
          display_order: number
          created_at: string
          updated_at: string
        }
      }
      orders: {
        Row: {
          id: string
          customer_name: string
          customer_phone: string
          order_type: 'pickup' | 'delivery'
          pickup_time: string | null
          delivery_address: string | null
          delivery_notes: string | null
          total_price_in_paisa: number
          status: 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled'
          created_at: string
          updated_at: string
        }
      }
      settings: {
        Row: {
          id: string
          business_name: string
          description: string | null
          phone: string | null
          email: string | null
          address: string | null
          logo_url: string | null
          hero_image_url: string | null
          pickup_enabled: boolean
          delivery_enabled: boolean
          opening_hours: Record<string, unknown>
          social_links: Record<string, unknown>
          created_at: string
          updated_at: string
        }
      }
    }
  }
}
