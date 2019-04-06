<template>
  <div class="container">
    <div class="jumbotron">
      <div class="d-flex justify-content-between mb-2 align-items-center">
        <h3 class="mb-0">Список событий</h3>
        <b-button class="btn btn-info" v-b-modal.AddTask>Добавить</b-button>
      </div>
      <WorkList/>
    </div>
    <div>
      <b-modal  hide-footer id="AddTask" title="Добавить событие">
        <div class="text-left">
          <span>Название</span>
        <b-form-input placeholder="Название" class="mb-4"></b-form-input>
        <span>Время</span>
        <b-form-input type="time" class="w-25 mb-5"></b-form-input>
        </div>
        <b-button class="mb-3" variant="info" block @click="toggleModal">Добавить</b-button>
      </b-modal>
    </div>
  </div>
</template>

<script>
import WorkList from './WorkList'

export default {
  name: 'Index',
  components: {
    WorkList
  },
  methods: {
    toggleModal () {
      this.$store.dispatch('addTask')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
