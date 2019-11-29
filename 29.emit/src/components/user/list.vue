<template>
    <div class="list">
        <div class="form-name">
            {{name}}
        </div>
        <div class="container-center">
            <details-app @keyEmit="name = $event"/>
        </div>
    </div>
</template>

<script>
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