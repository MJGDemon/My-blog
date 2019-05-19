import { createApp } from '../public/src/main'
require("expose-loader?$!jquery");

const {app, router, store, axios} = createApp()

// 同步服务端信息
if (window.__INITIAL_STATE__) {
      store.replaceState(window.__INITIAL_STATE__)
}


// 绑定app根元素
window.onload = function() {
       app.$mount('#app')
}