<template>
    <div>
        <Hearderbar></Hearderbar>
        <div :class="{showappcontainer: getShowMenu,unshowappcontainer:!getShowMenu}">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </div>
        <Smamenu></Smamenu>
    </div>
</template>
<script>
    import Hearderbar from './components/Header/Header.vue'
    import Loadingbar from './components/loading/Loading.vue'
    import Smamenu from './components/Smamenu/Smamenu.vue'
    export default {
        components: {
            Hearderbar,
            Loadingbar,
            Smamenu
        },
        data(){
            return {}
        },
        computed: {
            getShowMenu(){
                return this.$store.getters.commConf.ShowMenu;
            }
        }
    }
</script>
<style>
    .showappcontainer {
        padding: 20px;
        border-radius: 10px;
        margin-left: 250px;
        margin-top: 60px;
        /*transition: 0.3s;*/
    }
    .unshowappcontainer {
        padding: 20px;
        margin-left: 0px;
        margin-top: 60px;
        height: 100px;
        /*transition: 0.3s;*/
    }
</style>

