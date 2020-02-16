<template>
  <div class="hello">
    <h1>{{ count }}</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      localCount: 4
    }
  },
  computed: {
    ...mapState(['count'])
  }
}
//     mapState({
//         count: state => state.count,
//         countPlusLocalState (state) {
//             return state.count + this.localCount
//         }
//     })
</script>
