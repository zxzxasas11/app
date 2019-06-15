const BarrageModel = require("../modules/barrage");
const resp =require('../util/response');
class BarrageController {
    /**
     * 添加账单
     * @param ctx         账单
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async create(ctx){
        console.log(ctx.request.body);
        await BarrageModel.create(ctx.request.body);
        ctx.response.status=200;
        ctx.body={
            code: 200,
            message: `创建成功`,
        }
    }
}

module.exports = BarrageController;
