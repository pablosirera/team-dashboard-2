<script setup lang="ts">
import BaseInput from '@core/components/BaseInput.vue'
import BaseList from '@core/components/BaseList.vue'
import BaseModal from '@core/components/BaseModal.vue'
import { useFetch } from '@core/composables/useFetch'
import { useUsers } from '@core/composables/useUsers'
import { User } from '@/core/types/User'
import { computed, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ROUTES_NAMES } from '@/core/constants/routes'

const router = useRouter()
const { setUsers, filteredUsers, search } = useUsers()
const { data: usersData, execute } = useFetch<User[]>(
  'https://jsonplaceholder.typicode.com/users',
  setUsers,
)

const isNewUserModalOpen = ref(false)
const newUser = reactive<Partial<User>>({
  name: '',
  email: '',
})

const users = computed(() => usersData.value || [])

const goToUserDetail = (user: User) => {
  router.push({ name: ROUTES_NAMES.USER_DETAIL, params: { id: user.id } })
}
</script>

<template>
  <section class="space-y-8">
    <header class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-semibold text-slate-900">Usuarios</h1>
        <p class="text-slate-600">Gestiona la información y actividad del equipo.</p>
      </div>

      <button
        type="button"
        class="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        @click="isNewUserModalOpen = true"
      >
        Crear usuario
      </button>
    </header>

    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <button
        type="button"
        class="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        @click="execute()"
      >
        Recargar usuarios
      </button>
      <div class="flex flex-wrap items-center gap-4">
        <label class="flex-1">
          <span class="sr-only">Buscar por nombre</span>
          <input
            v-model="search"
            type="search"
            placeholder="Buscar por nombre"
            class="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-slate-400 focus:ring-2 focus:ring-slate-200 focus:outline-none"
          />
        </label>
      </div>

      <div class="mt-6">
        <p class="text-sm text-slate-500">
          Mostrando {{ filteredUsers.length }} de {{ users.length }} usuarios
        </p>

        <BaseList :items="filteredUsers" @select="goToUserDetail">
          <template #default="{ item }">
            <div>
              <p class="font-medium text-slate-900">{{ item.name }}</p>
              <p class="text-sm text-slate-500">{{ item.role }} · {{ item.email }}</p>
            </div>

            <div class="flex items-center gap-4">
              <span
                class="rounded-full px-3 py-1 text-xs font-semibold"
                :class="
                  item.status === 'Inactivo'
                    ? 'bg-rose-50 text-rose-600'
                    : 'bg-emerald-50 text-emerald-600'
                "
              >
                {{ item.status }}
              </span>
            </div>
          </template>

          <template #empty>No encontramos usuarios con ese nombre.</template>
        </BaseList>
      </div>
    </div>

    <BaseModal
      v-model:open="isNewUserModalOpen"
      title="Crear nuevo usuario"
      @close="isNewUserModalOpen = false"
    >
      <template #default>
        <BaseInput
          v-model="newUser.name"
          label="Nombre"
          placeholder="Escribe el nombre del usuario"
          required
        />
        <BaseInput
          v-model="newUser.email"
          label="Email"
          placeholder="Escribe el email del usuario"
          required
        />
      </template>
    </BaseModal>
  </section>
</template>
