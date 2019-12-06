<template>
  <div>
    <h3>{{name | uppercase}}</h3>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        name: 'Hello world !'
      }
    },
    filters: {
      uppercase(text) {
        return text.toUpperCase();
      }
    }
  }
</script>