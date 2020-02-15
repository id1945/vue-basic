<template>
  <div class="hello">
    <h3>v-permission directive</h3>
    <div v-permission="['']">no permission</div>
    <div v-permission="['admin']">admin</div>
    <div v-permission="['editor']">editor</div>
    <div v-permission="['admin','editor']">admin - editor</div>

    <h3>v-if permission</h3>
    <div v-if="checkPermission([''])">no permission</div>
    <div v-if="checkPermission(['admin'])">admin</div>
    <div v-if="checkPermission(['editor'])">editor</div>
    <div v-if="checkPermission(['admin','editor'])">admin - editor</div>
  </div>
</template>

<script>
import permission from '@/directive/permission/index.js'
import checkPermission from '@/utils/permission'

export default {
  directives: { 
    permission 
  },
  methods: {
    checkPermission
  }
}
</script>

