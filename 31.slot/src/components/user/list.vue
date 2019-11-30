<template>
    <div class="list">
        <h3>Slot</h3>
        <div class="container-center">
            <details-app>
                <h3>Details app</h3>
                <pre>Hello details App !</pre>
            </details-app>
            <edit-app>
                <h3>Edit app</h3>
                <pre>Hello Edit App !</pre>
            </edit-app>
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