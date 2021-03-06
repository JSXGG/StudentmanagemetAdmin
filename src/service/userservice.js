/**
 * Created by baird on 2017/5/9.
 */
import ServiceBase from './servicebase';
const urlbase = '/api';
import SessionStorge from './sdSessionStorge'
import store from '../store/store'//使用vuex。
const urls = {
    adminLogin: urlbase + '/adminlogin',
    am_getalltheteacher: urlbase + '/am_getalltheteacher',
    am_getschoolinfo: urlbase + '/am_getschoolinfo',
    am_updatatecherinfo: urlbase + '/am_updatatecherinfo',
    am_searchtheteacher: urlbase + '/am_searchtheteacher',
    am_addteacherbyid:urlbase +'/am_addteacherbyid',
}
class userservice extends ServiceBase {
    constructor() {
        super();
    }
    adminLogin(model) {
        return this.request(urls.adminLogin, model).then(function (ret) {
            if (ret && ret.usertoken) {
                SessionStorge.setUserToken(ret.usertoken);
            }
            return ret;
        });
    }
    am_getalltheteacher() {
        return this.requestWithToken(urls.am_getalltheteacher, {})
    }
    am_updatatecherinfo(model) {
        return this.requestWithToken(urls.am_updatatecherinfo, model)
    }
    am_addteacherbyid(teacherid){
        return this.requestWithToken(urls.am_addteacherbyid, {teacherid})
    }
    am_searchtheteacher(text) {
        return this.requestWithToken(urls.am_searchtheteacher, {text})
    }
    am_getschoolinfo() {
        return this.requestWithToken(urls.am_getschoolinfo, {}).then(function (ret) {
            if (ret && ret.data) {
                let BaseInfo = {
                    schoolinfo: ret.data
                }
                SessionStorge.setBaseInfo(BaseInfo);
                store.commit('COMM_CONF', {
                    BaseInfo: BaseInfo
                });
            }
        })
    }
}
export default userservice;
