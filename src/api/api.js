import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/', 
  headers: {
    'Content-Type': 'application/json'
  }
})


// GET
export const getData = async (endpoint) => {
  try {
    const response = await apiClient.get(endpoint)
    return response.data
  } catch (error) {
    console.error('GET Error:', error)
    throw error
  }
}

// POST
export const postData = async (endpoint, data) => {
  try {
    const response = await apiClient.post(endpoint, data)
    return response.data
  } catch (error) {
    console.error('POST Error:', error)
    throw error
  }
}

// PUT
export const putData = async (endpoint, data) => {
  try {
    const response = await apiClient.put(endpoint, data)
    return response.data
  } catch (error) {
    console.error('PUT Error:', error)
    throw error
  }
}

// DELETE
export const deleteData = async (endpoint) => {
  try {
    const response = await apiClient.delete(endpoint)
    return response.data
  } catch (error) {
    console.error('DELETE Error:', error)
    throw error
  }
}


export default apiClient