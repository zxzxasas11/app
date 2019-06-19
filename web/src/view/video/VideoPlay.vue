<template>
    <div>
        <video src="" controls="controls" :src="serverIp+videoInfo.url"></video>
        <el-button></el-button>
        <el-button @click="collect">收藏</el-button>
        <el-button></el-button>
    </div>
</template>

<script>
    import resourceFunction from '../../api/resource'
    export default {
        name: "VideoPlay",
        data(){
            return{
                videoInfo:{}
            }
        },
        created() {
            console.log(this.$route.params);
            this.getDetail();
        },
        methods:{
            getDetail(){
                let data = {resourceId:this.$route.params.resourceId};
                resourceFunction.getByResourceId(data).then(res=>{
                    this.videoInfo=res.data;
                })
            },
            collect(){

            }
        }
    }
</script>

<style scoped>
    video{width:80%;padding:0 10%;}
</style>
