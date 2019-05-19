<template>
    <div>
        <headers></headers>
        <router-view></router-view>
    </div>
</template>


<script>
import headers from '../components/header/header.vue'
export default {
    components:{
        headers
    },
    mounted() {

    }
}
</script>


<style scoped>

</style>
