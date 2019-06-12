const ResourceModel = require("../modules/resource");
const resp =require('../util/response');
class ResourceController {
    /**
     * 增加分类
     * @param ctx
     *
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async create(ctx){
        let resource = ctx.request.body;
        await ResourceModel.create(resource);
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `添加成功`,
        };
    }

    /**
     * 根据categoryId查询
     * @param ctx categoryId
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async getById(ctx){
        let categoryId = ctx.request.body.categoryId;
        let data = await ResourceModel.getById(categoryId);
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `查询结果`,
            data:data
        };
    }
}

module.exports = ResourceController;
