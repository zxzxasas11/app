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

    /**
     * 根据code查询单条
     * @param ctx menuPid        用户名称
     *
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async geyOneByMenuPid(ctx){
        let menuPid = ctx.request.body.menuPid;
        let data = await MenuModel.getByMenuId(menuPid);
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `查询结果`,
            data:data
        };
    }

    /**
     * 增加menu
     * @param ctx
     *
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async create(ctx){
        let menu = ctx.request.body;
        let data = await MenuModel.create(menu);
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `添加成功`,
            data:data
        };
    }
}
module.exports = MenuController;
