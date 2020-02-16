<template>
  <h1> text: {{ getTodoById.text }} </h1>
</template>

<script>
export default {
  computed: {
    getTodoById () {
      return this.$store.getters.getTodoById(1)
    }
  }
}
</script>
