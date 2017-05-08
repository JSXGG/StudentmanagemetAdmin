import Vue from 'vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import router from './router/routes'
import store from './store/store'//使用vuex。
import './tools/tools'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
const app = new Vue({
  router,
  store,
}).$mount('#app')
window.HOST_NAME = "http://192.168.9.238";



