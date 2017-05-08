<template>
    <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column prop="createtime" label="创建时间" sortable></el-table-column>
        <el-table-column prop="firstname" label="姓氏" ></el-table-column>
        <el-table-column prop="lastname" label="名字" ></el-table-column>
        <el-table-column prop="subjects" label="专业" ></el-table-column>
        <el-table-column prop="phone" label="手机号码" ></el-table-column>
        <el-table-column prop="position" label="职位"></el-table-column>
        <el-table-column prop="permission" label="权限" ></el-table-column>
        <el-table-column prop="state" label="状态" ></el-table-column>
        <el-table-column
            fixed="right"
            label="操作"
            width="100">
            <template scope="scope">
                <el-button @click="handleClick" type="text" size="small">删除</el-button>
                <el-button type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        methods: {
            handleClick() {
                console.log(1);
            }
        },
        data() {
            return {
                tableData: [
                    {createtime: '2016-05-02', firstname: '翁', lastname: '江爷', subjects: 'IT工程师',phone:'15677676665',position:'工程师',permission:'管理员',state:'正常'},
                    {createtime: '2016-06-02', firstname: '翁', lastname: '江爷', subjects: 'IT工程师',phone:'15677676665',position:'工程师',permission:'管理员',state:'正常'},
                    {createtime: '2016-07-02', firstname: '翁', lastname: '江爷', subjects: 'IT工程师',phone:'15677676665',position:'工程师',permission:'管理员',state:'正常'},
                    {createtime: '2016-08-02', firstname: '翁', lastname: '江爷', subjects: 'IT工程师',phone:'15677676665',position:'工程师',permission:'管理员',state:'正常'}
                ]
            }
        }
    }
</script>
