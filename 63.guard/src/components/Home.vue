<template>
  <div>
    Home template
  </div>
</template>

<script>
export default {
  //-------------------------------------------------//
  // Guard điều hướng route bên trong các component  //
  //-------------------------------------------------//
  //beforeRouteEnter (to, from, next) {
    //console.log(to, from, next);
    // được gọi trước route mà render component này được xác nhận.
    // không truy cập tới đối tượng component `this`,
    // trước khi nó được tạo khi guard này được gọi!
  //},
  //beforeRouteUpdate (to, from, next) {
    //console.log(to, from, next);
    // được gọi khi route render component này thay đổi,
    // nhưng component này vẫn tái sử dụng trong route mới.
    // Ví dụ, route với tham số động `/foo/:id`, khi ta
    // điều hướng giữa `/foo/1` và `/foo/2` thì đối tượng component `Foo`
    // vẫn được sử dụng, và hook này sẽ được gọi khi điều đó xảy ra.
    // truy cập tới đối tượng component `this`.
  //},
  //beforeRouteLeave (to, from, next) {
    //console.log(to, from, next);
    // được gọi khi route render component này
    // được chuyển hướng rời đi.
    // truy cập đối tượng component `this`.
  //}
  // https://router.vuejs.org/guide/advanced/data-fetching.html#fetching-after-navigation
}
</script>

<style scoped>
</style>
