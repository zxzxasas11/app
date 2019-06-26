const LoginLogModel = require("../modules/loginLog");
const resp =require('../util/response');
const UUID = require('uuid');
class LoginLogController {
    /**
     * @param ctx
     *
     */
    static async getRecent(ctx){
        let data = await LoginLogModel.getRecent(ctx.request.query.userId);
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `查询结果`,
            data:data
        };
    }
}

module.exports = LoginLogController;
