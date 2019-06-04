const MenuModel = require("../modules/menu");

class MenuController {
    /**
     * 查询所有
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async getAll(ctx){
        let data = await MenuModel.getAll();
        ctx.response.status=200;
        ctx.body={
            code: 200,
            data:data
        }
    }
}
module.exports = MenuController;
