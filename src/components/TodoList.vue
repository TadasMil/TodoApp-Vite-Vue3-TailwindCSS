<script setup name="TodoList">
import { computed } from 'vue'
import Icon from './Icons/Icon.vue'
import IconButton from './Buttons/IconButton.vue'

const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['complete', 'delete'])

const isTodoCompleted = computed(() => props.completed)
</script>

<template>
  <div
    class="shadow-md rounded-full p-4 my-2 flex justify-between items-center bg-white"
  >
    <div :class="{ 'opacity-20 line-through': isTodoCompleted }">
      <p class="text-lg">{{ title }}</p>
    </div>
    <div class="flex space-x-2">
      <IconButton
        class="shadow-md bg-red-500 flex p-1 rounded-full w-7 h-7"
        @click="emit('delete', id)"
      >
        <Icon icon="trash" class="w-full h-full text-white" />
      </IconButton>
      <IconButton
        class="shadow-md flex p-1 rounded-full w-7 h-7"
        :class="{
          'bg-white': !isTodoCompleted,
          'bg-green-400': isTodoCompleted
        }"
        @click="emit('complete', id)"
      >
        <Icon icon="tick" class="w-full h-full text-white" />
      </IconButton>
    </div>
  </div>
</template>
