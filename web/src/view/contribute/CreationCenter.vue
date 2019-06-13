<template>
    <div class="page">
        <Header></Header>

        <div class="creation-box">
            <div class="menu-box fl">

            </div>
            <div class="main-box fr">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from '../../components/front/header'
    export default {
        name: "CreationCenter",
        data(){
            return{

            }
        },
        components:{Header},
    }
</script>

<style scoped lang="less">
    .page{height:100%;}
    @headerHeight:40px;
    @leftWidth:240px;
    .creation-box{
        width:100%;
        height:calc(100% - @headerHeight);
        //左边部分
        .menu-box{
            width:@leftWidth;
            height:100%;
            border-right:1px solid #ddd;
        }
        //右边部分
        .main-box{

        }
    }
</style>
