<template>
    <div>
        <h1>{{columnInfo.categoryName}}</h1>

        <div class="video-box">
            <div v-for="v in videoList">
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
                    this.videoList = res.data.rows;
                })
            },
            getCategoryInfo(categoryId){
                let data = {categoryId:categoryId};
                categoryFunction.getCategoryById(data).then(res=>{
                    this.columnInfo=res.data;
                })
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
