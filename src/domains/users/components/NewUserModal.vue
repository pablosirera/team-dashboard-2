<script setup lang="ts">
import BaseInput from '@/core/components/BaseInput.vue'
import BaseModal from '@/core/components/BaseModal.vue'
import { userFormSchema, UserFormValues } from '../schemas/userForm'
import { toTypedSchema } from '@vee-validate/zod'
import { useField, useForm } from 'vee-validate'

const isNewUserModalOpen = defineModel<boolean>('isNewUserModalOpen', { default: false })

const { handleSubmit, resetForm, errors } = useForm<UserFormValues>({
  validationSchema: toTypedSchema(userFormSchema),
  initialValues: {
    role: 'moderator',
    language: 'es',
  },
})
const { value: name } = useField<UserFormValues['name']>('name')
const { value: email } = useField<UserFormValues['email']>('email')
const { value: role } = useField<UserFormValues['role']>('role')
const { value: language } = useField<UserFormValues['language']>('language')
const { value: phone } = useField<UserFormValues['phone']>('phone')
const { value: nickname } = useField<UserFormValues['nickname']>('nickname')

const roles: UserFormValues['role'][] = ['admin', 'user', 'moderator']
const languages: UserFormValues['language'][] = ['es', 'en', 'fr', 'de']

const closeModal = () => {
  isNewUserModalOpen.value = false
  resetForm()
}

const sendNewUserData = handleSubmit((values) => {
  console.log('Nuevo usuario creado (válido):', values)
  closeModal()
})
</script>

<template>
  <BaseModal
    v-model:open="isNewUserModalOpen"
    title="Crear nuevo usuario"
    @close="closeModal"
    @confirm="sendNewUserData"
  >
    <template #default>
      <form class="flex flex-col gap-4" @submit.prevent="sendNewUserData">
        <div class="flex flex-col">
          <BaseInput
            v-model="name"
            label="Nombre"
            placeholder="Escribe el nombre del usuario"
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
            placeholder="Escribe el email del usuario"
            type="email"
            required
          />
          <p v-if="errors.email" class="mt-1 text-xs text-red-600">
            {{ errors.email }}
          </p>
        </div>

        <div class="flex flex-col">
          <label for="role" class="mb-2 text-sm font-medium text-gray-700">Rol</label>
          <select
            id="role"
            v-model="role"
            class="rounded-xl border border-slate-200 px-3 py-2 transition-colors hover:border-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option v-for="r in roles" :key="r" :value="r">
              {{ r.charAt(0).toUpperCase() + r.slice(1) }}
            </option>
          </select>
          <p v-if="errors.role" class="mt-1 text-xs text-red-600">
            {{ errors.role }}
          </p>
        </div>

        <div class="flex flex-col">
          <label for="language" class="mb-2 text-sm font-medium text-gray-700">Idioma</label>
          <select
            id="language"
            v-model="language"
            class="rounded-xl border border-slate-200 px-3 py-2 transition-colors hover:border-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            required
          >
            <option v-for="lang in languages" :key="lang" :value="lang">
              {{ lang.toUpperCase() }}
            </option>
          </select>
          <p v-if="errors.language" class="mt-1 text-xs text-red-600">
            {{ errors.language }}
          </p>
        </div>

        <div class="flex flex-col">
          <BaseInput
            v-model="phone"
            label="Teléfono"
            placeholder="Escribe el teléfono del usuario"
            type="tel"
          />
          <p v-if="errors.phone" class="mt-1 text-xs text-red-600">
            {{ errors.phone }}
          </p>
        </div>

        <div class="flex flex-col">
          <BaseInput
            v-model="nickname"
            label="Nickname (Admin)"
            placeholder="Escribe el nickname del usuario"
          />
          <p v-if="errors.nickname" class="mt-1 text-xs text-red-600">
            {{ errors.nickname }}
          </p>
        </div>
      </form>
    </template>
  </BaseModal>
</template>
