const UserModel = require("../modules/user");
const LoginLogModel = require("../modules/loginLog");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../../config/secret');
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
        params.coin  =2;
        try {
            const salt =bcrypt.genSaltSync();
            params.password = bcrypt.hashSync(params.password,salt);;
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
     * 根据code查询单条
     * @param ctx code        用户名称
     *
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async geyOneByName(ctx){
        let code = ctx.request.body.code;
        let data = await UserModel.listByName(code);
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

    /**
     * 登录
     * @param ctx code         用户账号
     * @param ctx password     用户密码
     *
     * @returns 登录成功返回用户信息，失败返回错误原因
     */
    static async login(ctx){
        const {code,password} = ctx.request.body;
        let a  = ctx.req.headers['x-forwarded-for'] ||
            ctx.req.connection.remoteAddress ||
            ctx.req.socket.remoteAddress ||
            ctx.req.connection.socket.remoteAddress;
        let userDetail =await UserModel.listByName(code);
        if(!userDetail){
            ctx.response.status = 403;
            ctx.body = {
                code: 403,
                message: "用户不存在"
            };
            return false;
        }
        if (bcrypt.compareSync(password, userDetail.password)){
            const userToken ={code:userDetail.code,userId:userDetail.userId,username:userDetail.username,power:userDetail.power};
            const token =jwt.sign(userToken,secret.sign,{expiresIn:"1h"});

            //查询是否是当天首次登录
            let info = await LoginLogModel.getRecent(userDetail.userId);
            let firstLogin=0;
            if(!info){
                console.log("是账号首次登录");
                firstLogin=1;
            }
            else{
                let Time = new Date();
                let date = new Date(info.loginTime);
                if(Time.getFullYear()===date.getFullYear()&&Time.getMonth()===date.getMonth()&&Time.getDate()===date.getDate()){
                    console.log("今天已经登录过了");
                }
                else{
                    console.log("是今天首次登录");
                    firstLogin =1;
                    await UserModel.updateCoin(userDetail.userId,1);
                }
            }
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: "登录成功",
                data: {
                    token: token,
                    firstLogin:firstLogin
                }
            };

            //创建登录记录
            let log ={userId:userDetail.userId,ipAddress:a};
            await LoginLogModel.create(log);


        }
        else {
            ctx.response.status = 401;
            ctx.body = {
                code: 401,
                message: "用户名或密码错误"
            }
        }
    }

}

module.exports = UserController;
