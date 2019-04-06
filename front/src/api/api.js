import * as axios from 'axios'

const apiUrl = 'https://swapi.co/api/'

export const instance = axios.create({
  baseURL: apiUrl
})
