<template>
		<div>
			<div>欢迎您</div>
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
		import billFunction from '../api/bill'
		import XLSX from 'xlsx'
		export default {
				name: "Home",
				data(){
						return{

						}
				},
				created(){
					//alert(new Date(1900,0, 43605.95179398148))
				},
				computed:{
					/*username(){
						const decode = jwt_decode(localStorage.getItem("token"));
						return decode.username;
					}*/
				},
				methods:{
					upload(a){
						console.log(a);
						let reader = new FileReader();
						if (typeof FileReader === 'undefined') {
							this.$message({
								type: 'info',
								message: '您的浏览器不支持FileReader接口'
							});
							return
						};
						reader.readAsBinaryString(a.file);
						reader.onload = function (e) {
							try {
								let data = e.target.result;
								let workbook = XLSX.read(data, { type: 'binary' })
								let wsname = workbook.SheetNames[0]; // 取第一张表
								let ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]);
								/*for(let i in ws){
									for(let j in ws[i]){
										console.log(ws[i][j]);
									}
								}*/
								billFunction.upload(ws).then(res=>{
									console.log(res);
								})
							}
							catch (e) {
									return false
								}
							}.bind(this)
					},
				}
		}
</script>

<style scoped lang="less">

</style>
