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
    /*{
        "resourceId":"4aad92608f2211e9a1c18b5ad7f1eaac1",
        "info":{
            "ifCollect":1,
            "ifThumb":2
        }
    }*/
    static async update(ctx){
        let {resourceId,ifCollect,ifThumb} = ctx.request.body;
        let params ={resourceId,ifCollect,ifThumb};
        params.creator = ctx.user.userId;
        let data  = await GeneralizeModel.getInfo(params);
        if(data){
            await GeneralizeModel.update(params);
        }
        else{
            await GeneralizeModel.create(params);
        }
        ctx.response.status=200;
        ctx.body={
            code: 200,
            message: `success`,
        }
    }
}

module.exports = GeneralizeController;
