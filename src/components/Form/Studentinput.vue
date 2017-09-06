<template>
    <div>
        <el-dialog :modal-append-to-body="false" :title="title" :visible.sync="visible" :before-close="handleClose">
            <el-form>
                <el-form-item label="姓" :label-width="formLabelWidth">
                    <el-input v-model="data.firstname" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="名" :label-width="formLabelWidth">
                    <el-input v-model="data.lastname" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="地址" :label-width="formLabelWidth">
                    <el-input v-model="data.address" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="父亲名称" :label-width="formLabelWidth">
                    <el-input v-model="data.father" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="父亲电话" :label-width="formLabelWidth">
                    <el-input v-model="data.fatherphone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="母亲名称" :label-width="formLabelWidth">
                    <el-input v-model="data.mother" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="母亲电话" :label-width="formLabelWidth">
                    <el-input v-model="data.motherphone" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="托管类型" :label-width="formLabelWidth">
                    <el-select v-model="data.moment" placeholder="托管时刻">
                        <el-option label="午托" value="1"></el-option>
                        <el-option label="晚托" value="2"></el-option>
                        <el-option label="全托" value="3"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="enter">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<style>
    body {
        background-color: #ff0000;
    }
</style>
<script>
    import classmanageservice from 'service/classmanageservice'
    const Services = new classmanageservice();
    import {Loading} from 'element-ui';
    export default {
        name: 'Classinput',
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
                if (this.data&&this.data.id) {
                    return '编辑学生信息';
                }
                else {
                    return '添加学生信息';
                }
            }
        },
        methods: {
            handleClose(){
                this.$emit('classinputEvent', false);
            },
            enter(){
                let model = this.data;
                if (model && model.id) {
                    model.studentid = model.id;
                    var that = this;
                    let options = {text: '保存中...', fullscreen: true}
                    let loadingInstance = Loading.service(options);
                    Services.am_updatastudent(model).then(function (ret) {
                        loadingInstance.close();
                        if (ret.result == 1) {
                            loadingInstance
                            that.$emit('classinputEvent', true);
                        }
                    });
                }
                else {
                    var that = this;
                    let options = {text: '添加中...', fullscreen: true}
                    let loadingInstance = Loading.service(options);
                    Services.am_addstudent(model).then(function (ret) {
                        loadingInstance.close();
                        if (ret.result == 1) {
                            loadingInstance
                            that.$emit('classinputEvent', true);
                        }
                    });
                }
            }
        },
        data() {
            return {
                momentValue:null,
                formLabelWidth: '120px'
            };
        }
    }
</script>
