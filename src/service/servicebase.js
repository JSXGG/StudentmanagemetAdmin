import axios from 'axios';
import {Message} from 'element-ui';
import SessionStorge from './sdSessionStorge'
class servicebase {
    request(url, data) {
        return axios.post(url, data).then(function (context) {
            if (context && context.data && context.data.error) {
                Message({
                    message: context.data.error,
                    type: 'warning'
                });
            }
            return context.data;
        }).catch(function (error) {
            Message({
                message: error,
                type: 'warning'
            });
        });
    }
    requestWithToken(url, data) {
        if (!data) {
            data = {};
        }
        let usertoken = SessionStorge.getUserToken();
        if (usertoken) {
            data['usertoken'] = usertoken;
        }
        return this.request(url, data);
    }

}
export default servicebase;
