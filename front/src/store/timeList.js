import Vue from 'vue'
import Moment from 'moment'
import { extendMoment } from 'moment-range'
import * as api from '../api/task'
import Notifications from 'vue-notification'

Vue.use(Notifications)

const moment = extendMoment(Moment)

const timeList =
  {
    state: {
      time_start: '18:00',
      time_end: '24:00',
      time_interval: 30
    },
    actions: {
      changeTime ({dispatch}, time) {
        const data = {
          time,
          tasks: this.getters.checkedTask.map((item) => (item.id))
        }
        api.changeTime(data).then((responce) => {
          Vue.notify({
            title: 'Время изменено',
            type: 'success'
          })
          dispatch('fetchTasks')
        })
      }

    },
    getters: {
      times: state => {
        const range = moment.range(moment(state.time_start, 'HH:mm'), moment(state.time_end, 'HH:mm'))
        const times = Array.from(range.by('minutes', {step: state.time_interval}))
        return times
      }
    },
    mutations: {
    }

  }

export default timeList
