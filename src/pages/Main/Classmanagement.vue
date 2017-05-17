<template>
    <div>
        <div style="height: 50px">
            <el-button @click.native="addClass" style="position: absolute;right: 20px" type="primary" icon="plus">添加班级
            </el-button>
        </div>

        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
                sortable
                prop="createtime"
                label="创建时间">
            </el-table-column>
            <el-table-column
                prop="name"
                label="班级名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="content"
                label="班级简介">
            </el-table-column>
            <el-table-column
                sortable
                prop="semester"
                label="学期">
            </el-table-column>
            <el-table-column
                prop="adminuser"
                label="管理员">
            </el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small" @click="delrecord(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <classinput :data="currentData" :visible.async="showDialog"
                    @classinputEvent="classinputEvent"></classinput>
        <el-dialog
            title="确定删除当前班级?"
            :visible.sync="dialogVisible"
            size="tiny">
            <span>删除班级之后，班级内的学生所有信息将被删除，是否确定</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogEnter">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import classmanageservice from 'service/classmanageservice'
    import classinput from 'components/Form/Classinput'
    import moment from 'moment'
    import {Loading} from 'element-ui';
    const Services = new classmanageservice();
    export default {
        data() {
            return {
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
            classinput
        },
        methods: {
            am_getmyclasslist(){
                var that = this;
                Services.am_getmyclasslist().then(function (ret) {
                    if (ret && ret.data) {
                        ret.data.forEach(function (item) {
                            item.createtime = moment.unix(item.createtime).format('YYYY-MM-DD')
                            item.adminuser = item.info.firstname + ' ' + item.info.lastname;
                        })
                        that.tableData = ret.data;
                    }
                });
            },
            handleClick(item) {
                this.currentData = item;
                this.showDialog = true;
            },
            delrecord(item){
                this.currentData = item;
                this.dialogVisible = true;
            },
            dialogEnter(){
                this.dialogVisible = false;
                var that = this;
                let options = {text: '删除中...', fullscreen: true}
                let loadingInstance = Loading.service(options);
                Services.am_deleteclass(that.currentData.id).then(function (ret) {
                    loadingInstance.close();
                    if (ret.result == 1) {
                        that.am_getmyclasslist();
                    }
                });
            },
            classinputEvent(val){
                this.showDialog = false;
                if (val) {
                    this.am_getmyclasslist();
                }
            },
            addClass(){
                let model = {
                    id: 0,
                    name: '',
                    content: '',
                    semester: ''
                }
                this.currentData = model;
                this.showDialog = true;
            }
        }
    }
</script>
