<template>
    <div class="list">
        <li v-for="(num, id) in 10" :key="id">{{num}}</li>
    </div>
</template>

<style scoped>
    .list {
        display: block;
        width: 100%;
        height: 300px;
        border: 1px solid blue;
    }
</style>