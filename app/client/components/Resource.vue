<template lang="jade">
transition(name="slide-fade")
  div(class="resource column is-one-third")
    div(class="card")
      div(class="card-content")
        p(class="title") {{ title }}
        p(class="subtitle") 11:09 PM - 1 Jan 2016
        span(v-for="tag in tags" class="tag has-no-border-radius is-black") {{ tag }}

      footer(class="card-footer")
        p(class="card-footer-item is-clickable paint-on-hover")
          span(class="icon")
            i(class="fa fa-check")

        p(class="card-footer-item is-clickable paint-on-hover")
          span(class="icon")
            i(class="fa fa-pencil")

</template>

<script>
export default { props: ['title', 'tags'] }
</script>

<style lang="css">

.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}

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
