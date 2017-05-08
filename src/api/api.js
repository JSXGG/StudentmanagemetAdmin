/**
 * Created by baird on 2016/12/30.
 */
import axios from 'axios';
import Storage from '../service/hblocalForage';
import store from '../store/store'//使用vuex。
const HOST = '';
const Api = {

    /**
     * 全局URL 替换处理
     * {HANDBOOKAPI} 替换为 /api/handbook 手册通用 URL 前缀;
     * @param url
     * @returns {string}
     */
    getUrl: function (url) {
        //替换URL的全局参数;
        if (url.indexOf('{') >= 0) {
            url = url.replace('{Maternal}', '/Maternal');
        }
        return HOST + url;
    },


    getCongif: function (_url, _method, _parameter) {
        let config = {
            method: _method ? _method : 'get',
            url: Api.getUrl(_url),
            data: _parameter || {},
            headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'}
        };
        if (config.method === 'get' && Object.keys(config.data).length > 0) { //拼接URL
            var quert_string = [];
            Object.keys(config.data).forEach(function (key) {
                quert_string.push(key + '=' + config.data[key]);
            })
            config.url = config.url + '?' + quert_string.join('&');
        }
        return config;
    },
    fetchDataByToken: function (_url, _method, _parameter) {

        let config = Api.getCongif(_url, _method, _parameter)

        // axios.defaults.headers.common['Authorization'] = 'Bearer '+ access_token;

        return axios(config).then((response) => {
            return response;
        }).catch(function (error) {
            // alert('TODO 网络错误 ');
        })
    },
}
export default Api;




