<template>
    <div>
        <p>{{hello}}</p>
        <p>{{demo()}}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            hello: "Hello contact data !"
        }
    },
    methods: {
        demo: function() {
            return 'Hello method !';
        }
    }
}
</script>