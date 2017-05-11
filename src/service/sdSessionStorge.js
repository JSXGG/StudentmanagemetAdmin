/**
 * Created by baird on 2017/3/29.
 */
const prefix = 'SD_V1';
export default {
    setUserToken(value){
        window.sessionStorage.setItem(prefix + 'usertoken', value)
    },
    getUserToken(){
        return window.sessionStorage.getItem(prefix + 'usertoken');
    },
    //清除usertoken。
    cleanUserToken(){
        window.sessionStorage.removeItem(prefix + 'usertoken');
    },
    setBaseInfo(Info){
        window.sessionStorage.setItem(prefix + 'baseinfo', JSON.stringify(Info))
    },
    getBaseInfo(){
        let userInfo = window.sessionStorage.getItem(prefix + 'baseinfo');
        return JSON.parse(userInfo);
    },
    cleanBaseInfo(){
        window.sessionStorage.removeItem(prefix + 'baseinfo');
    }
}
