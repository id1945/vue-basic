<template>
  <div>
    text: {{ getTodoById.text }}
  </div>
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
