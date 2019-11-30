<template>
    <div class="list">
        <h3>EventBus</h3>
        <div class="container-center">
            <details-app/>
            <edit-app/>
        </div>
    </div>
</template>

<script>
import Details from "./details";
import Edit from "./edit";
export default {
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