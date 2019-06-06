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
        let a = JSON.stringify(data).replace(/\s*/g,"");
        a=a.replace("\\","");
        ///console.log(JSON.parse(a));
        try {
            await BillModel.batch(JSON.parse(a));
            ctx.response.status=200;
            ctx.body={
                code: 200,
                message: `创建成功`,
            }
        }catch (e) {
            console.log(e);
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

    /**
     * 根据主键删除
     * @param ctx
     * returns 创建成功返回用户信息，失败返回错误信息
     */
    static async deleteById(ctx){
        console.log(ctx.request.body);
        try {
            await BillModel.delete(ctx.request.body.billId);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `删除成功`,
                data:data
            }
        }
        catch (e) {

        }
    }

}

module.exports = BillController;
