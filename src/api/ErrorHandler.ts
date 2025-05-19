import type { AxiosError } from 'axios'

export function handleApiError(error: unknown): string {
  if (!error || typeof error !== 'object') {
    return 'Unknown error occurred'
  }

  const err = error as AxiosError

  if (err.response) {
    switch (err.response.status) {
      case 401:
        return 'Unauthorized - please login'
      case 403:
        return 'Forbidden - you do not have access'
      case 404:
        return 'Resource not found'
      case 500:
        return 'Internal server error - please try again later'
      default:
        return `Error ${err.response.status}: ${err.response.statusText}`
    }
  } else if (err.request) {
    return 'Network error - please check your internet connection'
  } else {
    return err.message || 'An error occurred'
  }
}
