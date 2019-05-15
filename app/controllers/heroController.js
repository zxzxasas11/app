const HeroModule = require("../modules/heroModule");

class HeroController {

    /**
     * 获取用户列表
     * @param ctx
     * @returns 用户列表数据
     */
    static async list(ctx){
        try {
            let data = await HeroModule.list();
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
     * 添加
     * @param ctx
     * @returns 用户列表数据
     */
    static async add(ctx){
        console.log(ctx.request.body);
    }

}

module.exports = HeroController;
