/**
 * Created by baird on 2017/5/11.
 */
import ServiceBase from './servicebase';
const urlbase = '/api';
const urls = {
    am_getmyclasslist: urlbase + '/am_getmyclasslist',
    am_addmyclass: urlbase + '/am_addmyclass',
    am_updatamyclass: urlbase + '/am_updatamyclass',
    am_deleteclass: urlbase + '/am_deleteclass'
}
class classmanageservice extends ServiceBase {
    constructor() {
        super();
    }

    am_getmyclasslist() {
        return this.requestWithToken(urls.am_getmyclasslist, {})
    }

    am_addmyclass(model) {
        return this.requestWithToken(urls.am_addmyclass, model)
    }

    am_updatamyclass(model) {
        return this.requestWithToken(urls.am_updatamyclass, model)
    }

    am_deleteclass(classid) {
        return this.requestWithToken(urls.am_deleteclass, {classid})
    }
}
export default classmanageservice;
