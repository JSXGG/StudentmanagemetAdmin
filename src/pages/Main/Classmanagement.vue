<template>
    <div>
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
                    <el-button @click="handleClick" type="text" size="small">编辑</el-button>
                    <el-button type="text" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <Classinput :visible.async="showDialog" @update:visible="val => showDialog = val"></Classinput>
    </div>
</template>

<script>
    import classmanageservice from 'service/classmanageservice'
    import Classinput from 'components/Form/Classinput'
    import moment from 'moment'
    const Services = new classmanageservice();
    export default {
        data() {
            return {
                tableData: [],
                showDialog: false
            }
        },
        mounted(){
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
        components: {
            Classinput
        },
        methods: {
            handleClick() {
                this.showDialog = true;
            }
        }
    }
</script>
