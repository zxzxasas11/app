<template>
    <div>
        <video controls="controls" :src="serverIp+videoInfo.url"></video>
        <el-button></el-button>
        <el-button @click="collect">收藏</el-button>
        <el-button></el-button>
        <div v-if="sendVisible" class="overflow_hide">
            <el-input  v-model="sendInfo.content" class="fl"></el-input>
            <el-button @click="sendBarrage" class="fr">发送</el-button>
        </div>

        <canvas id="canvas" width="500" height="400" style="position:absolute;top:0;left:0;">
            您的浏览器不支持canvas标签。
        </canvas>
    </div>
</template>

<script>
    import resourceFunction from '../../api/resource'
    import barrageFunction from '../../api/barrage'
    import historyFunction from '../../api/history'
    export default {
        name: "VideoPlay",
        data(){
            return{
                videoInfo:{},
                barrage:"",
                sendInfo:{
                    resourceId:this.$route.params.resourceId,
                    content:"",
                    sendTime:1.05
                },
                sendVisible:false
            }
        },
        created() {
            this.getDetail();
            //添加历史记录
            this.addHistory();
        },
        mounted(){
            let video =document.querySelector("video");
            video.addEventListener("timeupdate",function(){
                let timeDisplay;
                //用秒数来显示当前播放进度
                timeDisplay = Math.floor(video.currentTime);
                console.log(timeDisplay);
                //当视频播放到 4s的时候做处理
                if(timeDisplay == 4){
                    //处理代码
                }
            },false);

            document.body.addEventListener("keyup",e=>{
                if(e.key ==='Enter'){
                    this.sendVisible=true;
                }
            })
        },
        methods:{
            getDetail(){
                let data = {resourceId:this.$route.params.resourceId};
                resourceFunction.getByResourceId(data).then(res=>{
                    console.log(res);
                    this.videoInfo=res.data;
                })
            },
            collect(){

            },
            //发送弹幕
            sendBarrage(){
                barrageFunction.sendBarrage(this.sendInfo).then(res=>{
                    console.log(res);
                    if(res.code===200){
                        this.$message("发送成功");
                        this.sendVisible=false;
                    }
                })
            },
            addHistory(){
                let data={resourceId:this.$route.params.resourceId};
                historyFunction.addHistory(data).then(res=>{
                    console.log(res);
                })
            }
        }
    }
</script>

<style scoped>
    video{width:80%;padding:0 10%;}
</style>
