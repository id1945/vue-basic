<template>
  <div>
    <p v-html="'<h2>Hello v-html</h2>'"/>
    <i v-text="'Hello v-text'"/>
    <p v-hightligth="'red'">Test custom value = red</p>
    <h2 v-hightligth:background="'red'">Test agr</h2>
    <h2 v-hightligth:background.blink="'red'">Test modifiers</h2>
    <a href="https://vi.vuejs.org/v2/guide/custom-directive.html" target="_blank">Custom-directive</a>
  </div>
</template>

<script>
export default {
}
</script>
