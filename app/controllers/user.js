const UserModel = require("../modules/user");

class UserController {
    /**
     * 创建文章
     * @param ctx userId     用户Id
     * @param ctx code     用户账号
     * @param ctx password        用户密码
     * @param ctx username     用户名
     *
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async create(ctx){
        let aa = ctx.request.body;
        await UserModel.create(aa);
    }

    /**
     * 获取用户列表
     * @param ctx
     *
     * @returns 用户列表数据
     */
    static async list(ctx){
        console.log(1);
        try {
            let data = await UserModel.list();
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: "获取成功",
                data
            }
        }
        catch (e) {
            ctx.response.status = 300;
            ctx.body = {
                code: 300,
                message: "获取失败",
            }
        }
    }

    /**
     * 根据用户名查询
     * @param ctx
     * @returns 用户列表数据
     */
    static async listByName(ctx){
        console.log(ctx.request.body);
        let data =await UserModel.listByName(ctx.request.body.username);
        ctx.body={
            code:200,
            data
        }
    }
}

module.exports = UserController;
