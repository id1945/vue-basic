<template>
    <div class="list">
        <div class="form-name">
            <input type="text" placeholder="Enter name" v-model="name">
        </div>
        <div class="container-center">
            <details-app :propA="10" :propB="name"/>
        </div>
    </div>
</template>

<script>
// https://vuejs.org/v2/guide/components-props.html#Prop-Validation
import Details from "./details";
export default {
    data: function() {
        return {
            name: 'Hello world !'
        }
    },
    components: {
        DetailsApp: Details
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