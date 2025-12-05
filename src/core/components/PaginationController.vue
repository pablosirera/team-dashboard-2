<script setup lang="ts">
import { computed, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    page: number
    totalItems?: number
    pageSize?: number
    mode?: 'bounded' | 'infinite'
  }>(),
  {
    totalItems: 0,
    mode: 'bounded',
    pageSize: 10,
  },
)

const emit = defineEmits<{
  (e: 'update:page', value: number): void
}>()

const isBounded = computed(() => props.mode === 'bounded')

const totalPages = computed(() => {
  if (!isBounded.value) return Infinity
  if (props.totalItems === 0) return 1
  return Math.ceil(props.totalItems / props.pageSize)
})

const currentPage = computed({
  get: () => props.page,
  set: (value: number) => {
    if (value < 0) return
    if (isBounded.value && value > totalPages.value) return
    emit('update:page', value)
  },
})

const canPrev = computed(() => currentPage.value >= 1)
const canNext = computed(() => (isBounded.value ? currentPage.value < totalPages.value : true))

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
    if (!isBounded.value) return

    if (currentPage.value > totalPages.value) {
      emit('update:page', totalPages.value)
    }
  },
)
</script>

<template>
  <slot
    :current-page="currentPage"
    :total-pages="isBounded ? totalPages : null"
    :page-size="pageSize"
    :can-prev="canPrev"
    :can-next="canNext"
    :next-page="nextPage"
    :prev-page="prevPage"
    :go-to-page="goToPage"
  />
</template>
