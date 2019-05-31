<template>
    <div class="login-box">
        <div class="title">
            <span @click="state='register'">注册</span>
            <span>/</span>
            <span @click="state='login'">登录</span>
        </div>

        <el-form v-if="state==='register'"  :model="registerForm" :rules="registerRules" ref="registerForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="code">
                <el-input v-model="registerForm.code"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="registerForm.password"></el-input>
            </el-form-item>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitRegister('registerForm')">注册</el-button>
                <el-button @click="resetForm('registerForm')">重置</el-button>
            </el-form-item>
        </el-form>

        <el-form v-if="state==='login'" :model="loginForm" :rules="loginRules" ref="loginForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" prop="code">
                <el-input v-model="loginForm.code"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
                <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                state:"login",
                registerForm:{
                    code:"",
                    password:"",
                    username:""
                },
                registerRules: {
                    code: [
                        { required: true, message: '请输入账号', trigger: 'blur' },
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                },
                loginForm: {
                    code: '',
                    password:''
                },
                loginRules: {
                    code: [
                        { required: true, message: '请输入账号', trigger: 'blur' },
                        { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ],
                }
            }
        },
        methods: {
            submitRegister(formName){
                const that = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        that.register();
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            register(){
                const that = this;
                /*this.$post("/User/userAdd",this.registerForm).then(function(response){
                    console.log(response)
                })*/
            },
            login(){
                const that = this;
                /*this.$post("/User/login",this.loginForm).then(function(response){
                    console.log(response)
                    if(response.code===200){
                        that.$router.push("/Home");
                        that.$store.dispatch("setUserInfo",response.data[0]);
                    }
                })*/
            },
            submitForm(formName) {
                const that = this;
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        that.login();
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped lang="less">
    .login-box{
        width:600px;
        height:400px;
        position: absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        margin:auto;
        .title{
            text-align: left;
            padding-left:50px;
            font-size:20px;
        }
    }
</style>
