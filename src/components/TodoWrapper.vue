<script setup name="TodoWrapper">
defineProps({
  isVisible: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="relative bg-gray-100">
      <h2 class="text-center text-xl mb-4">All Tasks</h2>
      <div
        class="overflow-y-auto p-2"
        style="max-height: 700px; min-height: 700px; min-width: 500px"
      >
        <slot />
      </div>
      <slot name="modal" />
    </div>
  </div>
</template>
