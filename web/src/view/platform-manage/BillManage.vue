<template>
    <Table
            :totalSize=10
            :navHeight=40
            ref="table"
            :tableData="info"
            :tableKey="tableKey"
            @rowClick="rowClick"
            :btn_group="btn">
    </Table>
</template>

<script>
    import Table from '../../components/platform-manage/Table'
    export default {
        name: "BillManage",
        components:{Table},
        data(){
            return{
                btn: [
                    {name: "删除", method:"del"},
                    {name: "修改", method: "edit"},
                ],
                tableKey: [
                    {name: '学校名称', value: 'deptName'},
                    {name: '学校地址', value: 'address'},
                    {name: '描述', value: 'deptDescribe'},
                    {name: '学校编号', value: 'deptCode'},
                ],
            }
        },
        created() {
        },
        methods:{
            rowClick(){

            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../assets/css/tableManage.less';
</style>
