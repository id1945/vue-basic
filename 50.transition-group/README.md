[Demo](https://id1945.github.io/vue-basic/50.transition-group/dist "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 50.transition-group
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/50.transition-group
npm install
npm run serve
```

## [3] Summary
````html
<transition-group name="flip">
  <li class="list-group-item list-group-item-secondary" v-for="(num, i) in numbers" :key="i">{{num}}</li>
</transition-group>
````
````css
.flip-enter-active {
  animation: flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}
.flip-leave-active {
  animation: flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
}

@keyframes flip-horizontal-bottom {
  0% {
    -webkit-transform: rotateX(0);
    transform: rotateX(0);
  }
  100% {
    -webkit-transform: rotateX(-180deg);
    transform: rotateX(-180deg);
  }
}

````