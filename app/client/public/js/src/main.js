import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import { store } from './Store.js'
import Main from './Main.vue'

new Vue({
  el: "#main-wrapper",
  store,
  render: handler => handler(Main)
})
