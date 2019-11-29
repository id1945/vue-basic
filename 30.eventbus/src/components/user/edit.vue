<template>
    <div class="detail">
        <h3>Edit app</h3>
        <input type="text" v-model="name"><br>
        <button @click="emitMethod()">Emit name</button>
    </div>
</template>

<script>
import {EventBus} from '../../main.js';
export default {
    data: function() {
        return {
            name
        }
    },
    methods: {
        emitMethod: function() {
            EventBus.$emit('changeName', this.name);
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