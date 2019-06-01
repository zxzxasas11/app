const UserModel = require("../modules/user");
const bcrypt = require('bcryptjs');

class UserController {
    /**
     * 创建用户
     * @param ctx code         用户账号
     * @param ctx password     用户密码
     * @param ctx username        用户名称
     *
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async create(ctx){
        let { code, password, username } = ctx.request.body;

        let params = {
            username,
            password,
            code
        };
        try {
            const salt =bcrypt.genSaltSync();
            const hash =bcrypt.hashSync(params.password,salt);
            params.password = hash;
            await UserModel.create(params);
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `创建用户成功`,
            }
        }catch (e) {
            console.log(e)

        }
    }

    /**
     * 查询用户
     *
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async getAll(ctx){
        try {
           let data= await UserModel.list();
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
     * 根据username查询
     * @param ctx username        用户名称
     *
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async geyOneByName(ctx){
        let username = ctx.request.body.username;
        let data = await UserModel.listByName(username);
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `查询结果`,
            data:data
        }
    }

    /**
     * 根据userId删除
     * @param ctx userId        用户名称
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async delete(ctx){
        let userId = ctx.request.body.userId;
        await UserModel.deleteById(userId);
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `删除成功`,
        }
    }

}

module.exports = UserController;
