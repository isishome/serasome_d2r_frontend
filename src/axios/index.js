import axios from 'axios'
import { Notify } from 'quasar'
import { router } from '@/router'

// create axios instance
export const instance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_BE_HOST ? import.meta.env.VITE_APP_BE_HOST : window.location.protocol.concat('//', window.location.hostname, ':', import.meta.env.VITE_APP_BE_PORT)}`,
  withCredentials: true
})

// Add a response interceptor
instance.interceptors.response.use((response) => {

  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, (error) => {
  const errMsg = error.response.data || error.response.statusText
  const url = error.response.config.url
  if (error.response.status === 401 && url !== 'info') {
    router.push({ name: 'sign' })
  }
  else if (errMsg) {
    Notify.create({
      message: errMsg,
      color: 'negative'
    })
  }
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})