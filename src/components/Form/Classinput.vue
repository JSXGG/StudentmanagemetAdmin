<template>
    <div>
        <el-dialog title="收货地址" :visible.sync="visible">
            <el-form :model="form">
                <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="testEvent">取 消</el-button>
                <el-button type="primary" @click="testEvent">确 定</el-button>
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
    export default {
        name: 'Classinput',
        props: {
            visible: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            testEvent(){
                this.$emit('update:visible', false);
            }
        },
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px'
            };
        }
    }
</script>
