import { instance } from './api'
import qs from 'qs'

export const fetchTasks = () => instance.get('/tasks/')

export const addTask = data => instance.post('/task/add/', qs.stringify(data))
