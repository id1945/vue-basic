// import store from '@/store'

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