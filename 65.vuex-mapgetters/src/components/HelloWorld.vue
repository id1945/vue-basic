<template>
  <h1> text: {{ getTodoById(1).text }} </h1>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: { 
    ...mapGetters(['doneTodos', 'getTodoById'])
  }
  //computed: mapGetters([
  //   'doneTodos', 'getTodoById'
  //])
}
</script>
