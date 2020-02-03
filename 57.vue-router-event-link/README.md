[Demo](https://id1945.github.io/vue-basic/57.vue-router-event-link/dist "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 57.vue-router-event-link
npm i vue-router --save
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/57.vue-router-event-link
npm install
npm run serve
```

## [3] Summary
````html
<button @click="backToHome" class="btn btn-info">Back to home</button>

````
````javascript
export default {
  methods: {
    backToHome() {
      this.$router.push('/');
    } 
  }
}
````