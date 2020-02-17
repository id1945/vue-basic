<template>
  <div class="hello">
    <h1>{{count}}</h1>
    <button @click='increment'>+</button>
  </div>
</template>

<script>
export default {
  computed: mapState([
    'count'
  ]),
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    incrementType () {
      this.$store.commit({
        type: 'incrementBy',
        amount: 40
      })
    },
    incrementPayload () {
      this.$store.commit('incrementBy', { amount: 29 });
    }
  }
}
</script>
