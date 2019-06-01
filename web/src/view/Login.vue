<template>
    <div class="login-box">
        <div class="title">
            <span @click="state='register'">注册</span>
            <span>/</span>
            <span @click="state='login'">登录</span>
        </div>

            <el-form v-if="state==='register'"  :model="registerForm"  ref="registerForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" >
                <el-input v-model="registerForm.code"></el-input>
            </el-form-item>
            <el-form-item label="密码" >
                <el-input v-model="registerForm.password"></el-input>
            </el-form-item>
            <el-form-item label="用户名">
                <el-input v-model="registerForm.username"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="register">注册</el-button>
                <el-button @click="resetForm('registerForm')">重置</el-button>
            </el-form-item>
        </el-form>

        <el-form v-if="state==='login'" :model="loginForm"  ref="loginForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="账号" >
                <el-input v-model="loginForm.code"></el-input>
            </el-form-item>
            <el-form-item label="密码" >
                <el-input v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
                <el-button @click="resetForm('loginForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
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
                loginForm: {
                    code: '',
                    password:''
                },
            }
        },
        methods: {
            //...mapActions({register:'userRegister',login:'userLogin'}),
          ...mapActions(["userRegister","userLogin"]),
            /*register(){
                this.userRegister(this.registerForm);
            },*/
            login(){
              this.userLogin(this.loginForm);
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
