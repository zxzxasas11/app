const ResourceModel = require("../modules/resource");
const resp =require('../util/response');
const fs = require('fs');
class ResourceController {
    /**
     * 增加分类
     * @param ctx
     *
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async create(ctx){
        let resource = ctx.request.body;
        resource.creator = ctx.user.userId;
        await ResourceModel.create(resource);
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `添加成功`,
        };
    }

    /**
     * 根据categoryId查询
     * @param ctx
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async getById(ctx){
        let categoryId = ctx.request.query.categoryId!==undefined?ctx.request.query.categoryId:"",status = ctx.request.query.status;
        let data = await ResourceModel.getById(categoryId,status);
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `查询结果`,
            data:data
        };
    }

    /**
     * 根据resourceId查询
     * @param ctx
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async getByResourceId(ctx){
        let resourceId = ctx.request.query.resourceId;
        let data = await ResourceModel.getByResourceId(resourceId);
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `查询结果`,
            data:data
        };
    }

    /**
     * 根据resourceId修改
     * @param ctx
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async updateByResourceId(ctx){
        let resourceId = ctx.request.body.resourceId,data=ctx.request.body.data;
        await ResourceModel.updateByResourceId(resourceId,data);
        ctx.response.status = 200;
        ctx.body = {
            code: 200,
            message: `修改成功`,
        };
    }


    /**
     * 视频转blob
     * @param ctx
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async blob(ctx){
        try {
            // open 一个放在服务器的视频
            let data = fs.readFileSync('http://192.168.31.226:5000/2019614/95f29d208e4a11e9b702c56d43a0aae7.mp4');
            ctx.response.body = data
        } catch (e) {
            return Promise.reject({
                status: 500,
                message: '视频传输错误'
            })
        }
    }
}

module.exports = ResourceController;
