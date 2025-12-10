<script setup lang="ts">
defineProps<{
  title?: string
}>()

const isOpen = defineModel<boolean>('open', { default: false })

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'confirm'): void
}>()

const handleClose = () => {
  isOpen.value = false
  emit('close')
}

const handleConfirm = () => {
  emit('confirm')
}
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
        @click.self="handleClose"
      >
        <div class="w-full max-w-md rounded-lg bg-white p-4 shadow-lg">
          <header class="mb-3 flex items-center justify-between">
            <h2 v-if="title" class="text-lg font-semibold">
              {{ title }}
            </h2>
            <button
              type="button"
              class="text-sm text-gray-500 hover:text-gray-800"
              @click="handleClose"
            >
              ✕
            </button>
          </header>

          <section class="mb-4">
            <slot />
          </section>

          <footer class="flex justify-end gap-2">
            <slot name="footer">
              <button type="button" class="rounded border px-3 py-1 text-sm" @click="handleClose">
                Cerrar
              </button>
              <button
                type="button"
                class="rounded bg-blue-600 px-3 py-1 text-sm text-white"
                @click="handleConfirm"
              >
                Aceptar
              </button>
            </slot>
          </footer>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
