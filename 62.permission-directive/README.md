[Demo](https://id1945.github.io/vue-basic/62.permission-directive/dist "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 62.permission-directive
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/62.permission-directive
npm install
npm run serve
```

````html
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
````

````javascript
export default{
  inserted(el, binding) {
    const { value } = binding
    // const roles = store.getters && store.getters.roles
    const roles = ["admin", "editor"];
    if (value && value instanceof Array && value.length > 0) {
      const permissionRoles = value

      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role)
      })

      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
      return true;
    } else {
      throw new Error(`need roles! Like v-permission="['admin','editor']"`)
    }
  }
}
````

````javascript
export default function checkPermission(value) {
  if (value && value instanceof Array && value.length > 0) {
    // const roles = store.getters && store.getters.roles
    const roles = ["admin", "editor"];
    const permissionRoles = value

    const hasPermission = roles.some(role => {
      return permissionRoles.includes(role)
    })

    if (!hasPermission) {
      return false
    }
    return true
  } else {
    console.error(`need roles! Like v-permission="['admin','editor']"`)
    return false
  }
}
````