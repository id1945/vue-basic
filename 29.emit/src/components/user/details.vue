<template>
    <div class="detail">
        <h3>Detail app - $emit</h3>
        <input type="text" placeholder="Enter name" v-model="name">
        <button @click="testEmit()">Emit</button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            name
        } 
    },
    methods: {
        testEmit: function() {
            this.$emit('keyEmit', this.name);
        }
    }
}
</script>

<style scoped>
    .detail {
        width: 300px;
        height: 200px;
        background-color: aquamarine;
        float: left;
    }
</style>
.