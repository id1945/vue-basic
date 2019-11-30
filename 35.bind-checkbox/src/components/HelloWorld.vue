<template>
  <div>
    <label>
      <input type="checkbox" value="Daniel" v-model="namesThatRhyme"/>
      Daniel
    </label>
    <label>
      <input type="checkbox" value="Nathaniel" v-model="namesThatRhyme"/>
      Nathaniel
    </label>
    <label>
      <input type="checkbox" value="Hubert" v-model="namesThatRhyme"/>
      Hubert
    </label>
    <pre>{{namesThatRhyme.join(', ')}}</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      namesThatRhyme: []  
    }
  }
}
</script>
