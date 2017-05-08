<template>
    <div class="login">
        <h1 style="color: white;text-align: center;margin-top: 30px">用户登录</h1>
        <el-card class="logincontent">
            <el-form label-position="top">
                <el-form-item label="用户名">
                    <el-input v-model="model.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="model.password"></el-input>
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
    .login {
        position: fixed;
        margin: 0px;
        width: 100%;
        min-height: 100%;
        background-color: #1f2d3d;
    }

    .login .logincontent {
        position: absolute;
        width: 40%;
        min-height: 220px;
        top: 180px;
        left: 30%;
    }
</style>
<script>
    import {Loading} from 'element-ui';
    export default{
        data(){
            return {
                model: {
                    username: '',
                    password: ''
                }
            }
        },
        methods: {
            onSubmit(){
                let options = {text:'登录中...',fullscreen: true}
                let loadingInstance = Loading.service(options);
                let that = this;
                setTimeout(()=> {
                    loadingInstance.close();
                    that.$router.push({name:'teachermanage'})
                }, 1000);
            }
        },
        components: {}
    }
</script>
