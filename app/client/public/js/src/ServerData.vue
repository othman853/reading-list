<template lang="html">

  <div>
    <button v-on:click="ping" class="btn btn-primary"> Get Server Data </button>
    <button v-on:click="clear" class="btn btn-default"> Clear </button>

    <h4>Messages</h4>

    <ol>
      <li v-for="message in messages">{{ message }}</li>
    </ol>

    <h4>Errors</h4>

    <ol>
      <li v-for="error in errors" class="red-text">{{ error }}</li>
    </ol>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  data: () => ({ messages: [], errors: [] }),
  methods: {

    clear() {
      this.messages = [];
      this.errors = [];
    },

    ping() {
      const instance = this;
      axios.get('/motd')
        .then(response => instance.messages.push(response.data.message))
        .catch(error => instance.errors.push(error));
    }
  }
}
</script>

<style lang="css">
.red-text {
  color: #C92D2D;
}
</style>
