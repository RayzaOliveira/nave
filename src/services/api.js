import axios from 'axios'

const api = axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1'
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`

  return config
})

export default api