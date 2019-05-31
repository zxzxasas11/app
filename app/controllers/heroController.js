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
        let data = ctx.request.body;
       /* let data =[
            {id:"1",heroId:"2",name:"3",level:1,star:3,rarity:"sr",skill:"123",userId:"2"},
            {id:"12",heroId:"21",name:"31",level:1,star:3,rarity:"sr",skill:"123",userId:"2"}
        ];*/
        for(let i in data){
            data[i].createTime = new Date();
        }
        try {
            await HeroModule.add(data);
            ctx.response.status=200;
            ctx.body={
                code: 200,
                message: "获取成功",
            }
        }
        catch (e) {
            console.log(e);
            ctx.response.status=10000;
            ctx.body={
                code: 10000,
                message: "出现问题",
                e
            }
        }
    }

}

module.exports = HeroController;
