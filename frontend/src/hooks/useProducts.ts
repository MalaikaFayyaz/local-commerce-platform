import { useEffect, useState } from 'react'
import { getProducts } from '@/services/products'
import type { DisplayProduct } from '@/services/products'

type UseProductsResult = {
  error: boolean
  isLoading: boolean
  products: DisplayProduct[]
}

export function useProducts(
  categoryId: string | null,
  searchQuery: string | null
): UseProductsResult {
  const [products, setProducts] = useState<DisplayProduct[]>([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function loadProducts() {
      setIsLoading(true)
      setError(false)

      try {
        const fetchedProducts = await getProducts(categoryId, searchQuery)

        if (isMounted) {
          setProducts(fetchedProducts)
        }
      } catch {
        if (isMounted) {
          setError(true)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    void loadProducts()

    return () => {
      isMounted = false
    }
  }, [categoryId, searchQuery])

  return { error, isLoading, products }
}
