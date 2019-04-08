import Vue from 'vue'
import Vuex from 'vuex'
import Notifications from 'vue-notification'

import * as api from '../api/task'
import timeList from './timeList'
import _ from 'lodash'

Vue.use(Vuex)
Vue.use(Notifications)

const store = new Vuex.Store({
  modules: {
    timeList: timeList
  },
  state: {
    newTask: {
      name: null,
      time: null
    },
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
      api
        .fetchTasks()
        .then(response => {
          const tasks = response.data
          commit('setTasksFetching', false)
          commit('setTasks', tasks)
        })
        .catch(() => {
          commit('setTasksFetching', false)
          commit('setTasksError', true)
          Vue.notify({
            title: 'Ошибка',
            text: 'Произошла ошибка загруки',
            type: 'error'
          })
        })
    },
    addTask ({dispatch, commit}, payload) {
      const data = this.state.newTask
      api.addTask(data).then(() => {
        Vue.notify({
          title: 'Добавлено новое событие',
          type: 'success'
        })
        dispatch('fetchTasks')
        payload.hide()
        commit('updateNameTask', null)
        commit('updateTimeTask', null)
      }, () => {
        Vue.notify({
          title: 'Ошибка добавления события',
          type: 'error'
        })
      })
    },
    deleteTask ({ dispatch }, id) {
      api.deleteTask(id).then(() => {
        Vue.notify({
          title: 'Событие удалено',
          type: 'success'
        })
        dispatch('fetchTasks')
      })
    }
  },
  getters: {
    Tasks: state => {
      return state.tasks
    },
    newTask: state => {
      return state.newTask
    },
    task: state => (id) => {
      return _.find(state.tasks.payload, {id: id})
    },
    checkedTask: state => {
      return _.filter(state.tasks.payload, {checked: true})
    }
  },
  mutations: {
    setTasks (state, tasks) {
      state.tasks.payload = tasks.map(item => {
        item.checked = false
        return item
      })
    },
    setTasksFetching (state, status) {
      state.tasks.fetching = status
    },
    setTasksError (state, status) {
      state.tasks.error = status
    },
    updateNameTask (state, name) {
      state.newTask.name = name
    },
    updateTimeTask (state, time) {
      state.newTask.time = time
    },
    updateCheckedTask (state, data) {
      const task = _.find(state.tasks.payload, {id: data.id})
      task.checked = data.value
    }
  }
})

export default store
