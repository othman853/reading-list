import bulma from 'bulma/css/bulma.css'
import fontAwesome from 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import VueResource from 'vue-resource'
import {store} from './Store.js'
import Main from './Main.vue'

Vue.use(VueResource)

new Vue({
  el: '#main-wrapper',
  store,
  render: handler => handler(Main)
})
