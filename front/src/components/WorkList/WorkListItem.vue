<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="form-check d-flex align-items-center">
      <input
        type="checkbox"
        class="form-check-input mt-0"
        :id="'task_' + event.id"
        v-model="checkTask"
      />
      <label class="form-check-label" :for="'task_' + event.id"
        ><span class="badge badge-primary">{{
          event.time | moment("utc", "HH:mm")
        }}</span>
        {{ event.name }}</label
      >
    </div>
    <button type="button" class="btn btn-danger ml-1" @click="deleteTask">
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  name: 'WorkListItem',
  props: ['event'],
  methods: {
    deleteTask () {
      this.$store.dispatch('deleteTask', this.event.id)
    }
  },
  computed: {
    checkTask: {
      get (e) {
        return this.$store.getters.task(e.event.id).checked
      },
      set (value) {
        this.$store.commit('updateCheckedTask', { id: this.event.id, value })
        const taskForTime = _.uniq(this.$store.getters.checkedTask.map((item) => (item.time)))
        if (taskForTime.length === 1) {
          this.$store.commit('disabledTime', {time: taskForTime[0]})
        } else {
          this.$store.commit('enableAllTime')
        }
      }
    }
  }
}
</script>

<style scoped></style>
