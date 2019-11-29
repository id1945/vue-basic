<template>
    <div class="detail">
        <h3>Detail app</h3>
        <h3>Callback Function</h3>
        <input type="text" placeholder="Enter name" v-model="name">
        <button @click="testEmit()">Emit</button><br/>
        <button @click="resetNameFn()">CallbackFn</button><br/>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        resetNameFn: Function
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