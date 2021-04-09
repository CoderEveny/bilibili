import axios from 'axios'
import router from '../router'
import Vue from 'vue'

export function request(config) {

  const instance = axios.create({
    baseURL: 'http://112.74.99.5:3000/web/api'
  }) 

  instance.interceptors.request.use(config => {
    if(localStorage.getItem('token') && localStorage.getItem('id')) {
      config.headers.Authorization = "Bearer " + localStorage.getItem('token')
    }
    return config
  }, error => {
    return Promise.reject(error)
  })
  
  instance.interceptors.response.use(response => {
    return response
  }, error => {
    if(error.response.status == 401 || error.response.status == 402) {
      router.replace('/login');
      Vue.prototype.$msg.fail(error.response.data.message)
    }
    return Promise.reject(error)
  })

  return instance(config)
}