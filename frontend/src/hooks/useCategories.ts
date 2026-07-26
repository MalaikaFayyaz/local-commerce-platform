import { useEffect, useState } from 'react'
import { getCategories } from '@/services/categories'
import type { DisplayCategory } from '@/services/categories'

type UseCategoriesResult = {
  categories: DisplayCategory[]
  error: boolean
  isLoading: boolean
}

export function useCategories(): UseCategoriesResult {
  const [categories, setCategories] = useState<DisplayCategory[]>([])
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function loadCategories() {
      try {
        const fetchedCategories = await getCategories()

        if (isMounted) {
          setCategories(fetchedCategories)
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

    void loadCategories()

    return () => {
      isMounted = false
    }
  }, [])

  return { categories, error, isLoading }
}
