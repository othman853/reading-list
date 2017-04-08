import Vue from 'vue';
import axios from 'axios';
import Main from './Main.vue';

const button = document.querySelector('#get-data');
const serverData = document.querySelector('#server-data');

new Vue({
  el: "#main-wrapper",
  render: handler => handler(Main)
});

button.addEventListener('click', () => {

  axios
    .get('/motd')
    .then(response => {

      const newData = document.createElement('p');
      newData.innerHTML = response.data.message;

      serverData.appendChild(newData);
    })
    .catch(err => alert(err));

});
