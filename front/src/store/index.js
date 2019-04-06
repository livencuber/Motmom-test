import Vue from 'vue'
import Vuex from 'vuex'

import * as api from '../api/task'

Vue.use(Vuex)

const store = new Vuex.Store(
  {
    state: {
      tasks: [
        { message: 'Lorem Ipsum is simply' },
        { message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
      ]
    },
    actions: {
      fetchTasks ({ commit }) {
        api.fetchTasks().then(
          (response) => {
            const tasks = response.data.results
            commit('setTasks', tasks)
          }
        )
      }
    },
    getters: {
      TaskList: state => {
        return state.tasks
      }
    },
    mutations: {
      setTasks (state, tasks) {
        state.tasks = tasks
      }
    }

  }
)

export default store
