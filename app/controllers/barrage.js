const BarrageModel = require("../modules/barrage");
const resp =require('../util/response');
const UUID = require('uuid');
class BarrageController {
    /**
     * 发送弹幕
     * @param ctx
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async create(ctx){
        let {resourceId,content,sendTime}=ctx.request.body;
        let params = {resourceId,content,sendTime};
        params.barrageId = UUID.v1().replace(/-/g,"");
        params.creator = ctx.user.userId;
        params.createTime = new Date();
        params.status = 1;
        await BarrageModel.create(params);
        ctx.response.status=200;
        ctx.body={
            code: 200,
            message: `创建成功`,
        }
    }

    /**
     * 查询所有
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async getAll(ctx){
        let params = ctx.request.query;
        let data = await BarrageModel.getAll(params);
        ctx.response.status=200;
        ctx.body={
            code: 200,
            data:data
        }
    }
}

module.exports = BarrageController;
