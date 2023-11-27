import axios from 'axios'

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
})

// const $api = axios.create({
//   withCredentials: true,
//   baseURL: process.env.REACT_APP_BASE_URL,
// })

// $api.interceptors.request.use((config): any => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
//   return config
// })

// export default $api
