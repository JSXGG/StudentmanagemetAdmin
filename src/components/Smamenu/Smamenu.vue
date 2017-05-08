<template>
    <el-row :class="{showsmamenu: getShowMenu,unshowsmamenu:!getShowMenu}">
        <el-col :span="24">
            <el-menu @select="menuSelect" default-active="teachermanage">
                <el-submenu index="1">
                    <template slot="title">菜单</template>
                    <el-menu-item index="teachermanage">教师管理</el-menu-item>
                    <el-menu-item index="classmanagement">班级管理</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</template>
<style>
    .unshowsmamenu {
        position: fixed;
        top: 60px;
        height: 100%;
        background: white;
        min-width: 250px;
        z-index: 1000;
        margin-left: -250px;
        background: white;
        transition: 0.3s;
    }

    .showsmamenu {
        position: fixed;
        top: 60px;
        height: 100%;
        background: white;
        min-width: 250px;
        z-index: 1000;
        background: white;
        transition: 0.3s;
    }
</style>
<script>
    export default {
        computed: {
            getShowMenu(){
                return this.$store.getters.commConf.ShowMenu;
            }
        },
        methods: {
            menuSelect(val){
                this.$router.push({name: val})
            }
        }
    }
</script>
