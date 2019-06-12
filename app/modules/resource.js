// 引入mysql的配置文件
const db = require('../../config/db');
const UUID = require('uuid');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const Resource = Sequelize.import('../schema/resource');
Resource.sync({force: false}); //自动创建表
const Op = Sequelize.Op;
class ResourceModel {
    /**
     * 上传资源
     * @param resource
     * @returns {Promise<boolean>}
     */
    static async create(resource) {
        let {resourceName,content,categoryId,url,creator} = resource;
        resource.resourceId = UUID.v1().replace(/-/g,"");
        resource.createTime = new Date();
        resource.status = 0;
        return await Resource.create(resource);
    }

}

module.exports = ResourceModel;
