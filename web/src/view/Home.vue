<template>
		<div>
			<div>欢迎您{{username}}</div>
			<el-upload
				class="upload-demo"
				drag
				action=""
				:http-request="upload"
				multiple>
				<i class="el-icon-upload"></i>
				<div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
				<div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
			</el-upload>
		</div>
</template>

<script>
		import jwt_decode from 'jwt-decode'
		export default {
				name: "Home",
				data(){
						return{

						}
				},
				computed:{
					username(){
						const decode = jwt_decode(localStorage.getItem("token"));
						return decode.username;
					}
				},
				methods:{
				}
		}
</script>

<style scoped lang="less">

</style>
