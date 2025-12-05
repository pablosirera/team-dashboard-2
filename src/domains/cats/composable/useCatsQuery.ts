import { useQuery } from '@tanstack/vue-query'
import { Cat } from '../types/Cat'
import { Ref, unref } from 'vue'

export function useCatsQuery(page: number | Ref<number>, limit = 10) {
  return useQuery<Cat[]>({
    queryKey: ['cats', page],
    queryFn: async () => {
      const res = await fetch(
        `https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${unref(page)}`,
      )
      if (!res.ok) throw new Error('Error al cargar datos')
      return res.json()
    },
    staleTime: 1000 * 60,
  })
}
