/**
 * Created by baird on 2017/1/4.
 */
import Vue from 'vue'
// import hblocalForage from  '.././service/hblocalForage'
import store from '../store/store'//使用vuex。
//显示loading
Vue.prototype.showLoadingText = function(text){
    store.commit('COMM_LOADING_STATUS',{
        isLoading:true,
        loadingText:text
    });
}
//loading隐藏
Vue.prototype.showLoadingDissmiss = function(){
    store.commit('COMM_LOADING_STATUS',{
        isLoading:false,
        loadingText:''
    });
}
//显示吐司
Vue.prototype.showToastText = function(text){
    store.commit('COMM_TOAST_STATUS',{
        isToast:true,
        toastText:text
    });
    setTimeout(function (){
        store.commit('COMM_TOAST_STATUS',{
            isToast:false,
            toastText:''
        });
    },1000);
}
// Vue.prototype.hblocalForage = hblocalForage;

