<template>
    <Table
            :navHeight=0
            ref="table"
            :tableData="info"
            :tableKey="tableKey"
            @rowClick="rowClick"
            :totalSize="total"
            :btn_group="btn">
    </Table>
</template>

<script>
    import Table from '../../components/platform-manage/Table'
    import billFunction from '../../api/bill'
    export default {
        name: "BillManage",
        components:{Table},
        data(){
            return{
                info:[],
                total:0,
                btn: [
                    {name: "删除", method:"del"},
                    {name: "修改", method: "edit"},
                ],
                tableKey: [
                    {name: '订单名', value: 'billId'},
                    {name: '交易号', value: 'orderId'},
                    {name: '交易时间', value: 'businessTime'},
                    {name: '付款时间', value: 'payTime'},
                    {name: '交易来源', value: 'tradeOrigin'},
                    {name: '交易类型', value: '`tradeType'},
                    {name: '商家名称', value: 'storeName'},
                    {name: '商品名称', value: 'goodsName'},
                    {name: '金额', value: 'amount'},
                    {name: '支付类型', value: 'payType'},
                    {name: '状态', value: 'status'},
                ],
            }
        },
        created() {
            this.getBill();
        },
        methods:{
            getBill(){
                billFunction.getAllBill().then(res=>{
                    this.info = res.data.rows;
                    this.total=res.data.count;
                })
            },
            rowClick(){

            },
            changeCurrentPage(data){
                alert(data)
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../../assets/css/tableManage.less';
</style>
