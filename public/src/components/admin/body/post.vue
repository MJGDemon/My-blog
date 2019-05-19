<template>
  <div class="post">
    <div class="post-link">
        <input class="date" v-bind:value = list.date>
        <input class="title" v-bind:value =  list.title>
        <input class="content" v-bind:value =  list.content>
    </div>
  </div>
</template>

<script>
export default {
  name: 'post',
  props: ['list'],
  components:{

  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post{
    left: 0; right: 0;
    margin: 0 auto;
    border-bottom: solid #f3f3f3
}
.post-link{
    text-decoration: none;
    color: #333333
}
</style>
