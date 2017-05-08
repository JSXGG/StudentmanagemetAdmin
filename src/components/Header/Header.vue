<template>
    <div class="staheader">
        <el-row>
            <el-col :span="20">
                <div style="color: white;height: 60px;line-height: 60px;font-size: 20px;margin-left: 20px">
                    萧萧学生管理
                </div>
            </el-col>
            <el-col :span="3">
                <div style="display: flex" @click="clickOnthePerson">
                    <img src="../../assets/images/teach_icon.png" style="width: 60px;height: 60px">
                    <div style="margin-left: 10px;line-height: 60px;height: 60px;color: white;font-size: 18px">黄老师</div>
                </div>
            </el-col>
            <el-col :span="1">
                <div style="position: absolute;line-height: 60px;right: 20px">
                    <el-switch v-model="showMenu" @change="clickOntheMenuBtn"></el-switch>
                </div>
            </el-col>
        </el-row>
        <el-dialog title="提示" :visible="dialogVisible" size="tiny" :show-close="false" :modal="false">
            <span>是否退出登录</span>
            <span slot="footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="clickOntheEnter()">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                dialogVisible: false,
                switchValue: false,
            };
        },
        computed: {
            showMenu(){
                return this.$store.getters.commConf.ShowMenu;
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            clickOntheMenuBtn(){
                let ShowMenu = this.$store.getters.commConf.ShowMenu;
                this.$store.commit('COMM_CONF', {
                    ShowMenu: !ShowMenu
                });
            },
            clickOntheEnter(){
                this.dialogVisible = false;
                this.$router.push({name: 'login'})
            },
            clickOnthePerson(){
                this.dialogVisible = true;
            }
        }
    }
</script>
<style>
    .staheader {
        position: fixed;
        top: 0px;
        height: 60px;
        background-color: #1f2d3d;
        width: 100%;
        z-index: 1024;
    }
</style>
