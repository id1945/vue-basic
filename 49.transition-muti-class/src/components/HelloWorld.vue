<template>
  <div>
    <button @click="show = !show" class="btn btn-success">Show message</button>
    <br/>
    <br/>
    <transition
      enter-class="fade-enter"
      enter-active-class="fade-enter-active"
      leave-class="fade-leave"
      leave-active-class="fade-leave-active">
      <div v-if="show" class="alert alert-success w-25 m-auto" role="alert">
        This is a primary alert—check it out!
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>

<style scoped>
  .fade-enter {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 1s;
  }
  .fade-leave {
    /* opacity: 0; */
  }
  .fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
  }
</style>
