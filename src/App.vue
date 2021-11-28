<script setup>
import { watch } from 'vue'
import { useModal } from './composables/useModal'

import TodoLayout from './components/TodoLayout.vue'
import TodoWrapper from './components/TodoWrapper.vue'
import Modal from './components/Modals/Modal.vue'

const { modal, isModalVisible, onResolve, onCancel } = useModal()

watch(
  () => modal.value,
  (val) => console.log(val),
  { deep: true }
)
</script>

<template>
  <TodoWrapper>
    <TodoLayout />
    <template #modal>
      <Modal
        v-if="isModalVisible"
        :modal="modal"
        :onResolve="onResolve"
        :onCancel="onCancel"
      />
    </template>
  </TodoWrapper>
</template>
