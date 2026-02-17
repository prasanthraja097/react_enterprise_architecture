import axios, { AxiosError } from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import { API } from '@app/config'
import { tokenStorage } from '@infrastructure/auth/tokenStorage'

// Create a raw axios instance (used for refresh token requests so we don't recurse interceptors)
const rawAxios = axios.create({ baseURL: API.BASE_URL, timeout: API.TIMEOUT })

// Public axios instance used throughout the app
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API.BASE_URL,
  timeout: API.TIMEOUT,
})

// Concurrency-safe refresh handling
let isRefreshing = false
let failedQueue: Array<{
  resolve: (value?: unknown) => void
  reject: (reason?: any) => void
  config: AxiosRequestConfig
}> = []

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(({ resolve, reject, config }) => {
    if (error) reject(error)
    else {
      if (token && config.headers) config.headers['Authorization'] = `Bearer ${token}`
      resolve(rawAxios(config))
    }
  })
  failedQueue = []
}

// Attach access token to outgoing requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = tokenStorage.getAccessToken()
    if (token && config.headers) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  (error) => Promise.reject(error),
)

// Handle 401 -> attempt refresh and retry original requests
axiosInstance.interceptors.response.use(
  (res) => res,
  async (err: AxiosError & { config?: AxiosRequestConfig }) => {
    const originalConfig = err.config

    if (!originalConfig) return Promise.reject(err)

    // If unauthorized and we haven't retried yet
    if (err.response?.status === 401 && !(originalConfig as any)._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject, config: originalConfig })
        })
      }

      ;(originalConfig as any)._retry = true
      isRefreshing = true

      const refreshToken = tokenStorage.getRefreshToken()
      if (!refreshToken) {
        tokenStorage.clear()
        isRefreshing = false
        return Promise.reject(err)
      }

      try {
        const response = await rawAxios.post('/auth/refresh', { refreshToken })
        const { accessToken, refreshToken: newRefresh } = response.data
        tokenStorage.setTokens(accessToken, newRefresh)
        processQueue(null, accessToken)
        return axiosInstance(originalConfig)
      } catch (refreshError) {
        processQueue(refreshError, null)
        tokenStorage.clear()
        return Promise.reject(refreshError)
      } finally {
        isRefreshing = false
      }
    }

    return Promise.reject(err)
  },
)

export default axiosInstance
