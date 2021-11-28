<script setup name="NewTodo">
import Icon from './Icons/Icon.vue'

const emit = defineEmits(['add'])
</script>

<template>
  <div
    class="sticky h-14 w-14 left-1/2 inset-x-0 bottom-0 transform -translate-x-1/2 -translate-y-1/2"
  >
    <button
      @click="emit('add')"
      class="rounded-full h-full w-full bg-blue-500 flex justify-center items-center"
    >
      <Icon icon="plus" class="w-6 h-6 text-white" />
    </button>
  </div>
</template>
