<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title text-muted">Время событий</h5>
      <ul class="list-inline text-left">
        <li
          class="list-inline-item mb-1"
          v-for="item in times"
          v-bind:key="item.id"
        >
          <button
            type="button"
            class="btn pt-0 pb-0"
            v-bind:class="[item.disabled ? 'btn-secondary' : 'btn-outline-secondary']"
            :disabled="!!item.disabled"
            @click="setTimes(item.time)"
          >
            {{ item.time | moment("utc", "HH:mm") }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  created () {
    this.$store.commit('setTimes')
  },
  computed: {
    times () {
      return this.$store.getters.times
    }
  },
  methods: {
    setTimes (item) {
      this.$store.dispatch('changeTime', item)
    }
  }
}
</script>

<style scoped></style>
