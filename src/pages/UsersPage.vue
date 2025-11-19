<script setup>
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'

const users = [
  {
    id: 'u-101',
    name: 'María Sánchez',
    role: 'Product Manager',
    email: 'maria.sanchez@example.com',
    status: 'Activa',
  },
  {
    id: 'u-102',
    name: 'Luis Romero',
    role: 'Diseñador',
    email: 'luis.romero@example.com',
    status: 'Inactivo',
  },
  {
    id: 'u-103',
    name: 'Daniel Ríos',
    role: 'Backend Engineer',
    email: 'daniel.rios@example.com',
    status: 'Activo',
  },
  {
    id: 'u-104',
    name: 'Camila Vega',
    role: 'Marketing Lead',
    email: 'camila.vega@example.com',
    status: 'Activa',
  },
]

const searchTerm = ref('')

const filteredUsers = computed(() => {
  const term = searchTerm.value.trim().toLowerCase()

  if (!term) {
    return users
  }

  return users.filter((user) => user.name.toLowerCase().includes(term))
})
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
      >
        Crear usuario
      </button>
    </header>

    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div class="flex flex-wrap items-center gap-4">
        <label class="flex-1">
          <span class="sr-only">Buscar por nombre</span>
          <input
            v-model="searchTerm"
            type="search"
            placeholder="Buscar por nombre"
            class="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
          />
        </label>
      </div>

      <div class="mt-6">
        <p class="text-sm text-slate-500">
          Mostrando {{ filteredUsers.length }} de {{ users.length }} usuarios
        </p>

        <div class="mt-4 divide-y divide-slate-100">
          <div
            v-for="user in filteredUsers"
            :key="user.id"
            class="flex flex-wrap items-center justify-between gap-4 py-4"
          >
            <div>
              <p class="font-medium text-slate-900">{{ user.name }}</p>
              <p class="text-sm text-slate-500">{{ user.role }} · {{ user.email }}</p>
            </div>

            <div class="flex items-center gap-4">
              <span
                class="rounded-full px-3 py-1 text-xs font-semibold"
                :class="user.status === 'Inactivo' ? 'bg-rose-50 text-rose-600' : 'bg-emerald-50 text-emerald-600'"
              >
                {{ user.status }}
              </span>
              <RouterLink
                :to="`/users/${user.id}`"
                class="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50"
              >
                Ver detalle
              </RouterLink>
            </div>
          </div>

          <p v-if="!filteredUsers.length" class="py-6 text-center text-sm text-slate-500">
            No encontramos usuarios con ese nombre.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
