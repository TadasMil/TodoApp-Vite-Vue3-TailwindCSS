<script setup name="Modal">
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'false'
  },
  title: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click'])

const isPrimary = computed(() => props.type === 'primary')
const isSecondary = computed(() => props.type === 'secondary')
const isDanger = computed(() => props.type === 'danger')
</script>

<template>
  <button
    type="button"
    class="py-2 px-4 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
    :class="{
      'bg-indigo-600 hover:bg-indigo-700': isPrimary,
      'bg-green-600 hover:bg-green-700': isSecondary,
      'bg-red-600 hover:bg-red-700': isDanger
    }"
    @click="emit('click')"
  >
    {{ title }}
  </button>
</template>
