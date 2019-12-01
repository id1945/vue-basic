<template>
  <div>
    <p v-html="'<h2>Hello v-html</h2>'" />
    <i v-text="'Hello v-text'" />
    <p v-hightligth="'red'">Test custom value = red</p>
    <h2 v-hightligth:background="'red'">Test agr</h2>
    <h2 v-hightligth:background.blink="'red'">Test modifiers</h2>
    <a href="https://vi.vuejs.org/v2/guide/custom-directive.html" target="_blank">Custom-directive</a>
  </div>
</template>

<script>
  export default {
    // directives
    directives: {
      'hightligth': {
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

          // USE Blink
          if (binding.modifiers['blink']) {
            setTimeout(function () {
              setInterval(() => {
                setbg = (setbg === bgYellow) ? bgGreen : bgYellow;
                el.style.background = setbg;
                el.style.color = (setbg === bgGreen) ? 'white' : 'black';
              }, 300);
            }, 300);
          }
        }
      }
    }
  }
</script>
