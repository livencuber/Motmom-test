<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title text-muted">Время событий</h5>
            <ul class="list-inline text-left">
                <li class="list-inline-item mb-1" v-for="item in times" v-bind:key="item.id">
                    <button type="button" class="btn btn-outline-secondary pt-0 pb-0" @click="setTimes(item)">{{item | moment("HH:mm")}}</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'index',
  computed: {
    times () {
      return this.$store.getters.times
    }
  },
  methods: {
    setTimes (item) {
      this.$store.dispatch('changeTime', item.utc().toString())
    }
  }
}
</script>

<style scoped>

</style>
