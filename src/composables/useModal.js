import { ref } from 'vue'
import { Modal } from './classes/Modal'

export const modals = {
  success: (message) => {
    Modal.success().message(message).show(useModal().setModalData)
  },
  addTodo: (cb) => {
    Modal.addTodo()
      .confirmText('Submit')
      .rejectText('Cancel')
      .onConfirm(cb)
      .show(useModal().setModalData)
  },
  deleteTodo: (cb) => {
    Modal.deleteTodo()
      .confirmText('Delete')
      .message('Are you sure you want to delete this todo?')
      .rejectText('Cancel')
      .onConfirm(cb)
      .show(useModal().setModalData)
  },
  httpError: (message) => {
    Modal.error().message(message).show(useModal().setModalData)
  }
}

const modal = ref(null)

const isModalVisible = ref(false)

export const useModal = () => {
  const setModalData = (data) => {
    modal.value = data
    isModalVisible.value = true
  }

  const onCancel = () => {
    modal.value = null
    isModalVisible.value = false
  }

  const onResolve = (todo) => {
    modal.value.onConfirm(todo)
    modal.value = null
    isModalVisible.value = false
  }

  return {
    modal,
    isModalVisible,
    setModalData,
    onCancel,
    onResolve
  }
}
