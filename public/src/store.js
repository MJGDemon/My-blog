import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router.js'
import { resolve } from 'path';
import { rejects } from 'assert';

Vue.use(Vuex)
axios.interceptors.response.use((res) => {
    return response;
}, function (error) {
    if(error.response.status == '302'){
        location.href = error.response.data;
    } else {
        return Promise.reject(error);
    }
});
export default function createStore() {
      let store =  new Vuex.Store({
            state: {
                  Info: '',
                  Content:'',
                  About:'',
                  Error:''
            },
            actions: {
                  getInfo({ commit }) {
                        return axios.get('http://localhost:8080/getInfo').then((res) => {
                              commit('setInfo', res.data)
                        })
                  },
                  getContent({ commit }, url){
                        return axios.get(`http://localhost:8080/content/${url}`).then((res) => {
                              commit('setContent',res.data)
                        }).catch((err) => {
                              commit('setError',err.response.data)    
                        })
                  },
                  getAbout({ commit }){
                        return axios.get('http://localhost:8080/getAbout').then((res) => {
                              commit('setAbout',res.data)
                        })
                  },
                  postData({ commit },data){
                        return new Promise((resolve, reject) => {
                              axios.post('http://localhost:8080/login/admin',data).then((res) => {
                                    resolve(res)
                              }).catch(err => {
                                    reject(err.response.data)
                              })
                        })
                        
                  }
            },
            mutations: {
                  setInfo(state, res) {
                        state.Info = res
                  },
                  setContent(state,res){
                        state.Content = res;
                  },
                  setError(state, res){
                        state.Error = res;
                  },
                  setAbout(state,res){
                        state.About = res;
                  },
            }
      })

      return { store, axios }
}