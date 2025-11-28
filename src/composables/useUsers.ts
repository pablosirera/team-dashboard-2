import { User } from '@/types/User'
import { computed, readonly, ref } from 'vue'

const internalState = ref<User[]>([])

export function useUsers() {
  const search = ref<string>('')

  function setUsers(users: User[]) {
    internalState.value = users
  }

  const filteredUsers = computed(() => {
    const term = search.value.trim().toLowerCase()

    if (!term) {
      return [...internalState.value]
    }

    return internalState.value.filter((user) => user.name.toLowerCase().includes(term))
  })

  return {
    state: readonly(internalState),
    setUsers,
    filteredUsers,
    search,
  }
}
