[Demo](https://id1945.github.io/vue-basic/54.vue-resource-http-uri/dist "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 54.vue-resource-http-uri
npm install vue-resource --save
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/54.vue-resource-http-uri
npm install
npm run serve
```

## [3] Summary
````html
<input type="number" v-model="inputUri" placeholder="Enter User Id" class="form-control"/>

````
````javascript
import Vue from 'vue'
Vue.http.options.root = "https://jsonplaceholder.typicode.com/";

````
````javascript
export default {
  data: function() {
    return {
      resource: {},
      post: [],
      inputUri: ''
    };
  },
  methods: {
    onSubmit(e) {
      this.resource.getUriData({ userId: this.inputUri }) 
      .then(res => {
        this.post = res.body;
      });
      e.preventDefault();
    }
  },
  created() {
    // https://jsonplaceholder.typicode.com/posts/1
    const customAction = {
      getUriData: { method: 'GET' }
    }
    this.resource = this.$resource('posts', '', customAction)
  }
  // https://github.com/pagekit/vue-resource
  // https://medialize.github.io/URI.js/uri-template.html
}

````