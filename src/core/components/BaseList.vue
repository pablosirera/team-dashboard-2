<script setup lang="ts" generic="T extends { id: string | number }">
defineProps<{
  items: T[] | readonly T[]
}>()

const emit = defineEmits<{
  (e: 'select', item: T): void
}>()

defineSlots<{
  default: { item: T }
  empty?: () => void
}>()

const selectItem = (item: T) => {
  emit('select', item)
}
</script>

<template>
  <div class="mt-4 divide-y divide-slate-100">
    <div
      v-for="item in items"
      :key="item.id"
      class="flex flex-wrap items-center justify-between gap-4 py-4 hover:bg-slate-50"
      @click="selectItem(item)"
    >
      <slot :item="item" />
    </div>

    <p v-if="!items.length" class="py-6 text-center text-sm text-slate-500">
      <slot name="empty"> No encontramos resultados. </slot>
    </p>
  </div>
</template>
