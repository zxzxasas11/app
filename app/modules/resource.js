// 引入mysql的配置文件
const db = require('../../config/db');
const UUID = require('uuid');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const Resource = Sequelize.import('../schema/resource');
const Category = Sequelize.import('../schema/category');
const User = Sequelize.import('../schema/user');
//Category.hasMany(Resource); // 将会添加 category_id 到 ArticleModel 模型
Resource.belongsTo(Category, {foreignKey: 'categoryId', targetKey: 'categoryId',as: 'u' });
Resource.belongsTo(User, {foreignKey: 'creator', targetKey: 'userId',as: 'user' });
Resource.sync({force: false}); //自动创建表
const Op = Sequelize.Op;
class ResourceModel {
    /**
     * 上传资源
     * @param resource
     * @param ctx
     * @returns {Promise<boolean>}
     */
    static async create(resource,ctx) {
        //let token = ctx.request.header.authorization;
        //console.log(token);
        let {resourceName,content,categoryId,url,creator} = resource;
        resource.resourceId = UUID.v1().replace(/-/g,"");
        resource.createTime = new Date();
        resource.status = 0;
        return await Resource.create(resource);
    }


    /**
     * 根据categoryId查询
     * @param categoryId
     * @param status
     * @returns {Promise<*>}
     */
    static async getById(categoryId,status){

        try {
            return await Resource.findAndCountAll({
                where:{
                    categoryId:{
                        [Op.like]:'%' +categoryId + '%'
                    },
                    //categoryId:categoryId!==undefined?categoryId:null,
                    status,
                },
                include:[
                    {
                        model:Category,
                        as:'u',
                        attributes:[]
                    },
                    {
                        model:User,
                        as:'user',
                        attributes:[]
                    }
                ],
                attributes: [[Sequelize.col('u.category_name'),'categoryName'],[Sequelize.col('user.username'),'username'],'categoryId','content','createTime','creator','resourceId','resourceName','status','url'],
                raw:true

            })
        }
        catch (e) {
            console.log(e)
        }

    }

    /**
     * 根据resourceId查询
     * @param resourceId
     * @returns {Promise<*>}
     */
    static async getByResourceId(resourceId){
        try {
            return await Resource.findOne({
                where:{
                    resourceId
                },
                //attributes: ['url','content'],

            })
        }
        catch (e) {
            console.log(e)
        }

    }

    /**
     * 修改资源上传状态
     * @param url
     * @param data
     */
    static async update(url,data){
        try {
            return await Resource.update(data,{
                where:{
                    url
                },
                fields:['status']
            })
        }
        catch (e) {
            console.log(e)
        }

    }

    /**
     * 修改资源上传状态
     * @param resourceId
     * @param data
     */
    static async updateByResourceId(resourceId,data){
        try {
            return await Resource.update(data,{
                where:{
                    resourceId
                },
                fields:['status']
            })
        }catch (e) {
            console.log(e)
        }

    }
}

module.exports = ResourceModel;
