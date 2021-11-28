<script setup name="AddTodo">
import { ref } from 'vue'

import Button from '../Buttons/Button.vue'

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

const todo = ref('')
</script>

<template>
  <div class="space-y-2">
    <label class="font-bold">New Todo</label>
    <input
      v-model="todo"
      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      type="text"
    />
  </div>
  <div class="flex space-x-2">
    <Button type="danger" :title="reject" @click="onCancel()" />
    <Button type="secondary" :title="confirm" @click="onResolve(todo)" />
  </div>
</template>
