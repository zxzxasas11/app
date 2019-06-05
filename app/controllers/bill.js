const BillModel = require("../modules/bill");

class BillController {
    /**
     * 添加账单
     * @param ctx         账单
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async create(ctx){
        console.log(ctx.request.body);
        await BillModel.create(ctx.request.body);
        ctx.response.status=200;
        ctx.body={
            code: 200,
            message: `创建成功`,
        }
    }
    /**
     * 上传excel
     * @param ctx
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async uploadExcel(ctx){
        let data = ctx.request.body;
        for(let i in data){
            for(let j in data[i]){
                //data[i][j]=data[i][j].trim();
                console.log(typeof(data[i][j]))
            }
        }
        console.log(data);
        return;
        await BillModel.batch(ctx.request.body);
        //await BillModel.create(ctx.request.body[0]);
        ctx.response.status=200;
        ctx.body={
            code: 200,
            message: `创建成功`,
        }
    }
    /**
     * 查询所有
     *
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async getAll(ctx){
        let currentPage=ctx.request.body.currentPage===undefined?1:ctx.request.body.currentPage,
            pageSize=ctx.request.body.pageSize===undefined?8:ctx.request.body.pageSize;
        try {
            let data= await BillModel.getAll(pageSize,currentPage);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `查询列表`,
                data:data
            }
        }catch (e) {
            console.log(e);
        }
    }
}

module.exports = BillController;
