<template>
    <div>
        <el-dialog :title="title" :visible.sync="visible" :before-close="handleClose">
            <el-form v-if="isAdd==false">
                <el-form-item label="姓氏" :label-width="formLabelWidth">
                    <el-input v-model="data.firstname" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="名字" :label-width="formLabelWidth">
                    <el-input v-model="data.lastname" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="专业" :label-width="formLabelWidth">
                    <el-input v-model="data.subjects" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" :label-width="formLabelWidth">
                    <el-input type="number" v-model="data.phone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="职位" :label-width="formLabelWidth">
                    <el-input v-model="data.position" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="权限" :label-width="formLabelWidth">
                    <el-select v-model="data.permission" placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <el-form v-if="isAdd">
                <el-input placeholder="请搜索" v-model="searchText" icon="search"></el-input>
                <br/>
                <br/>
                <div v-for="item in items">
                    <el-row>
                        <el-col :span="3">
                            <img :src="item.headimgurl" height="60px" style="border-radius: 30px">
                        </el-col>
                        <el-col :span="6">
                            <div style="line-height: 60px">{{item.nickname}}</div>
                        </el-col>
                        <el-col :span="15">
                            <div style="line-height: 60px;right: 20px;position: absolute">
                                <el-button @click="addTeacher(item)">添加</el-button>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button  type="primary" @click="enter">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script>
    import userservice from 'service/userservice'
    const Services = new userservice();
    import {Loading} from 'element-ui';
    export default {
        name: 'Teacherinput',
        props: {
            visible: {
                type: Boolean,
                default: false
            },
            data: {
                type: Object
            }
        },
        computed: {
            title(){
                if (this.isAdd) {
                    return '添加老师';
                }
                else {
                    return '编辑资料';
                }
            },
            isAdd(){
                if (this.data.teacherid) {
                    return false
                }
                else {
                    return true
                }
            }
        },
        methods: {
            addTeacher(item){
                var that = this;
                let options = {text: '保存中...', fullscreen: true}
                let loadingInstance = Loading.service(options);
                Services.am_addteacherbyid(item.id).then(function (ret) {
                    loadingInstance.close();
                    if (ret.result == 1) {
                        that.$emit('teacherinputEvent', true);
                    }
                });
            },
            handleClose(){
                this.$emit('teacherinputEvent', false);
            },
            enter(){
                if (this.isAdd) {
                    var that = this;
                    Services.am_searchtheteacher(this.searchText).then(function (ret) {
                        console.log(ret);
                        if (ret.result == 1) {
                            that.items = ret.data;
                        }
                    });
                }
                else {
                    var that = this;
                    let options = {text: '保存中...', fullscreen: true}
                    let loadingInstance = Loading.service(options);
                    Services.am_updatatecherinfo(this.data).then(function (ret) {
                        loadingInstance.close();
                        if (ret.result == 1) {
                            that.$emit('teacherinputEvent', true);
                        }
                    });
                }
            }
        },
        data() {
            return {
                formLabelWidth: '100px',
                searchText: '',
                items: [],
                options: [{
                    value: '1',
                    label: '普通老师'
                }, {
                    value: '2',
                    label: '管理员'
                }]
            };
        }
    }
</script>
