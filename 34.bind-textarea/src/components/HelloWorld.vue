<template>
  <div>
    <textarea cols="60" rows="5" v-model="desc"></textarea><br/>
    <textarea cols="60" rows="5" v-model="desc"></textarea>
    <div style="white-space: pre">{{desc}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      desc: 'Hello textarea !'
    }
  }
}
</script>
