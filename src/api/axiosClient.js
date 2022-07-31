import axios from 'axios'
import config from 'config'

const axiosClient = axios.create({
  baseURL: config.axios.baseURL,
  headers: config.axios.headers
})

axiosClient.interceptors.request.use(
  (config) => {
    config.headers.authorization = 'Barox Dev'
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosClient.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosClient
