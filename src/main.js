import Vue from 'vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import router from './router/routes'
import store from './store/store'//使用vuex。
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'
Vue.use(ElementUI)
const app = new Vue({
    router,
    store,
}).$mount('#app')



