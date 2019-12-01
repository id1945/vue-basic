import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('hightligth', {
  bind(el, binding) {
    let setbg = '';
    let bgYellow = 'yellow';
    let bgGreen = 'green';

    // Defalt
    if (binding.arg === 'background') {
      el.style.background = bgYellow;
    } else {
      el.style.color = binding.value;
    }

    // USE Delay
    if (binding.modifiers['blink']) {
      setTimeout(function() {
        setInterval(() => {
          setbg = (setbg === bgYellow) ? bgGreen : bgYellow;
          el.style.background = setbg;
          el.style.color = (setbg === bgGreen) ? 'white' : 'black';
        }, 300);
      }, 300);
    } 
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
