<template>
  <div>
      <ul class="list-group text-left">
          <li class="list-group-item" v-if="error">Сервер временно не доступен</li>
          <li class="list-group-item text-center" v-if="fetching"><Loader></Loader></li>
          <li class="list-group-item"  v-for="item in items" :key="item.id"><WorkListItem :event="item"/></li>
      </ul>
  </div>
</template>

<script>
import Loader from '../Shared/Loader'
import WorkListItem from './WorkListItem'
export default {
  name: 'Index',
  components: {
    WorkListItem,
    Loader
  },
  created () {
    this.$store.dispatch('fetchTasks')
  },
  computed: {
    items () {
      return this.$store.getters.Tasks.payload
    },
    fetching () {
      return this.$store.getters.Tasks.fetching
    },
    error () {
      return this.$store.getters.Tasks.error
    }
  }
}
</script>

<style scoped></style>
