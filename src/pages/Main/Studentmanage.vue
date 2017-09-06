<template>
    <div>
        <div style="height: 50px">
            <el-button @click.native="addStudent" style="position: absolute;right: 20px" type="primary" icon="plus">
                添加学生
            </el-button>
        </div>
        <div style="margin-top: 15px;margin-bottom: 15px">
            <el-select v-model="selectValue" slot="prepend" placeholder="请选择" @visible-change="vischange">
                <el-option v-for="(item,key) in classList" :label="item.name" :value="item.id" :key="key"></el-option>
            </el-select>
        </div>
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    sortable
                    label="创建时间">
                <template scope="scope">
                    {{dateFormat(scope.row.createtime)}}
                </template>
            </el-table-column>
            <el-table-column
                    label="姓名"
                    width="180">
                <template scope="scope">
                    {{getName(scope.row)}}
                </template>
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">
            </el-table-column>
            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template scope="scope">
                    <el-button @click="editor(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small" @click="deleteRecord(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <Studentinput :data="currentData" :visible.async="showDialog"
                      @classinputEvent="classinputEvent"></Studentinput>
        <el-dialog
                title="确定删除当前学生?"
                :modal-append-to-body="false"
                :visible.sync="dialogVisible"
                size="tiny">
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogEnter">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    function initStudentModel() {
        return {
            firstname: null,
            lastname: null,
            address: null,
            father: null,
            fatherphone: null,
            mother: null,
            motherphone: null,
            moment: null,
            grade: null
        }
    }
    import classmanageservice from 'service/classmanageservice'
    import Studentinput  from 'components/Form/Studentinput.vue'
    import moment from 'moment'
    import {Loading} from 'element-ui';
    const Services = new classmanageservice();
    export default {
        data() {
            return {
                classList: [],
                searchValue: '',
                selectValue: null,
                dialogVisible: false,
                tableData: [],
                currentData: {},
                showDialog: false
            }
        },
        mounted(){
            this.am_getmyclasslist();
        },
        components: {
            Studentinput
        },
        watch: {
            'selectValue'(val) {
                console.log(val);
                if (val) {
                    this.am_getstudentbyclassid(val);
                }
            }
        },
        methods: {
            getName(model){
                return model.firstname + model.lastname;
            },
            editor(model){
                this.currentData = model;
                this.showDialog = true;
            },
            addStudent(){
                this.showDialog = true;
                let model = initStudentModel();
                model.classid = this.selectValue;
                this.currentData = model;
            },
            deleteRecord(model){
                this.dialogVisible = true;
                this.currentData = model;
            },
            vischange(val){
                if(val === true){
                    this.am_getmyclasslist();
                }
            },
            dialogEnter(){
                this.dialogVisible = false;
                var that = this;
                let options = {text: '删除中...', fullscreen: true}
                let loadingInstance = Loading.service(options);
                Services.am_delstudent(that.currentData.id).then(function (ret) {
                    loadingInstance.close();
                    if (ret.result == 1) {
                        that.am_getstudentbyclassid(that.selectValue);
                    }
                });
            },
            dateFormat(date){
                return moment.unix(date).format('YYYY-MM-DD')
            },
            am_getmyclasslist(){
                var that = this;
                Services.am_getmyclasslist().then(function (ret) {
                    if (ret && ret.data) {
                        that.classList = ret.data;
                    }
                    else {
                        that.classList = [];
                    }
                });
            },
            am_getstudentbyclassid(id){
                if (!id) {
                    return;
                }
                var that = this;
                Services.am_getstudentbyclassid(id).then(function (ret) {
                    if (ret && ret.data) {
                        that.tableData = ret.data;
                    }
                    else {
                        that.tableData = [];
                    }
                });
            },
            classinputEvent(val){
                this.showDialog = false;
                if (val) {
                    this.am_getstudentbyclassid(this.selectValue);
                }
            }
        }
    }
</script>
