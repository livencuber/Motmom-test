import { instance } from './api'

export const fetchTasks = () => instance.get('/planets/')
