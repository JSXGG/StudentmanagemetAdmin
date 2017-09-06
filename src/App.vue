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
    import Smamenu from './components/Smamenu/Smamenu.vue'
    export default {
        components: {
            Hearderbar,
            Smamenu
        },
        data(){
            return {}
        },
        computed: {
            getShowMenu(){
                return this.$store.getters.showMenu;
            }
        }
    }
</script>


