<template>
  <div class="hello">
    <h1>{{count}}</h1>
    <button @click='increment'>+</button>
    <button @click='testAction'>-</button>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  computed: { 
    ...mapState(['count'])
  },
  methods: {
    increment () {
        this.$store.dispatch('incrementAsync');
    },
    decrement () {
        this.$store.commit('decrement');
    },
    testAction () {
        this.$store.dispatch('actionA').then(() => {
          console.log('OK');
        })
    }
  }
}
</script>
