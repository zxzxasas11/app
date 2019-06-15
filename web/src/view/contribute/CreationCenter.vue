<template>
    <div class="page">
        <Header></Header>
        <div class="creation-box">
            <div class="menu-box fl">
                <ul>
                    <li v-for="n in nav" v-if="$store.getters.getToken.power=n.power">
                        <router-link :to="n.url">{{n.name}}</router-link>
                    </li>
                </ul>
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
                nav:[
                    {name:"投稿",url:"/CreationCenter/Contribute",power:0},
                    {name:"视频审核",url:"/CreationCenter/Audit",power:1}
                ]
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
            ul{
                li{
                    height:40px;
                    line-height: 40px;
                    a{
                        display: inline-block;
                        height:100%;
                        width:100%;
                    }
                    a:hover{
                        background-color: #73b3fc;
                        color:#fff;
                    }
                }
            }
        }
        //右边部分
        .main-box{

        }
    }
</style>
