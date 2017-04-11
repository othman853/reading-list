<template lang="html">

  <div class="column is-one-quarter">
    <div class="card">
      <div class="card-content">
        <p class="title"> {{ title }} </p>
        <p class="subtitle"> 11:09 PM - 1 Jan 2016 </p>
        <p class="tag is-black" v-for="tag in tags"> {{ tag }} </p>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
          <span class="icon">
            <i class="fa fa-home"></i>
          </span>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default { props: ['title', 'sizeClass', 'tags'] }
</script>

<style lang="css">
.has-margin-right-5 {
  margin-right: 5px;
}

.tag {
  border-radius: 0;
}
</style>
