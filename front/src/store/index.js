import Vue from 'vue'
import Vuex from 'vuex'
import Notifications from 'vue-notification'

import * as api from '../api/task'

Vue.use(Vuex)
Vue.use(Notifications)

const store = new Vuex.Store(
  {
    state: {
      tasks: {
        payload: [],
        fetching: false,
        error: false
      }
    },
    actions: {
      fetchTasks ({ commit }) {
        commit('setTasksFetching', true)
        commit('setTasksError', false)
        api.fetchTasks().then(
          (response) => {
            const tasks = response.data
            commit('setTasksFetching', false)
            commit('setTasks', tasks)
          }
        ).catch(() => {
          commit('setTasksFetching', false)
          commit('setTasksError', true)
          Vue.notify({
            title: 'Ошибка',
            text: 'Произошла ошибка загруки',
            type: 'error'
          })
        })
      },
      addTask () {
        const data = {
          name: 'testbutton',
          time: '18:00'
        }
        api.addTask(data).then(() => {
          Vue.notify({
            title: 'Добавлено новое событие',
            type: 'succes'
          })
        })
      }
    },
    getters: {
      Tasks: state => {
        return state.tasks
      }
    },
    mutations: {
      setTasks (state, tasks) {
        state.tasks.payload = tasks
      },
      setTasksFetching (state, status) {
        state.tasks.fetching = status
      },
      setTasksError (state, status) {
        state.tasks.error = status
      }
    }

  }
)

export default store
