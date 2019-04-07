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
    </div>
    <ModalAddTask/>
  </div>
</template>

<script>
import WorkList from './WorkList'
import ModalAddTask from './ModalAddTask'

export default {
  name: 'Index',
  components: {
    WorkList,
    ModalAddTask
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
