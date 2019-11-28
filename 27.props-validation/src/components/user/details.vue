<template>
    <div class="detail">
        <h3>Detail app - props</h3>
        {{propA}} - {{propB}}
    </div>
</template>

<script>
export default {
    props: {
        // Basic type check (`null` and `undefined` values will pass any type validation)
        propA: Number,
        // Multiple possible types
        propB: [String, Number],
        // Required string
        propC: {
            type: String,
            required: true
        },
        // Number with a default value
        propD: {
            type: Number,
            default: 100
        },
        // Object with a default value
        propE: {
            type: Object,
            // Object or array defaults must be returned from
            // a factory function
            default: function () {
                return { message: 'hello' }
            }
        },
        // Custom validator function
        propF: {
            validator: function (value) {
                // The value must match one of these strings
                return ['success', 'warning', 'danger'].indexOf(value) !== -1
            }
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