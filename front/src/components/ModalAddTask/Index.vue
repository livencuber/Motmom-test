<template>
    <div>
      <b-modal  hide-footer ref="AddTask" id="AddTask" title="Добавить событие">
        <b-form @submit="onSubmit">
        <div class="text-left">
          <span>Название</span>
        <b-form-input placeholder="Название" required v-model="nameTask" class="mb-4"></b-form-input>
        <span>Время</span>
        <b-form-input type="time"  v-model="timeTask" required class="w-25 mb-5"></b-form-input>
        </div>
        <b-button class="mb-3" type="submit" variant="info"  block>Добавить</b-button>
        </b-form>
      </b-modal>
    </div>
</template>

<script>
import Vue from 'vue'
import Notifications from 'vue-notification'
Vue.use(Notifications)

export default {
  name: 'ModalAddTask',
  methods: {
    onSubmit (e) {
      e.preventDefault()
      this.$store.dispatch('addTask', this.$refs['AddTask'])
    }
  },
  computed: {
    nameTask: {
      get () {
        return this.$store.state.newTask.name
      },
      set (value) {
        this.$store.commit('updateNameTask', value)
      }
    },
    timeTask: {
      get () {
        return this.$store.state.newTask.time
      },
      set (value) {
        this.$store.commit('updateTimeTask', value)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
