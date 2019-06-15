<template>
    <div>
        <h1>{{columnInfo.categoryName}}</h1>

        <div class="video-box">
            <div v-if="videoList.length===0">暂无数据</div>
            <div v-for="v in videoList" @click="openVideo(v)">
                {{v.resourceName}}
                {{v.content}}
                {{common.formDataToHms(v.createTime)}}
            </div>
        </div>
    </div>
</template>

<script>
    import resourceFunction from '../../api/resource'
    import categoryFunction from '../../api/category'
    export default {
        name: "Column",
        data(){
            return{
                columnInfo:{},
                videoList:[]
            }
        },
        created() {
            this.getVideo(this.$route.params.categoryId);
            this.getCategoryInfo(this.$route.params.categoryId);
        },
        methods:{
            getVideo(categoryId){
                let data = {categoryId:categoryId,status:1};
                resourceFunction.getByCategoryId(data).then(res=>{
                    console.log(res);
                    this.videoList = res.data.rows;
                })
            },
            getCategoryInfo(categoryId){
                let data = {categoryId:categoryId};
                categoryFunction.getCategoryById(data).then(res=>{
                    this.columnInfo=res.data;
                })
            },
            openVideo(v){
                window.open("/Video/"+v.categoryId+"/"+v.resourceId);
            }
        },
        watch:{
            '$route.params.categoryId'(data){
                this.getCategoryInfo(data);
                this.getVideo(data);
            }
        }
    }
</script>

<style scoped>

</style>
