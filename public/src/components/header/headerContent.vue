<template>
  <div class="nav-menu">
    <div class="nav-warp">
        <a class="site-title" href="/">
            <b>Demon's blog</b>
        </a>
        <a href="/about" class="about">
            About
        </a>
        <div class="clearfix">

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-menu',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-warp{
    width: 40%;
    left: 0; right: 0;
    margin: 0 auto;
}
.site-title{
    float: left;
    font-weight: bold;
    font-size: 2rem;
    text-decoration: none;
    color: #0096cc;
}
.about{
    float: right;
    text-decoration: none;
    font-size: 1.5rem;
    color: gray;
}
a:hover{
  color: #007199;
}
.clearfix{
    clear: both;
}

</style>
