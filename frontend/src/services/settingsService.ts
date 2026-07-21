import { supabase } from './supabaseClient'
import type { Database } from './supabaseClient'

export type Settings = Database['public']['Tables']['settings']['Row']

/**
 * Get business settings
 */
export async function getSettings(): Promise<Settings | null> {
  try {
    const { data, error } = await supabase
      .from('settings')
      .select('*')
      .limit(1)
      .single()

    if (error && error.code === 'PGRST116') {
      // No settings found
      return null
    }
    if (error) throw error

    return data
  } catch (error) {
    console.error('Error fetching settings:', error)
    throw error
  }
}

/**
 * Update business settings (admin)
 */
export async function updateSettings(updates: Partial<Omit<Settings, 'id' | 'created_at'>>): Promise<Settings> {
  try {
    const { data, error } = await supabase
      .from('settings')
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .limit(1)
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error updating settings:', error)
    throw error
  }
}

/**
 * Get business name
 */
export async function getBusinessName(): Promise<string> {
  try {
    const settings = await getSettings()
    return settings?.business_name || 'Grandir'
  } catch (error) {
    console.error('Error fetching business name:', error)
    return 'Grandir'
  }
}

/**
 * Check if pickup is enabled
 */
export async function isPickupEnabled(): Promise<boolean> {
  try {
    const settings = await getSettings()
    return settings?.pickup_enabled ?? true
  } catch (error) {
    console.error('Error checking pickup status:', error)
    return true
  }
}

/**
 * Check if delivery is enabled
 */
export async function isDeliveryEnabled(): Promise<boolean> {
  try {
    const settings = await getSettings()
    return settings?.delivery_enabled ?? true
  } catch (error) {
    console.error('Error checking delivery status:', error)
    return true
  }
}
