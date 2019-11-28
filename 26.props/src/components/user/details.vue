<template>
    <div class="detail">
        <h3>Detail app - props</h3>
        {{nameBind}}
    </div>
</template>

<script>
export default {
    props: ['nameBind']
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