const HistoryModel = require("../modules/history");
const ResourceModel =require("../modules/resource");
const resp =require('../util/response');
class HistoryController {
    /**
     * 添加历史记录
     * @param ctx
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async create(ctx){
        const resourceId = ctx.request.body.resourceId;
        let data  =await HistoryModel.getByResourceId(resourceId);
        if(data){
            console.log("查询到了一条数据,需要进行更新");
            let data ={browseTime:new Date()};
            await HistoryModel.update(resourceId,data);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `修改成功`,
            };
        }
        else{
            let history = ctx.request.body;
            history.creator = ctx.user.userId;
            await HistoryModel.create(history);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `添加成功`,
            };
        }

    }
}

module.exports = HistoryController;
