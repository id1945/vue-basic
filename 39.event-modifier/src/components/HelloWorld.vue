<template>
  <div>
    v-on tag<br/>
    <input v-on:change="callMethod"><br/>
    <input v-on:keyup="callMethod"><br/>
    Event Modifiers<br/>
    <button v-on:click.stop="callMethod">Test stop</button><br/>
    <button v-on:click.self="callMethod">Test self</button><br/>
    <button v-on:click.capture="callMethod">Test capture</button><br/>
    <button v-on:click.once="callMethod">Test once</button><br/>
    <button v-on:click.stop.prevent="callMethod">Test stop.prevent</button><br/>
    Key modifier<br/>
    <input v-on:keyup.enter="callMethod"><br/>
    <input v-on:keyup.ctrl.65="callMethod"><br/>
    <input v-on:keyup.ctrl.alt.65="callMethod"><br/>
    Exact<br/>
    <button @click.ctrl="callMethod">Ctrl</button><br/>
    <button @click.ctrl.exact="callMethod">Ctrl.exact</button><br/>
    <button @click.exact="callMethod">Exact</button>
  </div>
</template>

<script>
export default {
  methods: {
    callMethod(e) {
      console.log(e);
    }
  }
}
</script>
