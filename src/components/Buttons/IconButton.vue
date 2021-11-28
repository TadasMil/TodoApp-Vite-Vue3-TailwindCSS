<script setup name="IconButton">
const props = defineProps({
  icon: {
    type: String,
    default: 'false'
  },
  title: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click'])
</script>

<template>
  <button type="button" @click="emit('click')">
    <slot />
  </button>
</template>
