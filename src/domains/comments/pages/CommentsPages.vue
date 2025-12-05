<script setup lang="ts">
import { useFetch } from '@/core/composables/useFetch'
import { computed, ref } from 'vue'
import { Comment } from '../types/Comment'
import BaseList from '@/core/components/BaseList.vue'
import PaginationController from '@/core/components/PaginationController.vue'

const { data, execute } = useFetch<Comment[]>('https://jsonplaceholder.typicode.com/comments')
const comments = computed(() => data.value || [])

const localCurrentPage = ref(1)
const localTotalItems = computed(() => comments.value.length)
</script>

<template>
  <section class="space-y-8">
    <header class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h1 class="text-3xl font-semibold text-slate-900">Comentarios</h1>
        <p class="text-slate-600">Comentarios hechos por los usuarios.</p>
      </div>
    </header>

    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <button
        type="button"
        class="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
        @click="execute()"
      >
        Recargar comentarios
      </button>

      <div class="mt-6">
        <p class="text-sm text-slate-500">Total de comentarios {{ comments.length }}</p>

        <PaginationController v-model:page="localCurrentPage" :total-items="localTotalItems">
          <template
            #default="{ nextPage, prevPage, canNext, canPrev, currentPage, pageSize, totalPages }"
          >
            <p>Página {{ currentPage }} de {{ totalPages }}</p>

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

            <BaseList :items="comments.slice((currentPage - 1) * pageSize, currentPage * pageSize)">
              <template #default="{ item }">
                <div>
                  <p class="font-medium text-slate-900">{{ item.name }}</p>
                  <p class="text-sm text-slate-500">{{ item.email }}</p>
                </div>

                <p>{{ item.body }}</p>
              </template>
            </BaseList>
          </template>
        </PaginationController>
      </div>
    </div>
  </section>
</template>
