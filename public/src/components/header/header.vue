<template>
  <div class="headers">
    <headerContent></headerContent>
  </div>
</template>

<script>
import headerContent from './headerContent.vue'

export default {
  name: 'headers',
  props: {
    msg: String
  },
  components:{
    headerContent
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .headers{
    margin-top: 50px;
    height: 1.5rem;
    line-height: 1.5rem;
  }

</style>
