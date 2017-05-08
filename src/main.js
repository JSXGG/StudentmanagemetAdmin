import Vue from 'vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import router from './router/routes'
import store from './store/store'//使用vuex。
import './tools/tools'
import 'element-ui/lib/theme-default/index.css'
//按需引入
import {
    Input,
    Form,
    FormItem,
    Card,
    Button,
    Dialog,
    Switch,
    Table,
    TableColumn,
    Row,
    Col,
    Menu,
    MenuItem,
    Submenu
} from 'element-ui'
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Card)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(Switch)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
const app = new Vue({
    router,
    store,
}).$mount('#app')
window.HOST_NAME = "http://192.168.9.238";



