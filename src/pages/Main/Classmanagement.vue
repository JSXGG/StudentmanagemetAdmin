<template>
    <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            sortable
            prop="createtime"
            label="创建时间">
        </el-table-column>
        <el-table-column
            prop="schoolid"
            label="学校名称"
            width="180">
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
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    schoolid: '风萧萧科技学院',
                    name: '萧萧智能1班',
                    adminuser: '萧萧',
                    content: '科技研发',
                    semester: '第一学期',
                    createtime: '2016-01-01'
                },{
                    schoolid: '风萧萧科技学院',
                    name: '萧萧智能1班',
                    adminuser: '萧萧',
                    content: '科技研发',
                    semester: '第二学期',
                    createtime: '2017-01-01'
                }]
            }
        },
        methods: {
            handleClick() {
                console.log(1);
            }
        }
    }
</script>
