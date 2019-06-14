<template>
    <div>
        <el-form  :model="resourceAdd" label-width="80px" style="text-align: left">
            <el-upload
                    class="upload-demo"
                    drag
                    action=""
                    :on-change="chooseFile"
                    :auto-upload=false
                    multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
            <el-form-item label="上传标题">
                <el-input v-model="resourceAdd.resourceName"></el-input>
            </el-form-item>
            <el-form-item label="视频介绍">
                <el-input v-model="resourceAdd.content"></el-input>
            </el-form-item>
            <el-form-item label="选择分区">
                <el-select v-model="categoryPid" placeholder="请选择" @change="chooseSecondSelect">
                    <el-option
                            v-for="item in firstSelect"
                            :key="item.categoryId"
                            :label="item.categoryName"
                            :value="item.categoryId">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="选择分类">
                <el-select v-model="resourceAdd.categoryId" placeholder="请选择">
                    <el-option
                            v-for="item in secondSelect"
                            :key="item.categoryId"
                            :label="item.categoryName"
                            :value="item.categoryId">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-button @click="upload">确认上传</el-button>
        </el-form>
    </div>
</template>

<script>
    import categoryFunction from '../../api/category'
    import resourceFunction from '../../api/resource'

    export default {
        name: "Contribute",
        data() {
            return {
                fileList: [],
                firstSelect: [],
                secondSelect: [],
                categoryPid: "",
                resourceAdd: {
                    resourceName: "",
                    content: "",
                    categoryId: "",
                    url: "",
                    creator: "370ace00841711e9a5e687bbf4056c58"
                }
            }
        },
        created() {
            this.getCategory(0).then(res => {
                this.firstSelect = res.data.rows;
            });
        },
        methods: {
            getCategory(categoryPid) {
                let data = {categoryPid: categoryPid};
                return new Promise((resolve, reject) => {
                    categoryFunction.getCategoryByPid(data).then(function (response) {
                        resolve(response);
                    });
                })
            },
            chooseSecondSelect(data) {
                this.getCategory(data).then(res => {
                    this.secondSelect = res.data.rows;
                });

            },
            //上传事件
            upload() {
                let upload = new FormData();
                upload.append("file", this.fileList[0].raw);
                resourceFunction.upload(upload).then(res => {
                    this.resourceAdd.url = res.data;
                    resourceFunction.resourceAdd(this.resourceAdd).then(response=>{
                        console.log(response);
                    })
                });


            },
            chooseFile(file, fileList) {
                this.fileList = fileList;
            }
        }
    }
</script>

<style scoped lang="less">

</style>
