<template>
    <div class="login">
        <h1>Welcome to Demon's blog</h1>
        <div class="form">
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="Username" v-model="Username">
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="Password" v-model="Password">
            </div>
            <button class="submit" v-on:click = submit()>登录</button>
            <!-- <input type="text" id="password"> -->
        </div>
    </div>
</template>


<script>
import Vue from 'vue'
import axios from 'axios';
Vue.prototype.$ajax= axios
export default {
    data(){
        return {
            Username:'',
            Password:''
        }
    },
    methods:{
        submit(){
            let data = {Username:this.Username,Password:this.Password};
            this.$store.dispatch('postData',data).then(() => {
                this.$router.push('/admin')
            }).catch(err => {alert(err)})
        }
    }
}
</script>


<style scoped>
.login{
    left: 0; right: 0;
    margin: 0 auto;
    margin-top: 50px;
    width: 30%;
    text-align: center
}
input{
    text-align: center;
    border-width: 0 0 1px 0;
    position: relative;
    padding:1%;
    font-size:1em;
    margin-bottom:1%;
    text-decoration: none;
}
.input-group{
    margin-top: 10px;
}
.form{
    border: 1px #66ccff solid;
    border-radius: 10px;
}
button{
    margin-top: 10px;
    height: 30px;
    width: 30%;
    outline: none;
    border-radius: 6px;
    background-color:#00ccff;
}

</style>
