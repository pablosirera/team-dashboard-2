import { ref } from 'vue'

const isAuthenticated = ref(true)

export function useAuth() {
  function login() {
    isAuthenticated.value = true
  }

  return {
    login,
    isAuthenticated,
  }
}
