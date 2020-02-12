<template>
    <div class="detail">
        <!-- Slot giống như ng-content của angular 2+ -->
        <slot></slot>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            name: 'Hello world !'
        }
    }
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
