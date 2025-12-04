<script setup lang="ts">
import { computed, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    page: number
    totalItems: number
    pageSize?: number
  }>(),
  {
    pageSize: 10,
  },
)

const emit = defineEmits<{
  (e: 'update:page', value: number): void
}>()

const totalPages = computed(() => {
  if (props.totalItems === 0) return 1
  return Math.ceil(props.totalItems / props.pageSize)
})

const currentPage = computed({
  get: () => props.page,
  set: (value: number) => {
    if (value < 1 || value > totalPages.value) return
    emit('update:page', value)
  },
})

const canPrev = computed(() => currentPage.value > 1)
const canNext = computed(() => currentPage.value < totalPages.value)

function nextPage() {
  if (!canNext.value) return
  currentPage.value = currentPage.value + 1
}

function prevPage() {
  if (!canPrev.value) return
  currentPage.value = currentPage.value - 1
}

function goToPage(page: number) {
  currentPage.value = page
}

watch(
  () => props.totalItems,
  () => {
    if (currentPage.value > totalPages.value) {
      emit('update:page', totalPages.value)
    }
  },
)
</script>

<template>
  <slot
    :current-page="currentPage"
    :total-pages="totalPages"
    :page-size="pageSize"
    :can-prev="canPrev"
    :can-next="canNext"
    :next-page="nextPage"
    :prev-page="prevPage"
    :go-to-page="goToPage"
  />
</template>
