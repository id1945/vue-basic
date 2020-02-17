<template>
  <div class="hello">
    <h1>{{count}}</h1>
    <button @click='increment'>+</button>
    <button @click='incrementBy(2)'>+ 2</button>
  </div>
</template>

<script>
export default {
  computed: { 
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations([
        'increment',
        'incrementBy'
    ])
  }
}
</script>
