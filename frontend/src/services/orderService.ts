import { supabase } from './supabaseClient'
import type { Database } from './supabaseClient'

export type Order = Database['public']['Tables']['orders']['Row']

interface CreateOrderData {
  customerName: string
  customerPhone: string
  orderType: 'pickup' | 'delivery'
  pickupTime?: string
  deliveryAddress?: string
  deliveryNotes?: string
  totalPrice: number
}

interface OrderItem {
  productId: string
  quantity: number
  unitPrice: number
}

/**
 * Create a new order
 */
export async function createOrder(orderData: CreateOrderData, items: OrderItem[]): Promise<Order> {
  try {
    // Insert order
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert([
        {
          customer_name: orderData.customerName,
          customer_phone: orderData.customerPhone,
          order_type: orderData.orderType,
          pickup_time: orderData.pickupTime || null,
          delivery_address: orderData.deliveryAddress || null,
          delivery_notes: orderData.deliveryNotes || null,
          total_price_in_paisa: orderData.totalPrice,
          status: 'pending',
        },
      ])
      .select()
      .single()

    if (orderError) throw orderError

    // Insert order items
    if (items.length > 0) {
      const orderItems = items.map((item) => ({
        order_id: order.id,
        product_id: item.productId,
        quantity: item.quantity,
        unit_price_in_paisa: item.unitPrice,
      }))

      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(orderItems)

      if (itemsError) throw itemsError
    }

    return order
  } catch (error) {
    console.error('Error creating order:', error)
    throw error
  }
}

/**
 * Get order by ID
 */
export async function getOrderById(id: string): Promise<Order | null> {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('id', id)
      .single()

    if (error && error.code === 'PGRST116') {
      // Row not found
      return null
    }
    if (error) throw error

    return data
  } catch (error) {
    console.error('Error fetching order:', error)
    throw error
  }
}

/**
 * Get all orders (admin)
 */
export async function getAllOrders(): Promise<Order[]> {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching orders:', error)
    throw error
  }
}

/**
 * Get orders by status (admin)
 */
export async function getOrdersByStatus(status: string): Promise<Order[]> {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('status', status)
      .order('created_at', { ascending: false })

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching orders by status:', error)
    throw error
  }
}

/**
 * Update order status (admin)
 */
export async function updateOrderStatus(
  id: string,
  status: 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled'
): Promise<Order> {
  try {
    const { data, error } = await supabase
      .from('orders')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  } catch (error) {
    console.error('Error updating order status:', error)
    throw error
  }
}

/**
 * Get order items with product details
 */
export async function getOrderItems(orderId: string) {
  try {
    const { data, error } = await supabase
      .from('order_items')
      .select(`
        *,
        products (
          id,
          name,
          image_url
        )
      `)
      .eq('order_id', orderId)

    if (error) throw error
    return data || []
  } catch (error) {
    console.error('Error fetching order items:', error)
    throw error
  }
}
