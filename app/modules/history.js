// 引入mysql的配置文件
const db = require('../../config/db');
const UUID = require('uuid');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const History = Sequelize.import('../schema/history');
History.sync({force: false}); //自动创建表
const Op = Sequelize.Op;
class HistoryModel {
    /**
     * 增加历史记录
     * @param history
     * @returns {Promise<boolean>}
     */
    static async create(history) {
        let {resourceId} = history;
        history.historyId = UUID.v1().replace(/-/g,"");
        history.browseTime = new Date();
        console.log(history);
        return await History.create(history);
    }

    /**
     * 根据resourceId查询
     * @param resourceId
     * @returns {Promise<*>}
     */
    static async getByResourceId(resourceId){
        try {
            return await History.findOne({
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
     * 修改浏览时间
     * @param resourceId
     * @param data
     */
    static async update(resourceId,data){
        try {
            return await History.update(data,{
                where:{
                    resourceId
                },
                fields:['browseTime']
            })
        }
        catch (e) {
            console.log(e)
        }

    }
}

module.exports = HistoryModel;
