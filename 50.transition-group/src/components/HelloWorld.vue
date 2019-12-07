<template>
  <div>
    <button type="button" class="btn btn-success mb-5" @click="add">Add</button>
    <button type="button" class="btn btn-danger ml-2 mb-5" @click="remove">Remove</button>
    <ul class="list-group w-25 m-auto">
      <transition-group name="flip">
        <li class="list-group-item list-group-item-secondary" v-for="(num, i) in numbers" :key="i">{{num}}</li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        numbers: [1, 2, 3, 4]
      }
    },
    methods: {
      add() {
        this.numbers.push(this.numbers.length + 1);
      },
      remove() {
        this.numbers.pop();
      }
    }

  }
</script>

<style scoped>
  .flip-enter-active {
    animation: flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
  }
  .flip-leave-active {
    animation: flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
  }

  @keyframes flip-horizontal-bottom {
    0% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
    }
    100% {
      -webkit-transform: rotateX(-180deg);
      transform: rotateX(-180deg);
    }
  }
</style>