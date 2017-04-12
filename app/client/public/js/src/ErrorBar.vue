<template lang="html">
  <div>
    <div v-for="(error, index) in $store.state.errors" class="notification is-danger is-animated">
      <button @click="$store.commit('removeError', errorIndex)" class="delete"></button>
      {{ error.body.message }}
    </div>
  </div>
</template>
