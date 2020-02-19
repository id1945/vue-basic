<template>
  <div class="hello">
    <h1>{{count}}</h1>
    <button @click='increment'>+</button>
    <button @click='incrementType'>+ Type</button>
    <button @click='incrementPayload'>+ Payload</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['count'])
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    incrementType () {
      this.$store.commit({
        type: 'incrementBy',
        amount: 2
      })
    },
    incrementPayload () {
      this.$store.commit('incrementBy', { amount: 10 });
    }
  }
}
</script>
