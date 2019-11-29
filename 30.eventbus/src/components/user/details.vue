<template>
    <div class="detail">
        <h3>Detail app</h3>
        <pre>{{name}}</pre>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            name: 'Hello world !'
        }
    },
    created: function() {
        this.$eventBus.$on('DATA_PUBLISHED', this.changeName);
    },
    beforeDestroy() {
        this.$eventBus.$off('DATA_PUBLISHED');
    },
    methods: {
        changeName(name) {
            this.name = name;
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