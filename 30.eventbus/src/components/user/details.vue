<template>
    <div class="detail">
        <h3>Detail app</h3>
        <pre>{{name}}</pre>
    </div>
</template>

<script>
import {EventBus} from '../../main.js';
export default {
    data: function() {
        return {
            name: 'Hello world !'
        }
    },
    create() {
        EventBus.$on('changeName', (name) => {
            alert(this.name);
            this.name = name;
        });
    },
    beforeDestroy() {
        this.$eventHub.$off('changeName');
    },
}
</script>

<style scoped>
    .detail {
        width: 300px;
        height: 200px;
        background-color: #8bc34a;
        float: left;
    }
</style>
.