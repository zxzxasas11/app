const ReplyModel = require("../modules/reply");
const UUID = require('uuid');
const common = require('../util/common');
class ReplyController {
    /**
     * 增加回复
     * @param ctx
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async create(ctx){
        let {resourceId,content,replyPid}=ctx.request.body;
        let params = {resourceId,content,replyPid};
        params.replyId = UUID.v1().replace(/-/g,"");
        params.creator = ctx.user.userId;
        params.createTime = new Date();
        params.status = 1;
        await ReplyModel.create(params);
        ctx.response.status=200;
        ctx.body={
            code: 200,
            message: `创建成功`,
        }
    }

    /**
     * 查询所有
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async getAll(ctx){
        let data = await ReplyModel.getAll();
        //let aa = await common.listToTree(data.rows,"0","replyPid","replyId");
        ctx.response.status=200;
        ctx.body={
            code: 200,
            msg:'',
            data:data,
        }
    }
}

module.exports = ReplyController;
