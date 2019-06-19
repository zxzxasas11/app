const GeneralizeModel = require("../modules/generalize");
const resp =require('../util/response');
class GeneralizeController {
    /**
     * 根据资源id与用户id查询单条
     * @param ctx
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async getInfo(ctx){
        let {resourceId} = ctx.request.query;
        let params ={resourceId};
        params.userId = ctx.user.userId;
        let data  = await GeneralizeModel.getInfo(params);
        ctx.response.status=200;
        ctx.body={
            code: 200,
            message: `查询结果`,
            data:data
        }
    }


    /**
     * 修改投币收藏情况
     * @param ctx
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async update(ctx){
        let {resourceId,info} = ctx.request.body;
        let params ={resourceId,info};
        params.userId = ctx.user.userId;
        console.log(params.info);
        let data  = await GeneralizeModel.getInfo(params);
        if(data){
            console.log("查询到了");
            await GeneralizeModel.update(params);
        }
        else{
            console.log("目前没有数据");

        }
        /*ctx.response.status=200;
        ctx.body={
            code: 200,
            message: `创建成功`,
        }*/
    }
}

module.exports = GeneralizeController;
