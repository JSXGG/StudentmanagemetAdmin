import LocalForage from 'localforage';


const ACCESS_TOKEN = 'access_token';  //token
const ACCESS_TOKEN_DATA = 'access_token_data';  // token 原始数据
const DATATYPE_BIRTHINFO = 'birthinfo'//出生数据
const DATATYPE_BASEINFO = 'baseinfo'//基本数据


export default{
    /*获取出生记录*/
    getRecordWithbirthinfo(uid,data,error){
        var Key = uid+'#'+DATATYPE_BIRTHINFO;
        this.LocalForageGet(Key,function (resultData) {
            data(resultData);
        },function (err){
            error(err)
        });
    },
    /*获取基本信息*/
    getRecordWithbaseinfo(uid,data,error){
        var Key = uid+'#'+DATATYPE_BIRTHINFO;
        this.LocalForageGet(Key,function (resultData) {
            data(resultData);
        },function (err){
            error(err)
        });
    },

    /*保存出生记录*/
    saveRecordWithbirthinfo(uid,obj,result){
        var temp = {};
        for(var index in obj){
            var obj_value = obj[index].value;
            var obj_key = obj[index].key;
            temp[obj_key] = obj_value;
        }
        var userinfo = {dataType:'birthData',data:temp};
        var Key = uid+'#'+DATATYPE_BIRTHINFO;
        this.LocalForageSave(Key,userinfo,function (error){
            result(error)
        });
    },
    /*保存基本信息*/
    saveRecordWithbaseinfo(uid,obj,result){
        var temp = {};
        for(var index in obj){
            var obj_value = obj[index].value;
            var obj_key = obj[index].key;
            temp[obj_key] = obj_value;
        }
        var userinfo = {dataType:'birthData',data:temp};
        var Key = uid+'#'+DATATYPE_BASEINFO;
        this.LocalForageSave(Key,userinfo,function (error){
            result(error)
        });
    },
    /*key-value保存数据*/
    LocalForageSave(Key,value,resultData){
        LocalForage.setItem(Key, value, function (err){
            resultData(err);
        });
    },
    /*key获取数据*/
    LocalForageGet(Key,resultData,resultError){
        LocalForage.getItem(Key, function (err, value){
            resultError(err);
            resultData(value);
        });
    },


    setItem(key, value){
        return LocalForage.setItem(key, value);
    },

    getItem(key){
        return LocalForage.getItem(key);
    },


    /* 获取token  */
    getAccessToken(){
        return this.getItem(ACCESS_TOKEN);
    },

    setAccessToken(token){
        return this.setItem(ACCESS_TOKEN,token);
    },

    setAccessTokenData(data){
        return this.setItem(ACCESS_TOKEN_DATA, data)
    },

    //获取 请求保存的 token 数据
    getAccessTokenData(){
        return this.getItem(ACCESS_TOKEN_DATA)
    }

};
