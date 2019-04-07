import Vue from 'vue'
import Moment from 'moment'
import { extendMoment } from 'moment-range'
import * as api from '../api/task'
import Notifications from 'vue-notification'
import _ from 'lodash'

Vue.use(Notifications)

const moment = extendMoment(Moment)

const timeList =
  {
    state: {
      time_start: '18:00',
      time_end: '24:00',
      time_interval: 30,
      times: []
    },
    actions: {
      changeTime ({dispatch, commit}, time) {
        console.log(moment.unix(time).utc().format())
        const data = {
          time: moment.unix(time).utc().format(),
          tasks: this.getters.checkedTask.map((item) => (item.id))
        }
        api.changeTime(data).then((responce) => {
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
        const range = moment.range(moment.utc(0).set({h: 18}).format(), moment.utc(0).set({h: 24}).format())
        const times = Array.from(range.by('minutes', {step: state.time_interval}))
        state.times = times.map((item) => {
          return { time: item.unix(), disabled: false }
        })
      },
      disabledTime (state, data) {
        const time = _.find(state.times, {time: moment(data.time).unix()})
        if (time) {
          time.disabled = true
        }
      },
      enableAllTime (state) {
        state.times = state.times.map((item) => {
          return {...item, disabled: false}
        })
      }
    }

  }

export default timeList
