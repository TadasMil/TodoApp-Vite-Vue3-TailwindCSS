<script setup name="HTTPModal">
import { computed } from 'vue'

import Icon from '../Icons/Icon.vue'
import Button from '../Buttons/Button.vue'

const props = defineProps({
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
  icon: {
    type: String,
    default: ''
  },
  onCancel: {
    type: Function,
    default: () => {}
  }
})

const isSuccess = computed(() => props.type === 'SUCCESS')
const isError = computed(() => props.type === 'ERROR')
</script>

<template>
  <div class="flex flex-col items-center space-y-2">
    <Icon
      :icon="icon"
      class="h-8 w-8"
      :class="{ 'text-green-500': isSuccess, 'text-red-500': isError }"
    />
    <p class="text-center px-1">{{ title }}</p>
  </div>
  <Button type="primary" :title="reject" @click="onCancel()" />
</template>
