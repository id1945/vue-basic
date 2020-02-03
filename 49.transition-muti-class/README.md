[Demo](https://id1945.github.io/vue-basic/49.transition-muti-class/dist "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 49.transition-muti-class
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/49.transition-muti-class
npm install
npm run serve
```

## [3] Summary
````html
<transition
    enter-class="fade-enter"
    enter-active-class="fade-enter-active"
    leave-class="fade-leave"
    leave-active-class="fade-leave-active">
    <div v-if="show" class="alert alert-success w-25 m-auto" role="alert">
    This is a primary alert—check it out!
    </div>
</transition>
````
````css
.fade-enter {
    opacity: 0;
}
.fade-enter-active {
    transition: opacity 1s;
}
.fade-leave {
/* opacity: 0; */
}
.fade-leave-active {
    transition: opacity 1s;
    opacity: 0;
}
````