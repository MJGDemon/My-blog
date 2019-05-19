<template>
      <div>
            <router-view></router-view>
      </div>
</template>



<script>

export default {
    mixins:[
        {
           beforeRouteUpdate (to, from, next) {
                const { serverRequest } = this.$options
                if (serverRequest) {
                serverRequest({
                    store: this.$store,
                    route: to
                }).then(next).catch(next)
                } else {
                next()
            }
        }
        }
    ]

}
</script>


<style>

</style>