<template lang="jade">
transition(name="fade")
  div(class="notification is-danger") {{ message }}
    button(@click="$store.commit('removeError', this.index)" class="delete")
</template>

<script>
  export default { props: ['message', 'index'] }
</script>


<style lang="css">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>
