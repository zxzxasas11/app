<template>
    <div>
        <el-upload
                class="upload-demo"
                drag
                action=""
                :on-change="chooseFile"
                :auto-upload=false
                multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <!--<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>-->
        </el-upload>
        <!--<el-select v-model="value" placeholder="请选择">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>

        <el-select v-model="value" placeholder="请选择">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>-->
        <el-button @click="upload">确认上传</el-button>
    </div>
</template>

<script>
    import categoryFunction from '../../api/category'
    export default {
        name: "Contribute",
        data(){
            return{
                fileList:[],

            }
        },
        created(){
            this.getCategory(0);
        },
        methods:{
            getCategory(categoryPid){
                let data = {categoryPid:categoryPid};
                categoryFunction.getCategoryByPid(data).then(res=>{
                    console.log(res);
                })
            },
            //上传事件
            upload(){
                console.log(this.fileList);
            },
            chooseFile(file,fileList){
                this.fileList = fileList;
            }
        }
    }
</script>

<style scoped lang="less">

</style>
