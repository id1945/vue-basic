<template>
  <div>
    <button @click="toggleMe">Toggle Me</button>
    <div v-if="isTrue">
      <h1>Hello world</h1>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isTrue: function () {
      return this.$store.getters.isTrue
    }
  },
  methods: {
    toggleMe: function () {
      this.$store.dispatch('toggle')
    }
  }
}
</script>