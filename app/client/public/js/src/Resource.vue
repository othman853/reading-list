<template lang="html">

  <div class="column is-one-third">
    <div class="card">
      <div class="card-content">
        <p class="title"> {{ title }} </p>
        <p class="subtitle"> 11:09 PM - 1 Jan 2016 </p>
        <span v-for="tag in tags" class="tag has-no-border-radius is-black">
          {{ tag }}
        </span>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item is-clickable paint-on-hover">
          <span class="icon"> <i class="fa fa-check"></i> </span>
        </p>
        <p class="card-footer-item is-clickable paint-on-hover">
          <span class="icon"> <i class="fa fa-pencil"></i> </span>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default { props: ['title', 'tags'] }
</script>

<style lang="css">

.has-margin-right-5 {
  margin-right: 5px;
}

.has-no-border-radius {
  border-radius: 0;
  border: solid 1px #FFF;
}

.is-clickable {
  cursor: pointer;
}

.paint-on-hover:hover {
  transition: 0.2s ease-in;
  background-color: black;
  color: #00d1b2;
}
</style>
