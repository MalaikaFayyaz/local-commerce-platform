import { useState, useEffect } from 'react'

export interface Product {
  id: string
  name: string
  description?: string
  price_in_paisa: number
  image_url?: string
  featured: boolean
  category_id: string
}

export interface Category {
  id: string
  name: string
  description?: string
}

interface UseProductsReturn {
  products: Product[]
  categories: Category[]
  loading: boolean
  error: string | null
  featuredProducts: Product[]
}

// Mock data for now - will be replaced with real API calls
const mockCategories: Category[] = [
  { id: '1', name: 'Croissants', description: 'Buttery & flaky' },
  { id: '2', name: 'Bread', description: 'Artisan loaves' },
  { id: '3', name: 'Pastries', description: 'Sweet treats' },
  { id: '4', name: 'Cakes', description: 'Custom cakes' },
]

const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Chocolate Croissant',
    description: 'Buttery croissant with dark chocolate',
    price_in_paisa: 45000,
    featured: true,
    category_id: '1',
  },
  {
    id: '2',
    name: 'Sourdough Bread',
    description: 'Traditional sourdough with a crispy crust',
    price_in_paisa: 35000,
    featured: true,
    category_id: '2',
  },
  {
    id: '3',
    name: 'Raspberry Tart',
    description: 'Fresh raspberries with cream filling',
    price_in_paisa: 30000,
    featured: true,
    category_id: '3',
  },
  {
    id: '4',
    name: 'Vanilla Cake',
    description: 'Classic vanilla cake with buttercream frosting',
    price_in_paisa: 80000,
    featured: false,
    category_id: '4',
  },
  {
    id: '5',
    name: 'Almond Croissant',
    description: 'Croissant with almond filling',
    price_in_paisa: 50000,
    featured: true,
    category_id: '1',
  },
  {
    id: '6',
    name: 'Focaccia',
    description: 'Italian flatbread with olive oil and herbs',
    price_in_paisa: 25000,
    featured: false,
    category_id: '2',
  },
]

export function useProducts(): UseProductsReturn {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500))
        
        setProducts(mockProducts)
        setCategories(mockCategories)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch products')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const featuredProducts = products.filter((p) => p.featured)

  return {
    products,
    categories,
    loading,
    error,
    featuredProducts,
  }
}
