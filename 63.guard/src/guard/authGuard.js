import store from "../store";

const authGuard = (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // authenticated: check TOKEN
    if (!store.state.authenticated) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // permission: check roles
      const roles = store.state.roles;
      const permissionRoles = to.meta.roles;

      const hasPermission = roles.some(role => {
        return permissionRoles ? permissionRoles.includes(role) : true;
      })

      if (hasPermission) {
        return next();
      } else {
        return next({ name: 'errorPage' });
      }
    }
  } else {
    return next();
  }
};

// https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
export default authGuard;