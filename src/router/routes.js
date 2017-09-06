/**
 * Created by baird on 2016/12/30.
 */
/*
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const App = resolve => require(['../App'], resolve)
const Login = resolve => require(['../pages/Login/Login'], resolve)
const Test = resolve => require(['../pages/Test/Test'], resolve)
const Adminipage = resolve => require(['../pages/Main/Adminipage'], resolve)
const Teachermanage = resolve => require(['../pages/Main/Teachermanage'], resolve)
const Classmanagement = resolve => require(['../pages/Main/Classmanagement'], resolve)
const Studentmanage = resolve => require(['../pages/Main/Studentmanage'], resolve)
const Summary = resolve => require(['../pages/Main/Summary'], resolve)
//路由配置
/**
 * meta 配置
 *  keepAlive true  页面 keepAlive
 *  requiresAuth:  验证是否需要登录   meta: {requiresAuth: true}
 * @type {[*]}
 */
/*发布版本时，虚拟主机根目录下的子目录路径。
 */
const proRootDic = '';
const routes = [
    {
        path: proRootDic,
        component: App,
        redirect: proRootDic + '/login',
        children: [
            {path: 'admin', component: Adminipage, meta: {keepAlive: true}, name: 'adminipage'},
            {path: 'teachermanage', component: Teachermanage, meta: {keepAlive: true}, name: 'teachermanage'},
            {path: 'classmanagement', component: Classmanagement, meta: {keepAlive: true}, name: 'classmanagement'},
            {path: 'studentmanage', component: Studentmanage, meta: {keepAlive: true}, name: 'studentmanage'},
            {path: 'summary', component: Summary, meta: {keepAlive: true}, name: 'summary'}
        ]
    },
    {path: '/login', component: Login, meta: {keepAlive: true}, name: 'login'},
    {path: '/test', component: Test, meta: {keepAlive: true}, name: 'test'},
    {path: '*', redirect: proRootDic + '/login'}//增加匿名路由跳转到主页面。
];
const router = new VueRouter({
    routes
})
export  default router
