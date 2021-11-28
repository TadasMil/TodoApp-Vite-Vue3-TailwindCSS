<script setup name="Modal">
import { computed } from 'vue'

import ModalWrapper from './ModalWrapper.vue'
import HTTPModal from './HTTPModal.vue'
import AddTodo from './AddTodo.vue'
import DeleteTodo from './DeleteTodo.vue'

const props = defineProps({
  modal: {
    type: Object,
    required: true
  },
  onResolve: {
    type: Function,
    default: () => {}
  },
  onCancel: {
    type: Function,
    default: () => {}
  }
})

const isDelete = computed(() => props.modal.type === 'DELETE_TODO')
const isAdd = computed(() => props.modal.type === 'ADD_TODO')
</script>

<template>
  <ModalWrapper>
    <AddTodo
      v-if="isAdd"
      v-bind="modal"
      :onResolve="onResolve"
      :onCancel="onCancel"
    />
    <DeleteTodo
      v-else-if="isDelete"
      v-bind="modal"
      :onResolve="onResolve"
      :onCancel="onCancel"
    />
    <HTTPModal v-else v-bind="modal" :onCancel="onCancel" />
  </ModalWrapper>
</template>
