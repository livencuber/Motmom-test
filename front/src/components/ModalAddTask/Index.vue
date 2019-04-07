<template>
    <div>
      <b-modal  hide-footer id="AddTask" title="Добавить событие">
        <div class="text-left">
          <span>Название</span>
        <b-form-input placeholder="Название" v-model="nameTask" class="mb-4"></b-form-input>
        <span>Время</span>
        <b-form-input type="time"  v-model="timeTask"  class="w-25 mb-5"></b-form-input>
        </div>
        <b-button class="mb-3" variant="info"  block @click="toggleModal">Добавить</b-button>
      </b-modal>
    </div>
</template>

<script>
export default {
  name: 'ModalAddTask',
  methods: {
    toggleModal () {
      this.$store.dispatch('addTask')
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
