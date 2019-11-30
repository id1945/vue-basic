<template>
    <div class="list">
        <h3>Switch Component</h3>
        <div class="container-center">
            <component :is="selectComponent"></component>
            <br>
            <button @click="selectComponent = 'DetailsApp'">DetailsApp</button>
            <button @click="selectComponent = 'EditApp'">EditApp</button>
        </div>
    </div>
</template>

<script>
import Details from "./details";
import Edit from "./edit";
export default {
    data: function() {
        return {
            selectComponent: 'DetailsApp'
        }
    },
    components: {
        DetailsApp: Details,
        EditApp: Edit
    }
}
</script>

<style scoped>
    .list {
        display: block;
        width: 100%;
        height: 300px;
        border: 1px solid blue;
    }
    .form-name {
        height: 50px;
    }
    .container-center {
        display: inline-block;
    }
</style>