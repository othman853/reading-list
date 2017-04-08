<template lang="html">
  <p>Yo, I'm a component with {{ greeting }}</p>
</template>

<script>
export default {
  data: () => ({ greeting: 'Vue powers!' })
}
</script>

<style lang="css">
p {
  color: green;
}
</style>
