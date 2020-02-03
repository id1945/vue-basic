[Demo](https://id1945.github.io/vue-basic/45.mixins-local/dist "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 45.mixins-local
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/45.mixins-local
npm install
npm run serve
```

````javascript
// HelloWorld.vue
import { myMixin  } from './myMixin.js';
export default {
  mixins: [myMixin]
}
````
````javascript
// myMixin.js
export const myMixin  = {
    data: function() {
        return {
            test_name: 'Hello world ! - TEST Mixins'
        }
    }
}
````
````html
<template>
  <div>
    {{test_name}}
  </div>
</template>
````