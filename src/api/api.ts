
import axios from "axios"
import type { Post } from '../types/types'
import { handleApiError } from "./ErrorHandler"

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: {
    'Content-Type': 'application/json'
  }
})

// GET
export const getData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await apiClient.get(endpoint)
    return response.data
  } catch (error) {
    const message = handleApiError(error)
    console.error('GET Error:', message)
    throw new Error(message)
  }
}

// POST
export const postData = async <T>(endpoint: string, data: unknown): Promise<T> => {
  try {
    const response = await apiClient.post(endpoint, data)
    return response.data
  } catch (error) {
    const message = handleApiError(error)
    console.error('GET Error:', message)
    throw new Error(message)
  }
}

// PUT
export const putData = async <T>(endpoint: string, data: unknown): Promise<T> => {
  try {
    const response = await apiClient.put(endpoint, data)
    return response.data
  } catch (error) {
    const message = handleApiError(error)
    console.error('GET Error:', message)
    throw new Error(message)
  }
}

// DELETE
export const deleteData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await apiClient.delete(endpoint)
    return response.data
  } catch (error) {
    const message = handleApiError(error)
    console.error('GET Error:', message)
    throw new Error(message)
  }
}

export default apiClient
