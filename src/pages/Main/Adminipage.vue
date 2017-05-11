<template>
    <div class="adminipage">
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .adminipage {
        overflow: hidden;
        margin: 10px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 1px 1px 1px #b4b4b4;
    }

    .adminipage .el-collapse-item__header {
        font-size: 1.5rem;
        line-height: 55px;
    }

    .adminipage .el-collapse-item__header {
        height: 55px;
    }
</style>
<script>
    import pageMinxins from '../../mixins/page.mixins';
    import {Loading} from 'element-ui';
    import {Notification} from 'element-ui';
    export default{
        mixins: [pageMinxins],
        data(){
            return {}
        },
        components: {},
        watch: {},
        computed: {},
        methods: {}
    }
</script>
