<template>
    <div class="detail">
        <slot></slot>
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
        background-color: aquamarine;
        float: left;
    }
</style>
.