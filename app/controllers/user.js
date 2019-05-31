const UserModel = require("../modules/user");

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
        console.log(ctx.response.body)
    }
}

module.exports = UserController;
