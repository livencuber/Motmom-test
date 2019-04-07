import Moment from 'moment'
import { extendMoment } from 'moment-range'

const moment = extendMoment(Moment)

const timeList =
  {
    state: {
      time_start: '18:00',
      time_end: '24:00',
      time_interval: 30
    },
    actions: {

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
