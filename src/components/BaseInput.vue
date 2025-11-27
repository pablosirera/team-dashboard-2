<script setup lang="ts">
defineOptions({
  name: 'EscuelaBaseInput',
  inheritAttrs: false,
})

withDefaults(
  defineProps<{
    label: string
    type?: 'text' | 'email' | 'password'
    placeholder?: string
    required: boolean
  }>(),
  {
    type: 'text',
    placeholder: '',
    required: false,
  },
)

const modelValue = defineModel<string>()
</script>

<template>
  <label class="block">
    <span class="text-sm font-medium text-slate-700">{{ label }}</span>
    <input
      v-model="modelValue"
      :type="type"
      :placeholder="placeholder"
      class="mt-2 w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-slate-400 focus:ring-2 focus:ring-slate-200 focus:outline-none"
      :required="required"
    />
  </label>
</template>
