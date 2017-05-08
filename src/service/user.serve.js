/**
 * Created by baird on 2017/3/23.
 */
import Api from '../api/api';
import store from '../store/store'//使用vuex。

const userServe = {};

//返回所有医生
userServe.GetModifyMan = ()=> {
    let url = '{Maternal}/GetModifyMan';
    return Api.fetchDataByToken(url, 'get').then(function (response) {
        if (response.data) {
            return response.data
        }
    });
}
//保存
userServe.Savephysicalexaminationinfo = (post)=> {
    let url = '{Maternal}/Savephysicalexaminationinfo';
    return Api.fetchDataByToken(url, 'get', {post: JSON.stringify(post)}).then(function (response) {
        if (response.data) {
            return response.data
        }
    });
    return url;
}
//刷新
userServe.GetPCfroYtj = (model)=> {
    let url = '{Maternal}/GetPCfroYtj';
    return Api.fetchDataByToken(url, 'get', model).then(function (response) {
        if (response.data) {
            return response.data
        }
    });
}
//获取已诊断患者
userServe.GetPatientfroDoctor = (checkDoctor)=> {
    let url = '{Maternal}/GetPatientfroDoctor';
    return Api.fetchDataByToken(url, 'get', {checkDoctor}).then(function (response) {
        if (response.data) {
            return response.data
        }
    });
}
//获取未诊断的患者。
userServe.GetNodiagnosisPatient = ()=> {
    let url = '{Maternal}/GetNodiagnosisPatient';
    return Api.fetchDataByToken(url, 'get').then(function (response) {
        if (response.data) {
            return response.data
        }
    })
}
//获取字典对象。
userServe.GetdictData = ()=> {
    let url = '{Maternal}/GetdictData';
    return Api.fetchDataByToken(url, 'get').then(function (response) {
        if (response.data) {
            window.sessionStorage.setItem('HB_DEFAULTCHILD', JSON.stringify(obj))
            return response.data
        }
    })
}


userServe.GetdictDataConfig = ()=> {
    let configDic = {
        "ok": true,
        "Swelling": [{
            "ID": "1",
            "Dictionary": "正常",
            "Notation": "浮肿状况",
            "class": "CV5102.05",
            "autoID": "87"
        }, {"ID": "2", "Dictionary": "Ⅰ度", "Notation": "", "class": "CV5102.05", "autoID": "88"}, {
            "ID": "3",
            "Dictionary": "Ⅱ度",
            "Notation": "",
            "class": "CV5102.05",
            "autoID": "89"
        }, {"ID": "4", "Dictionary": "Ⅲ度", "Notation": "", "class": "CV5102.05", "autoID": "90"}, {
            "ID": "5",
            "Dictionary": "Ⅳ度",
            "Notation": "",
            "class": "CV5102.05",
            "autoID": "91"
        }],
        "TireFfirstExposed": [
            {
                "ID": "1",
                "Dictionary": "头先露",
                "Notation": "胎先露",
                "class": "CV5202.05",
                "autoID": "269"
            },
            {
                "ID": "2", "Dictionary": "臀先露", "Notation": "", "class": "CV5202.05", "autoID": "270"
            },
            {
                "ID": "3",
                "Dictionary": "肩先露",
                "Notation": "",
                "class": "CV5202.05",
                "autoID": "271"
            },
            {
                "ID": "9", "Dictionary": "不详", "Notation": "", "class": "CV5202.05", "autoID": "272"
            }],
        "FetalPosition": [
            {
                "ID": "01",
                "Dictionary": "左枕前（LOA）",
                "Notation": "胎方位代码",
                "class": "CV5105.01",
                "autoID": "128"
            },
            {"ID": "02", "Dictionary": "右枕前（ROA）", "Notation": "", "class": "CV5105.01", "autoID": "129"}, {
                "ID": "03",
                "Dictionary": "左枕后（LOP）",
                "Notation": "",
                "class": "CV5105.01",
                "autoID": "130"
            },
            {"ID": "04", "Dictionary": "右枕后（ROP）", "Notation": "", "class": "CV5105.01", "autoID": "131"}, {
                "ID": "05",
                "Dictionary": "左枕横（LOT）",
                "Notation": "",
                "class": "CV5105.01",
                "autoID": "132"
            },
            {"ID": "06", "Dictionary": "右枕横（ROT）", "Notation": "", "class": "CV5105.01", "autoID": "133"}, {
                "ID": "07",
                "Dictionary": "左颏前（LMA）",
                "Notation": "",
                "class": "CV5105.01",
                "autoID": "134"
            },
            {"ID": "08", "Dictionary": "右颏前（RMA）", "Notation": "", "class": "CV5105.01", "autoID": "135"}, {
                "ID": "09",
                "Dictionary": "左颏后（LMP）",
                "Notation": "",
                "class": "CV5105.01",
                "autoID": "136"
            },
            {"ID": "10", "Dictionary": "右颏后（RMP）", "Notation": "", "class": "CV5105.01", "autoID": "137"}, {
                "ID": "11",
                "Dictionary": "左颏横（LMT）",
                "Notation": "",
                "class": "CV5105.01",
                "autoID": "138"
            },
            {"ID": "12", "Dictionary": "右颏横（RMT）", "Notation": "", "class": "CV5105.01", "autoID": "139"}, {
                "ID": "13",
                "Dictionary": "左骶前（LSA）",
                "Notation": "",
                "class": "CV5105.01",
                "autoID": "140"
            },
            {"ID": "14", "Dictionary": "右骶前（RSA）", "Notation": "", "class": "CV5105.01", "autoID": "141"}, {
                "ID": "15",
                "Dictionary": "左骶后（LSP）",
                "Notation": "",
                "class": "CV5105.01",
                "autoID": "142"
            },
            {"ID": "16", "Dictionary": "右骶后（RSP）", "Notation": "", "class": "CV5105.01", "autoID": "143"}, {
                "ID": "17",
                "Dictionary": "左骶横（LST）",
                "Notation": "",
                "class": "CV5105.01",
                "autoID": "144"
            },
            {"ID": "18", "Dictionary": "右骶横（RST）", "Notation": "", "class": "CV5105.01", "autoID": "145"}, {
                "ID": "19",
                "Dictionary": "左肩前（LScA）",
                "Notation": "",
                "class": "CV5105.01",
                "autoID": "146"
            },
            {"ID": "20", "Dictionary": "右肩前（RscA）", "Notation": "", "class": "CV5105.01", "autoID": "147"}, {
                "ID": "21",
                "Dictionary": "左肩后（LScP）",
                "Notation": "",
                "class": "CV5105.01",
                "autoID": "148"
            },
            {"ID": "22", "Dictionary": "右肩后（RScP）", "Notation": "", "class": "CV5105.01", "autoID": "149"},
            {
                "ID": "99",
                "Dictionary": "不详",
                "Notation": "",
                "class": "CV5105.01",
                "autoID": "150"
            }
        ],
        "Ketone": [{
            "ID": "1",
            "Dictionary": "-",
            "Notation": "尿蛋白,尿糖,尿酮体定性检测结果",
            "class": "CV5103.10",
            "autoID": "115"
        }, {"ID": "2", "Dictionary": "±", "Notation": "", "class": "CV5103.10", "autoID": "116"}, {
            "ID": "3",
            "Dictionary": "+",
            "Notation": "",
            "class": "CV5103.10",
            "autoID": "117"
        }, {"ID": "4", "Dictionary": "++", "Notation": "", "class": "CV5103.10", "autoID": "118"}, {
            "ID": "5",
            "Dictionary": "+++",
            "Notation": "",
            "class": "CV5103.10",
            "autoID": "119"
        }, {"ID": "6", "Dictionary": "++++", "Notation": "", "class": "CV5103.10", "autoID": "120"}],
        "UrineProtein": [{
            "ID": "1",
            "Dictionary": "-",
            "Notation": "尿蛋白,尿糖,尿酮体定性检测结果",
            "class": "CV5103.10",
            "autoID": "115"
        }, {"ID": "2", "Dictionary": "±", "Notation": "", "class": "CV5103.10", "autoID": "116"}, {
            "ID": "3",
            "Dictionary": "+",
            "Notation": "",
            "class": "CV5103.10",
            "autoID": "117"
        }, {"ID": "4", "Dictionary": "++", "Notation": "", "class": "CV5103.10", "autoID": "118"}, {
            "ID": "5",
            "Dictionary": "+++",
            "Notation": "",
            "class": "CV5103.10",
            "autoID": "119"
        }, {"ID": "6", "Dictionary": "++++", "Notation": "", "class": "CV5103.10", "autoID": "120"}],
        "UrineSugar": [{
            "ID": "1",
            "Dictionary": "-",
            "Notation": "尿蛋白,尿糖,尿酮体定性检测结果",
            "class": "CV5103.10",
            "autoID": "115"
        }, {"ID": "2", "Dictionary": "±", "Notation": "", "class": "CV5103.10", "autoID": "116"}, {
            "ID": "3",
            "Dictionary": "+",
            "Notation": "",
            "class": "CV5103.10",
            "autoID": "117"
        }, {"ID": "4", "Dictionary": "++", "Notation": "", "class": "CV5103.10", "autoID": "118"}, {
            "ID": "5",
            "Dictionary": "+++",
            "Notation": "",
            "class": "CV5103.10",
            "autoID": "119"
        }, {"ID": "6", "Dictionary": "++++", "Notation": "", "class": "CV5103.10", "autoID": "120"}],
        "OccultBlood": [{
            "ID": "1",
            "Dictionary": "-",
            "Notation": "尿蛋白,尿糖,尿酮体定性检测结果",
            "class": "CV5103.10",
            "autoID": "115"
        }, {"ID": "2", "Dictionary": "±", "Notation": "", "class": "CV5103.10", "autoID": "116"}, {
            "ID": "3",
            "Dictionary": "+",
            "Notation": "",
            "class": "CV5103.10",
            "autoID": "117"
        }, {"ID": "4", "Dictionary": "++", "Notation": "", "class": "CV5103.10", "autoID": "118"}, {
            "ID": "5",
            "Dictionary": "+++",
            "Notation": "",
            "class": "CV5103.10",
            "autoID": "119"
        }, {"ID": "6", "Dictionary": "++++", "Notation": "", "class": "CV5103.10", "autoID": "120"}],
        "Drugs": [{"ID": "631", "Dictionary": "磺胺类"}, {"ID": "632", "Dictionary": "抗生素"}, {
            "ID": "633",
            "Dictionary": "避孕药"
        }, {"ID": "634", "Dictionary": "镇静药"}, {"ID": "635", "Dictionary": "叶酸"}],
        "Hazards": [{
            "ID": "1",
            "Dictionary": "饮酒",
            "Notation": "孕早期接触有害因素类别",
            "class": "CV5101.10",
            "autoID": "60"
        }, {"ID": "2", "Dictionary": "农药", "Notation": "", "class": "CV5101.10", "autoID": "61"}, {
            "ID": "3",
            "Dictionary": "射线",
            "Notation": "",
            "class": "CV5101.10",
            "autoID": "62"
        }, {"ID": "4", "Dictionary": "化学制剂", "Notation": "", "class": "CV5101.10", "autoID": "63"}, {
            "ID": "9",
            "Dictionary": "其他",
            "Notation": "",
            "class": "CV5101.10",
            "autoID": "64"
        }],
        startTime: '',
        UseTime: '0'
    }
    return configDic;
}

export default userServe

