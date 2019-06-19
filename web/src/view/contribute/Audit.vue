<template>
    <div style="width:100%;">
        <div class="list-title">
            <div></div>
            <div>视频名称</div>
            <div>视频介绍</div>
            <div>投稿人</div>
            <div>投稿时间</div>
            <div>投稿分区</div>
            <div>操作</div>
        </div>
        <div v-if="list.length===0">暂无数据</div>
        <div class="list" v-for="(l,index) in list">
            <div>{{index+1}}</div>
            <div>{{l.resourceName}}</div>
            <div>{{l.content}}</div>
            <div>{{l.username}}</div>
            <div>{{common.formDataToHms(l.createTime)}}</div>
            <div>{{l.categoryName}}</div>
            <div>
                <button class="check-btn" @click="auditVideo(l)">查看</button>
            </div>
        </div>
    </div>
</template>

<script>
    import resourceFunction from '../../api/resource'
    export default {
        name: "Audit",
        data(){
            return{
                list:[]
            }
        },
        created() {
            this.getList();
        },
        methods:{
            getList(){
                let data = {status:1};
                resourceFunction.getByCategoryId(data).then(res=>{
                    this.list = res.data.rows;
                })
            },
            auditVideo(l){
                this.$router.push("/CreationCenter/AuditPlay/"+l.resourceId)
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../assets/css/table.less';



</style>
