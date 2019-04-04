<template>
  <div>
      <ul class="list-group text-left">
          <li class="list-group-item" v-for="item in items" :key="item.id"><WorkListItem :event="item.message"/></li>
      </ul>
  </div>
</template>

<script>
import WorkListItem from './WorkListItem'
export default {
  name: 'Index',
  components: {
    WorkListItem
  },
  data () {
    return {
      items: [
        { message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
        { message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
      ]
    }
  }
}
</script>

<style scoped></style>
