<template>
  <div class="post-content">
      <div v-html="markdown">
          
      </div>
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
    name: 'post-content',
    
    components:{
    },
    serverRequest({store,router}) {
        return store.dispatch('getContent',`${router.history.current.path}`);
    },
    computed:{
        markdown:function(){
            if(this.$store.state.Error != '')
                throw new Error(this.$store.state.Error);
            else
                return marked(this.$store.state.Content, { sanitize: true })
        },
    },
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.post-content{
    left: 0; right: 0;
    margin: 0 auto;
    margin-top: 50px;
    width: 40%;
}

</style>
