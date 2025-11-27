<script setup lang="ts">
import { User } from '@/types/User'
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const userId = route.params.id

const users: User[] = [
  {
    id: 'u-101',
    name: 'María Sánchez',
    email: 'maria.sanchez@example.com',
    role: 'Product Manager',
    status: 'Activa',
    joinedAt: '12 de marzo, 2023',
  },
  {
    id: 'u-102',
    name: 'Luis Romero',
    email: 'luis.romero@example.com',
    role: 'Diseñador Senior',
    status: 'Inactivo',
    joinedAt: '9 de agosto, 2022',
  },
  {
    id: 'u-103',
    name: 'Daniel Ríos',
    email: 'daniel.rios@example.com',
    role: 'Backend Engineer',
    status: 'Activo',
    joinedAt: '30 de enero, 2024',
  },
  {
    id: 'u-104',
    name: 'Camila Vega',
    email: 'camila.vega@example.com',
    role: 'Marketing Lead',
    status: 'Activa',
    joinedAt: '7 de abril, 2021',
  },
]

const user = computed(() => users.find((person) => person.id === userId))
</script>

<template>
  <section class="space-y-8">
    <div class="flex items-center justify-between">
      <div>
        <RouterLink to="/users" class="text-sm font-medium text-slate-500 hover:text-slate-900">
          ← Volver al listado
        </RouterLink>
        <h1 class="mt-2 text-3xl font-semibold text-slate-900">
          {{ user ? user.name : 'Usuario no encontrado' }}
        </h1>
        <p class="text-slate-600">
          {{ user ? user.email : `No existe un usuario con el id ${userId}` }}
        </p>
      </div>

      <button
        v-if="user"
        type="button"
        class="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        Editar
      </button>
    </div>

    <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" v-if="user">
      <dl class="grid gap-6 md:grid-cols-2">
        <div>
          <dt class="text-xs font-semibold tracking-wide text-slate-400 uppercase">Nombre</dt>
          <dd class="mt-1 text-lg font-medium text-slate-900">{{ user.name }}</dd>
        </div>
        <div>
          <dt class="text-xs font-semibold tracking-wide text-slate-400 uppercase">Email</dt>
          <dd class="mt-1 text-lg font-medium text-slate-900">{{ user.email }}</dd>
        </div>
        <div>
          <dt class="text-xs font-semibold tracking-wide text-slate-400 uppercase">Rol</dt>
          <dd class="mt-1 text-lg font-medium text-slate-900">{{ user.role }}</dd>
        </div>
        <div>
          <dt class="text-xs font-semibold tracking-wide text-slate-400 uppercase">Estado</dt>
          <dd
            class="mt-1 inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold"
            :class="
              user.status === 'Inactivo'
                ? 'bg-rose-50 text-rose-600'
                : 'bg-emerald-50 text-emerald-600'
            "
          >
            {{ user.status }}
          </dd>
        </div>
        <div>
          <dt class="text-xs font-semibold tracking-wide text-slate-400 uppercase">
            Fecha de alta
          </dt>
          <dd class="mt-1 text-lg font-medium text-slate-900">{{ user.joinedAt }}</dd>
        </div>
        <div>
          <dt class="text-xs font-semibold tracking-wide text-slate-400 uppercase">ID</dt>
          <dd class="mt-1 text-lg font-medium text-slate-900">{{ user.id }}</dd>
        </div>
      </dl>
    </article>

    <article
      v-else
      class="rounded-2xl border border-dashed border-rose-200 bg-rose-50 p-6 text-rose-700"
    >
      No encontramos información para el usuario con id <strong>{{ userId }}</strong
      >.
    </article>
  </section>
</template>
