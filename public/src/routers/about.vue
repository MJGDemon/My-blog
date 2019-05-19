<template>
  <div class="v-about" v-html="markdown">
  </div>
</template>

<script>
import marked from 'marked'
var rendererMD = new marked.Renderer();
marked.setOptions({
    renderer: rendererMD,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
})
export default {
  name: 'about',
  components: {
  },
  serverRequest({store,router}) {
    return store.dispatch('getAbout');
  },
   computed:{
        markdown:function(){
          return marked(this.$store.state.About, { sanitize: true })
        },
    },
}
</script>

<style>
.v-about{
    left: 0; right: 0;
    margin-top: 50px;
    margin: 0 auto;
    width: 40%;
}

</style>
