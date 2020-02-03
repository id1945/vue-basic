[Demo](https://id1945.github.io/vue-basic/53.vue-resource-http/dist "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 53.vue-resource-http
npm install vue-resource --save
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/53.vue-resource-http
npm install
npm run serve
```

## [3] Summary
````javascript
import Vue from 'vue'
Vue.http.options.root = "https://jsonplaceholder.typicode.com/";

````
````javascript
export default {
  data: function() {
    return {
      post: ""
    };
  },
  created() {
    // https://jsonplaceholder.typicode.com/posts/1
    this.$http.get("posts/1") 
    .then(res => {
      this.post = res.body;
    });
  }
}

````