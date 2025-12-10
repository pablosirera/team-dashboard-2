import { readonly, Ref, ref, unref } from 'vue'

export function useFetch<T>(url: string | Ref<string>, onSuccess?: (data: T) => void) {
  const data = ref<T | null>(null)
  const loading = ref(false)
  const error = ref<Error | null>(null)

  async function execute() {
    // const fetchUrl = isRef(url) ? url.value : url
    loading.value = true
    try {
      const response = await fetch(unref(url))
      const json = (await response.json()) as T
      data.value = json
      onSuccess?.(json)
    } catch (err) {
      error.value = err as Error
    } finally {
      loading.value = false
    }
  }

  execute()

  return {
    data: readonly(data),
    loading,
    error,
    execute,
  }
}
