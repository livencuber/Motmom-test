import * as axios from 'axios'

const apiUrl = 'http://localhost:8000/api'

export const instance = axios.create({
  baseURL: apiUrl
})
