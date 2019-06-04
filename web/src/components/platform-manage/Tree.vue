<template>
    <div class="tree-box">
        <i class=" trigger el-icon-arrow-left" :class="showOrHide?'rorate':'nororate'" @click="trigger"></i>
        <el-button @click="save">保存</el-button>
        <!--empty-text=""-->
        <el-tree
                :data="treeData"
                show-checkbox
                default-expand-all
                node-key="menu_id"
                empty-text=""
                ref="tree"
                highlight-current
                :props="defaultProps">
        </el-tree>

    </div>
</template>

<script>
    import Utils from '../../assets/js/Utils'
    export default {
        name: "Tree",
        data(){
            return{
                treeData:[],
                defaultProps: {
                    children: 'children',
                    label: 'name'     //
                },
                check:"",
                roleId:"",
                sendChecked:[]
            }
        },
        created(){
            //this.getTree();

        },
        computed:{
            showOrHide(){ return this.$parent.treeSwitch}
        },
        methods:{
            getTree(){
                let that  = this;
                this.$post("/Menu/getAll").then(function(response){
                    let tree = that.common.listToTree(response.data,"0","menuPid","menuId");
                    that.treeData=tree;
                });
            },
            getCheckedKeys(){
                //console.log(this.$refs.tree.getCheckedKeys());
            },
            setCheckedKeys(obj){
                this.$refs.tree.setCheckedKeys(obj)
            },
            save(){
                let data= this.$refs.tree.getCheckedKeys(this.check);
                for(let i in this.sendChecked){
                    if(this.sendChecked[i].menu_pid==="0"){
                        data.push(this.sendChecked[i].menu_id);
                    }
                }
                //数组去重
                let temp = [];
                for(let j in data){
                    if(temp.indexOf(data[j]) == -1){
                        temp.push(data[j]);
                    }
                }
                temp = temp.join(",");
                let obj = new Object();
                obj.menuId=temp;
                obj.roleId=this.roleId;
                let that  = this;
                this.$post("/Role/saveRoleMenu",obj).then(function(response){
                    if(response.code===200){
                        that.$message({
                            type: 'success',
                            message: '保存成功!'
                        });
                    }
                    //接收在menu中定义的refreshMenu方法
                    Utils.$emit('refreshMenu');
                    //that.$refs.leftMenu.getMenu();
                });
            },
            trigger(){
                this.$parent.treeSwitch=!this.$parent.treeSwitch;
            }
        },
    }
</script>

<style scoped lang="less">
    .tree-box{
        position: relative;
        text-align:right;
        .trigger{
            font-size:30px;
            position: absolute;
            top:200px;
            left:-15px;
            z-index:999;
            cursor: pointer;
        }
    }
    .rorate{transform: rotate(180deg);transition: 0.5s}
    .nororate{transform: rotate(0deg);transition: 0.5s}

</style>
