<template>
  <div>
    <button @click="getData">Get BTC price</button>
    <br/>
    <br/>
    BTC price: {{btc_price}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      btc_price: ''
    }
  },
  methods: {
    getData() {
      this.$http.get('https://blockchain.info/ticker').then(response => {
        // success callback
        this.btc_price = response.body.USD.sell
        console.log(response);
      }, response => {
        // error callback
        console.error(response);
      });
    }
  }
}
</script>

<style scoped>
</style>
