<template>
    <div>
        <video :src="serverIp+videoInfo.url" controls></video>

        <el-button @click="history.back()">返回</el-button>
        <el-button @click="audit">审批</el-button>
    </div>
</template>

<script>
    import resourceFunction from '../../api/resource'
    export default {
        name: "AuditPlay",
        data(){
            return{
                videoInfo:{}
            }
        },
        created() {
            //alert(this.$route.params.resourceId);
            this.getDetail();
        },
        methods:{
            getDetail(){
                let data = {resourceId:this.$route.params.resourceId};
                resourceFunction.getByResourceId(data).then(res=>{
                    this.videoInfo=res.data;
                })
            },
            audit(){
                ///resource/updateByResourceId
                let data={resourceId:this.$route.params.resourceId,data:{status:2}};
                resourceFunction.updateByResourceId(data).then(res=>{
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>
video{width:80%;padding:0 10%;}
</style>
