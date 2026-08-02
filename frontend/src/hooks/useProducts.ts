import { useEffect, useState } from 'react'
import { getProductsByCategory } from '@/services/products'
import type { DisplayProduct } from '@/services/products'

type UseProductsResult = {
  error: boolean
  isLoading: boolean
  products: DisplayProduct[]
}

export function useProducts(categoryId: string | null): UseProductsResult {
  const [products, setProducts] = useState<DisplayProduct[]>([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(Boolean(categoryId))

  useEffect(() => {
    let isMounted = true

    if (!categoryId) {
      setProducts([])
      setError(false)
      setIsLoading(false)

      return () => {
        isMounted = false
      }
    }

    const selectedCategoryId = categoryId

    async function loadProducts() {
      setIsLoading(true)
      setError(false)

      try {
        const fetchedProducts = await getProductsByCategory(selectedCategoryId)

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
  }, [categoryId])

  return { error, isLoading, products }
}
