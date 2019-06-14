const CategoryModel = require("../modules/category");
const resp =require('../util/response');
class CategoryController {

    /**
     * 查询所有
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async getAll(ctx){
        let data = await CategoryModel.getAll();
        ctx.response.status=200;
        ctx.body={
            code: 200,
            data:data
        }
    }

    /**
     * 增加分类
     * @param ctx
     *
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async create(ctx){
        let category = ctx.request.body;
        let data = await CategoryModel.create(category);
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `添加成功`,
            data:data
        };
    }

    /**
     * 根据categoryPid查询
     * @param ctx categoryPid
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async getByPid(ctx){
        let categoryPid = ctx.request.query.categoryPid;
        let data = await CategoryModel.getByPid(categoryPid);
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `查询结果`,
            data:data
        };
    }
}

module.exports = CategoryController;
