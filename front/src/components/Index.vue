<template>
  <div class="container">
    <div class="jumbotron">
      <div class="d-flex justify-content-between mb-2 align-items-center">
        <h3 class="mb-0">Список событий</h3>
        <button type="button" class="btn btn-info">Добавить</button>
      </div>
      <WorkList/>
    </div>
  </div>
</template>

<script>
import WorkList from './WorkList'

export default {
  name: 'Index',
  components: {
    WorkList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
