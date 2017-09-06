import Vue from 'vue'
import router from './router/routes'
import store from './store/store'//使用vuex。
import ElementUI from 'element-ui'
import './less/base.less'
Vue.use(ElementUI)
const app = new Vue({
    router,
    store,
}).$mount('#app')



