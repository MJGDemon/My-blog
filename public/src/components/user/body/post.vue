<template>
  <div class="post">
    <a :href="list.title" class="post-link">
        <p class="date">{{ list.date }}</p>
        <h2 class="title">{{ list.title }}</h2>
        <p class="content">{{ list.content }}</p>
    </a>
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
