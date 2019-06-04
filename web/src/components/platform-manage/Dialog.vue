<template>
    <el-dialog  :close-on-click-modal="false" :title="formTitle" :visible.sync="dialogFormVisible">
        <el-form :model="form" :rules="rules" ref="form">
            <el-form-item :prop="d.key" :label-width="formLabelWidth" :key="d.name" :label="d.name"  v-for="d in formData" >
                <el-input v-model="form[d.key]" autocomplete="off" v-if="d.type==='input'" :readonly="d.disable" :type="d.password?'password':''" ></el-input>
                <el-time-picker
                        v-if="d.type==='date'"
                        v-model="form[d.key]"
                        value-format="HH:mm"
                        format="HH:mm"
                        :placeholder="d.name">
                </el-time-picker>
                <el-select
                        v-model="form[d.key]"
                        placeholder="请选择"
                        v-if="d.type==='select'"
                        style="width:calc(100% - 80px)"
                        @change="changeSelect($event,d.method)">
                    <el-option :label="m.name" :key="m.key" :value="m.key" v-for="m in d.option"></el-option>
                </el-select>
                <el-upload
                        ref="upload"
                        class="upload-demo"
                        action=""
                        :file-list="fileList"
                        :auto-upload=false
                        multiple
                        :limit=1
                        v-if="d.type==='upload'">
                    <el-button size="small" type="primary">点击上传</el-button>
                </el-upload>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="formSubmit">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
    export default {
        name: "Dialog",
        data(){
            return{
                formLabelWidth:"150",
                form:{},
                formTitle:"",
                dialogFormVisible:false,
                obj:{},
                fileList:[],
            }
        },
        props:['formData','rules'],
        methods:{
            formSubmit(){
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        let submitData = this.formData;
                        for(let i =0;i<submitData.length;i++){
                            let ss = submitData[i].key;
                            this.obj[ss]=this.form[ss];
                        }
                        this.$emit("formSubmit",this.obj);
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            changeSelect(data,method){
                this.$emit(method,data);
            },
            fileChange(){
            },

        },
        mounted() {
            //this.$refs.form.clearValidate();
        },
        watch:{
            /*dialogFormVisible() {
                if(this.dialogFormVisible){
                    //this.$refs.form.clearValidate();
                    this.$refs.form.clearValidate();
                }

            }*/
        }

    }
</script>

<style scoped>

</style>
