[Demo](https://id1945.github.io/vue-basic/47.transition-animation/dist "Demo")

## [1] Create with CLI - Command line
```
npm install -g @vue/cli
vue create 47.transition-animation
npm run serve
```

## [2] Clone app
```
git clone https://github.com/id1945/vue-basic.git
cd vue-basic/47.transition-animation
npm install
npm run serve
```

## [3] Summary
````html
<transition name="fade">
    <div v-if="show" class="alert alert-danger w-25 m-auto" role="alert">
    This is a primary alert—check it out!
    </div>
</transition>
````
````css
.fade-enter {}

.fade-enter-active {
    animation: bounce-top 0.9s both;
}

.fade-leave {}

.fade-leave-active {
    animation: wobble-hor-bottom 0.9s both;
}

@keyframes bounce-top {
    0% {
        transform: translateY(-45px);
        animation-timing-function: ease-in;
        opacity: 1;
    }
    24% {
        opacity: 1;
    }
    40% {
        transform: translateY(-24px);
        animation-timing-function: ease-in;
    }
    65% {
        transform: translateY(-12px);
        animation-timing-function: ease-in;
    }
    82% {
        transform: translateY(-6px);
        animation-timing-function: ease-in;
    }
    93% {
        transform: translateY(-4px);
        animation-timing-function: ease-in;
    }
    25%,
    55%,
    75%,
    87% {
        transform: translateY(0px);
        animation-timing-function: ease-out;
    }
    100% {
        transform: translateY(0px);
        animation-timing-function: ease-out;
        opacity: 1;
    }
}

@keyframes wobble-hor-bottom {
    0%,
    100% {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
        -webkit-transform-origin: 50% 50%;
        transform-origin: 50% 50%;
    }
    15% {
        -webkit-transform: translateX(-30px) rotate(-6deg);
        transform: translateX(-30px) rotate(-6deg);
    }
    30% {
        -webkit-transform: translateX(15px) rotate(6deg);
        transform: translateX(15px) rotate(6deg);
    }
    45% {
        -webkit-transform: translateX(-15px) rotate(-3.6deg);
        transform: translateX(-15px) rotate(-3.6deg);
    }
    60% {
        -webkit-transform: translateX(9px) rotate(2.4deg);
        transform: translateX(9px) rotate(2.4deg);
    }
    75% {
        -webkit-transform: translateX(-6px) rotate(-1.2deg);
        transform: translateX(-6px) rotate(-1.2deg);
    }
}
````