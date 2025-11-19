<script setup>
import { RouterLink } from 'vue-router'
const metrics = {
  totalUsers: 128,
  activeUsers: 102,
  inactiveUsers: 26,
}

const recentUsers = [
  { id: 1, name: 'María Sánchez', role: 'Product Manager', status: 'Activa', joinedAt: 'Hace 2h' },
  { id: 2, name: 'Luis Romero', role: 'Diseñador', status: 'Inactivo', joinedAt: 'Ayer' },
  { id: 3, name: 'Daniel Ríos', role: 'Backend', status: 'Activo', joinedAt: 'Hace 3 días' },
  { id: 4, name: 'Camila Vega', role: 'Marketing', status: 'Activo', joinedAt: 'Hace 1 semana' },
]
</script>

<template>
  <section class="space-y-8">
    <header>
      <h1 class="text-3xl font-semibold text-slate-900">Resumen general</h1>
      <p class="text-slate-600">Datos actualizados con la actividad más reciente del equipo.</p>
    </header>

    <div class="grid gap-6 md:grid-cols-2">
      <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p class="text-sm font-medium uppercase tracking-wide text-slate-400">Número de usuarios</p>
        <p class="mt-3 text-4xl font-semibold text-slate-900">{{ metrics.totalUsers }}</p>
        <p class="mt-1 text-sm text-slate-500">Usuarios registrados en la plataforma.</p>
      </article>

      <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p class="text-sm font-medium uppercase tracking-wide text-slate-400">Actividad</p>
        <div class="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p class="text-xs uppercase tracking-wide text-slate-500">Activos</p>
            <p class="mt-1 text-3xl font-semibold text-emerald-600">{{ metrics.activeUsers }}</p>
          </div>
          <div>
            <p class="text-xs uppercase tracking-wide text-slate-500">Inactivos</p>
            <p class="mt-1 text-3xl font-semibold text-rose-500">{{ metrics.inactiveUsers }}</p>
          </div>
        </div>
        <p class="mt-3 text-sm text-slate-500">Basado en la actividad de los últimos 30 días.</p>
      </article>
    </div>

    <article class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm font-medium uppercase tracking-wide text-slate-400">Últimos usuarios</p>
          <p class="text-lg font-semibold text-slate-900">Actividad reciente</p>
        </div>
        <RouterLink
          to="/users"
          class="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-600 hover:bg-slate-50"
        >
          Ver todos
        </RouterLink>
      </div>

      <ul class="mt-6 divide-y divide-slate-100">
        <li v-for="user in recentUsers" :key="user.id" class="flex items-center justify-between py-3">
          <div>
            <p class="font-medium text-slate-900">{{ user.name }}</p>
            <p class="text-sm text-slate-500">{{ user.role }}</p>
          </div>
          <div class="text-right">
            <p
              class="text-xs font-semibold uppercase tracking-wide"
              :class="user.status === 'Activa' || user.status === 'Activo' ? 'text-emerald-600' : 'text-rose-500'"
            >
              {{ user.status }}
            </p>
            <p class="text-xs text-slate-400">{{ user.joinedAt }}</p>
          </div>
        </li>
      </ul>
    </article>
  </section>
</template>
