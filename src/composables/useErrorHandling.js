import { ref } from 'vue'
import { getErrorMessage } from '../api/errorHandling'

const error = ref(null)

export const useErrorHandling = () => {
  const setError = (status) => {
    error.value = getErrorMessage(status)
  }

  return { error, setError }
}
