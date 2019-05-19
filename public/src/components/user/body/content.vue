<template>
  <div class="content">
    <post
        v-for="item in Info"
        :list="item"
        v-bind:key="item.ID"
    ></post>
  </div>
</template>

<script>
import post from "./post.vue"
export default {
    name: 'content',
    components:{
        post
    },
    serverRequest({store,router}) {
      return store.dispatch('getInfo');
    },
    computed:{
        Info(){
            return this.$store.state.Info
        }
    }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
    left: 0; right: 0;
    margin: 0 auto;
    margin-top: 50px;
    width: 40%;
}

</style>
