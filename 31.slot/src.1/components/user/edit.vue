<template>
    <div class="detail">
        <h3>Edit app</h3>
        <input type="text" v-model="name"><br>
        <button @click="emitMethod()">Emit name</button>
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
        emitMethod: function() {
            this.$eventBus.$emit('DATA_PUBLISHED', this.name);
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