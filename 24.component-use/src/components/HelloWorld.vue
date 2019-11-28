<template>
  <div class="hello">
    {{msg}}
    <datacontact-component/>
  </div>
</template>

<script>

import DataContact from "./DataContact.vue";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    "datacontact-component": DataContact
  }
}
</script>
