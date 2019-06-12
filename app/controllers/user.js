const UserModel = require("../modules/user");
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
        try {
            const salt =bcrypt.genSaltSync();
            const hash =bcrypt.hashSync(params.password,salt);
            params.password = hash;
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
            const userToken ={code:userDetail.code,userId:userDetail.userId,username:userDetail.username};
            const token =jwt.sign(userToken,secret.sign,{expiresIn:"1h"});
            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: "登录成功",
                data: {
                    userId: userDetail.userId,
                    username: userDetail.username,
                    code: userDetail.code,
                    token: token
                }
            }
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
