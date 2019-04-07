<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <div class="jumbotron pt-4">
          <div class="d-flex justify-content-between mb-2 align-items-center">
            <h3 class="mb-0">Список событий</h3>
            <b-button class="btn btn-info" v-b-modal.AddTask>Добавить</b-button>
          </div>
          <WorkList />
        </div>
      </div>
      <div class="col-4">
        <TimeList />
      </div>
    </div>
    <ModalAddTask />
  </div>
</template>

<script>
import WorkList from './WorkList'
import ModalAddTask from './ModalAddTask'
import TimeList from './TimeList'

export default {
  name: 'Index',
  components: {
    WorkList,
    ModalAddTask,
    TimeList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
