/**
 * Created by baird on 2016/12/30.
 */
import * as types from '../mutation';
const state = {
    ShowMenu:true
};
const getters = {
    commConf: state => state,
};
const mutations = {
    [types.COMM_CONF](state, settings){
        state = Object.assign(state, settings);
    }
};

export default {
    state,
    getters,
    mutations
}
