<template>
    <div class="detail">
        <!-- Slot giống như ng-content của angular 2+ -->
        <slot name="title"></slot>
        <hr>
        <slot name="content"></slot>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            name
        }
    }
}
</script>

<style scoped>
    .detail {
        width: 300px;
        height: 200px;
        background-color: lightseagreen;
        float: left;
    }
</style>
.
