<template>
  <div>
    <label>One: 
      <input type="radio" v-model="message" value="one">
    </label>
    <label>Two:
      <input type="radio" v-model="message" value="two">
    </label>
    <pre>{{ message }}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    }
  }
}
</script>
