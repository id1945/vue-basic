<template>
  <div>
    <h1>v-model custom</h1>
    <input :value="name" @input="name = $event.target.value"> 
    <pre>{{name}}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'Hello world !'
    }
  }
}
</script>
