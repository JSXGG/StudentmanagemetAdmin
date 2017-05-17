<template>
    <div>
        <el-dialog :title="title" :visible.sync="visible" :before-close="handleClose">
            <el-form>
                <el-form-item label="班级名称" :label-width="formLabelWidth">
                    <el-input v-model="data.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="班级简介" :label-width="formLabelWidth">
                    <el-input v-model="data.content" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="学期" :label-width="formLabelWidth">
                    <el-input v-model="data.semester" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="handleClose">取 消</el-button>
                <el-button type="primary" @click="enter">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>
<script>
    import classmanageservice from 'service/classmanageservice'
    const Services = new classmanageservice();
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
                if (this.data.id == 0) {
                    return '添加班级';
                }
                else {
                    return '编辑班级';
                }
            }
        },
        methods: {
            handleClose(){
                this.$emit('classinputEvent',false);
            },
            enter(){
                let model = {
                    classid: this.data.id,
                    name: this.data.name,
                    semester: this.data.semester,
                    content: this.data.content
                }
                if (model.classid == 0) {
                    var that = this;
                    let options = {text: '添加中...', fullscreen: true}
                    let loadingInstance = Loading.service(options);
                    Services.am_addmyclass(model).then(function (ret) {
                        loadingInstance.close();
                        if (ret.result == 1) {
                            loadingInstance
                            that.$emit('classinputEvent',true);
                        }
                    });
                }
                else {
                    var that = this;
                    let options = {text: '保存中...', fullscreen: true}
                    let loadingInstance = Loading.service(options);
                    Services.am_updatamyclass(model).then(function (ret) {
                        loadingInstance.close();
                        if (ret.result == 1) {
                            loadingInstance
                            that.$emit('classinputEvent',true);
                        }
                    });
                }
            }
        },
        data() {
            return {
                formLabelWidth: '120px'
            };
        }
    }
</script>
