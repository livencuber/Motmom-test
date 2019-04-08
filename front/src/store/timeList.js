import Vue from 'vue'
import Moment from 'moment'
import { extendMoment } from 'moment-range'
import * as api from '../api/task'
import Notifications from 'vue-notification'
import _ from 'lodash'

Vue.use(Notifications)

const moment = extendMoment(Moment)

const timeList = {
  state: {
    time_start: '15:00',
    time_end: '24:00',
    time_interval: 45,
    times: []
  },
  actions: {
    changeTime ({ dispatch, commit }, time) {
      const data = {
        time: moment
          .unix(time)
          .utc()
          .format(),
        tasks: this.getters.checkedTask.map(item => item.id)
      }
      api.changeTime(data).then(responce => {
        Vue.notify({
          title: 'Время изменено',
          type: 'success'
        })
        dispatch('fetchTasks')
        commit('enableAllTime')
      })
    }
  },
  getters: {
    times: state => {
      return state.times
    }
  },
  mutations: {
    setTimes (state) {
      const timeStartArr = state.time_start.split(':')
      const timeEndArr = state.time_end.split(':')
      const range = moment.range(
        moment
          .utc(0)
          .set({ h: timeStartArr[0], m: timeStartArr[1] })
          .format(),
        moment
          .utc(0)
          .set({ h: timeEndArr[0], m: timeEndArr[1] })
          .format()
      )
      const times = Array.from(
        range.by('minutes', { step: state.time_interval })
      )
      state.times = times.map(item => {
        return { time: item.unix(), disabled: false }
      })
    },
    disabledTime (state, data) {
      const time = _.find(state.times, { time: moment(data.time).unix() })
      if (time) {
        time.disabled = true
      }
    },
    enableAllTime (state) {
      state.times = state.times.map(item => {
        return { ...item, disabled: false }
      })
    }
  }
}

export default timeList
