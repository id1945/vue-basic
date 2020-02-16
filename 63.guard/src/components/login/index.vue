<template>
  <div>
    <h1>Login</h1>
    <p>admin/pass</p>
    <p>user/pass</p>
    <input type="text" name="username" v-model="input.username" placeholder="Username" />
    <input type="password" name="password" v-model="input.password" placeholder="Password" />
    <button type="button" v-on:click="login()">Login</button>
  </div>
</template>

<script>
  export default {
    name: "Login",
    data() {
      return {
        input: {
          username: "",
          password: ""
        }
      }
    },
    methods: {
      login() {
        if(this.input.username == "admin" && this.input.password == "pass") {
          this.$store.commit("setAuthentication", true);
          this.$store.commit("setRoles", ['ADMIN']);
          this.$router.replace({ name: "homePage" });
        } else if(this.input.username == "user" && this.input.password == "pass") {
          this.$store.commit("setAuthentication", true);
          this.$store.commit("setRoles", ['USER']);
          this.$router.replace({ name: "homePage" });
        } else {
          console.log("The username and / or password is incorrect");
        }
      }
    }
  }
</script>

<style scoped></style>