import { instance } from './api'
import qs from 'qs'

export const fetchTasks = () => instance.get('/tasks/')

export const addTask = data => instance.post('/task/add/', qs.stringify(data))

export const deleteTask = id => instance.delete(`/task/${id}/`)

export const changeTime = data => instance.post(`/tasks/time/`, qs.stringify(data))
