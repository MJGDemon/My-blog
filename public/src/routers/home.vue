<template>
  <div>
    <headers></headers>
    <router-view></router-view>
</div>
</template>


<script>
import headers from '../components/header/header.vue'
  export default {
    components: {
      headers,
      // root
    },

  }
</script>


<style scoped>
#app {
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
  line-height: 1.5rem;
  font-weight: 400;
  color: #333333
}
</style>
