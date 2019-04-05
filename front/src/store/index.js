import Vue from 'vue'
import Vuex from 'vuex'

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
      fetchTasks () {

      }
    },
    getters: {
      TaskList: state => {
        return state.tasks
      }
    }

  }
)

export default store
