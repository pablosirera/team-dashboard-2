<script setup lang="ts">
import BaseInput from '@/core/components/BaseInput.vue'
import BaseModal from '@/core/components/BaseModal.vue'
import { commentFormSchema, type CommentFormValues } from '../schemas/commentForm'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'

const isNewCommentModalOpen = defineModel<boolean>('open', { default: false })
const emit = defineEmits<{
  (event: 'save', payload: CommentFormValues): void
}>()

const { handleSubmit, resetForm, errors } = useForm<CommentFormValues>({
  validationSchema: toTypedSchema(commentFormSchema),
  initialValues: {
    name: '',
    body: '',
  },
})

const { value: name } = useField<CommentFormValues['name']>('name')
const { value: email } = useField<CommentFormValues['email']>('email')
const { value: body } = useField<CommentFormValues['body']>('body')

const closeModal = () => {
  isNewCommentModalOpen.value = false
  resetForm()
}

const sendNewCommentData = handleSubmit((values) => {
  console.log('Nuevo comentario creado (válido):', values)
  emit('save', values)
  closeModal()
})
</script>

<template>
  <BaseModal
    v-model:open="isNewCommentModalOpen"
    title="Crear nuevo comentario"
    @close="closeModal"
    @confirm="sendNewCommentData"
  >
    <template #default>
      <form class="flex flex-col gap-4" @submit.prevent="sendNewCommentData">
        <div class="flex flex-col">
          <BaseInput
            v-model="name"
            label="Nombre"
            placeholder="Escribe el nombre de quien comenta"
            required
          />
          <p v-if="errors.name" class="mt-1 text-xs text-red-600">
            {{ errors.name }}
          </p>
        </div>

        <div class="flex flex-col">
          <BaseInput
            v-model="email"
            label="Email"
            placeholder="Escribe el email"
            type="email"
            required
          />
          <p v-if="errors.email" class="mt-1 text-xs text-red-600">
            {{ errors.email }}
          </p>
        </div>

        <div class="flex flex-col">
          <label class="text-sm font-medium text-slate-700">
            Cuerpo del comentario
            <textarea
              v-model="body"
              placeholder="Escribe el comentario"
              class="mt-2 min-h-[120px] w-full rounded-xl border border-slate-200 px-4 py-2 text-sm focus:border-slate-400 focus:ring-2 focus:ring-slate-200 focus:outline-none"
              required
            />
          </label>
          <p v-if="errors.body" class="mt-1 text-xs text-red-600">
            {{ errors.body }}
          </p>
        </div>
      </form>
    </template>
  </BaseModal>
</template>
