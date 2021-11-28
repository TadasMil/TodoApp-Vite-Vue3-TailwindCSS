<script setup name="Loading">
import Icon from '../Icons/Icon.vue'

defineProps({
  message: {
    type: String,
    default: 'Kraunama.. Tai gali užtrukti kelias sekundes.'
  }
})
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="flex flex-col text-primary items-center justify-center">
      <Icon icon="loading" class="animate-spin w-8 h-8 mx-auto" />
    </div>
  </div>
</template>
