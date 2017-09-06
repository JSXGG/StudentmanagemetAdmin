<template>
    <div class="login">
        {{model}}
        <h1 style="color: white;text-align: center;margin-top: 30px">用户登录</h1>
        <el-card class="logincontent">
            <el-form label-position="top">
                <el-form-item label="用户名">
                    <el-input v-model="model.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input type="password" v-model="model.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <div style="position: absolute;right: 0px">
                        <el-button type="primary" @click="onSubmit">登录</el-button>
                    </div>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>
<style>
</style>
<script>
    import {Loading} from 'element-ui';
    import userservice from 'service/userservice'
    import {Message} from 'element-ui';
    const Services = new userservice();
    export default{
        data(){
            return {
                model: {
                    username: null,
                    password: null
                }
            }
        },
        methods: {
            onSubmit(){
                if (this.model.username && this.model.password) {
                    let options = {text: '登录中...', fullscreen: true}
                    let loadingInstance = Loading.service(options);
                    let that = this;
                    Services.adminLogin(this.model)
                        .then(function (ret) {
                            loadingInstance.close();
                            if (ret.result == '1') {
                                that.$router.push({name: 'teachermanage'})
                                Services.am_getschoolinfo()
                            }
                        })
                }
                else {
                    Message({
                        message: "请输入用户名或密码",
                        type: 'warning'
                    });
                }
            }
        },
        components: {}
    }
</script>
