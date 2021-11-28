<script setup name="DeleteTodo">
import Button from '../Buttons/Button.vue'
import Icon from '../Icons/Icon.vue'

defineProps({
  type: {
    type: String,
    default: 'default'
  },
  title: {
    type: String,
    default: ''
  },
  confirm: {
    type: String,
    default: ''
  },
  reject: {
    type: String,
    default: ''
  },
  onCancel: {
    type: Function,
    default: () => {}
  },
  onResolve: {
    type: Function,
    default: () => {}
  }
})
</script>

<template>
  <div class="flex flex-col space-y-4">
    <div class="text-center space-y-2">
      <Icon icon="trash" class="w-10 h-10 text-red-500" />
      <p>{{ title }}</p>
    </div>
    <div class="flex space-x-2">
      <Button type="danger" :title="reject" @click="onCancel()" />
      <Button type="secondary" :title="confirm" @click="onResolve()" />
    </div>
  </div>
</template>
