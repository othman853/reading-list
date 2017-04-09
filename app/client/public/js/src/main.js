import Vue from 'vue';
import Main from './Main.vue';

new Vue({
  el: "#main-wrapper",
  render: handler => handler(Main)
});
