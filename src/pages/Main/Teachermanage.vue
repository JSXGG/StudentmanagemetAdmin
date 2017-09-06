<template>
    <div>
        <div style="height: 50px">
            <el-button @click.native="addTeacher" style="position: absolute;right: 20px" type="primary" icon="plus">
                添加教师
            </el-button>
        </div>
        <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column prop="createtime" label="创建时间" sortable></el-table-column>
            <el-table-column prop="firstname" label="姓氏"></el-table-column>
            <el-table-column prop="lastname" label="名字"></el-table-column>
            <el-table-column prop="subjects" label="专业"></el-table-column>
            <el-table-column prop="phone" label="手机号码"></el-table-column>
            <el-table-column prop="position" label="职位"></el-table-column>
            <el-table-column prop="permission" label="权限"></el-table-column>
            <el-table-column prop="state" label="状态"></el-table-column>
            <el-table-column
                fixed="right"
                label="操作"
                width="100">
                <template scope="scope">
                    <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <Teacherinput :data="currentData" :visible.async="showDialog" @teacherinputEvent="classinputEvent"></Teacherinput>
    </div>
</template>
<script>
    import userservice from 'service/userservice'
    import Teacherinput from 'components/Form/Teacherinput'
    import moment from 'moment'
    const Services = new userservice();
    export default {
        data() {
            return {
                dialogVisible: false,
                tableData: [],
                currentData: {},
                showDialog: false
            }
        },
        components: {
            Teacherinput
        },
        mounted(){
           this.am_getalltheteacher();
        },
        methods: {
            am_getalltheteacher(){
                var that = this;
                Services.am_getalltheteacher().then(function (ret) {
                    if (ret && ret.data) {
                        ret.data.forEach(function (item) {
                            item.createtime = moment.unix(item.createtime).format('YYYY-MM-DD')
                            if (item.state == '1') {
                                item.state = '正常'
                            }
                            else {
                                item.state = '已离职'
                            }
                            if (item.permission == '2') {
                                item.permission = '管理员'
                            }
                            else {
                                item.permission = '普通'
                            }
                        })
                        that.tableData = ret.data;
                    }
                });
            },
            handleClick(item) {
                this.currentData = item;
                this.showDialog = true;
            },
            classinputEvent(val){
                this.showDialog = false;
                if(val){
                    this.am_getalltheteacher();
                }
            },
            addTeacher(){
                this.currentData = {};
                this.showDialog = true;
            }
        }
    }
</script>
