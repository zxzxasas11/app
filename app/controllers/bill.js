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
     * 添加
     * @param ctx
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async uploadExcel(ctx){
        console.log(ctx.request.body);
        ctx.response.status=200;
        ctx.body={
            code: 200,
            message: `创建成功`,
        }
    }

}

module.exports = BillController;
