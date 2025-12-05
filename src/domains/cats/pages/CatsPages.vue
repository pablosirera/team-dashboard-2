<script setup lang="ts">
import { computed, ref } from 'vue'
import PaginationController from '@/core/components/PaginationController.vue'
import { useCatsQuery } from '../composable/useCatsQuery'

const localCurrentPage = ref(0)

const { data, isLoading, refetch, isError, isFetching } = useCatsQuery(localCurrentPage)
const cats = computed(() => data.value || [])
</script>

<template>
  <section class="space-y-8">
    <header class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-semibold text-slate-900">Gatos</h1>
        <p class="text-slate-600">Listado de imágenes de gatos.</p>
      </div>
      <button
        type="button"
        class="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        @click="refetch()"
      >
        Recargar gatos
      </button>
    </header>

    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div v-if="isLoading">Cargando gatos…</div>
      <div v-else-if="isError" class="text-red-600">Error al cargar gatos. Inténtalo de nuevo.</div>
      <div v-else>
        <p class="text-sm text-slate-500">Total de gatos {{ cats.length }}</p>

        <PaginationController v-model:page="localCurrentPage" mode="infinite">
          <template #default="{ nextPage, prevPage, canNext, canPrev }">
            <span v-if="isFetching" class="ml-2 animate-pulse text-xs text-blue-600">
              (actualizando…)
            </span>
            <div class="flex items-center gap-2">
              <button
                type="button"
                class="cursor-pointer rounded border px-3 py-1 text-sm disabled:opacity-40"
                :disabled="!canPrev"
                @click="prevPage"
              >
                Anterior
              </button>
              <button
                type="button"
                class="cursor-pointer rounded border px-3 py-1 text-sm disabled:opacity-40"
                :disabled="!canNext"
                @click="nextPage"
              >
                Siguiente
              </button>
            </div>

            <div class="grid grid-cols-3 gap-4">
              <img v-for="cat in cats" :key="cat.id" :src="cat.url" alt="Cat image" />
            </div>
          </template>
        </PaginationController>
      </div>
    </div>
  </section>
</template>
