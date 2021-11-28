import { ref, readonly } from 'vue'

const isLoading = ref(false)

export const useLoading = () => {
  const setStateLoading = () => (isLoading.value = true)

  const setStateIdle = () => (isLoading.value = false)

  return { isLoading: readonly(isLoading), setStateLoading, setStateIdle }
}
