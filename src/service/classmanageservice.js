/**
 * Created by baird on 2017/5/11.
 */
import ServiceBase from './servicebase';
const urlbase = '/api';
const urls = {
    am_getmyclasslist: urlbase + '/am_getmyclasslist',
    am_addmyclass: urlbase + '/am_addmyclass',
    am_updatamyclass: urlbase + '/am_updatamyclass',
    am_deleteclass: urlbase + '/am_deleteclass',
    am_getstudentbyclassid: urlbase + '/am_getstudentbyclassid',
    am_addstudent: urlbase + '/am_addstudent',
    am_updatastudent: urlbase + '/am_updatastudent',
    am_delstudent: urlbase + '/am_delstudent'
}
class classmanageservice extends ServiceBase {
    constructor() {
        super();
    }

    am_getstudentbyclassid(classid) {
        return this.requestWithToken(urls.am_getstudentbyclassid, {classid})
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

    am_addstudent(model) {
        return this.requestWithToken(urls.am_addstudent, model)
    }

    am_updatastudent(model) {
        return this.requestWithToken(urls.am_updatastudent, model)
    }

    am_delstudent(studentid) {
        return this.requestWithToken(urls.am_delstudent, {studentid})
    }
}
export default classmanageservice;
