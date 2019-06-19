// 引入mysql的配置文件

const db = require('../../config/db');
const UUID = require('uuid');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const Generalize = Sequelize.import('../schema/generalize');
Generalize.sync({force: false}); //自动创建表
const Op = Sequelize.Op;
class GeneralizeModel {
    /**
     * 查询收藏点赞投币情况
     * @returns {Promise<*>}
     */
    static async getInfo(params){
        try {
            return await Generalize.findOne({
                where:{
                    resourceId:params.resourceId,
                    creator:params.userId
                }
            });
        }catch (e) {
            console.log(e)
        }
    }

    /**
     * 修改浏览时间
     * @param resourceId
     * @param data
     */
    static async update(resourceId,data){
        try {
           /* return await History.update(data,{
                where:{
                    resourceId
                },
                fields:['browseTime']
            })*/
        }
        catch (e) {
            console.log(e)
        }

    }

}

module.exports = GeneralizeModel;
