<script setup name="Checkbox">
const props = defineProps({
  modelValue: {
    type: String,
    required: true
  }
})
</script>

<template>
  <label class="inline-flex items-center">
    <input
      type="checkbox"
      class="form-checkbox"
      :value="modelValue"
      :checked="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>
