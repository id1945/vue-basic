<template>
  <div>
    text: {{ getTodoById(1).text }}
  </div>
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
