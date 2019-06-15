// 引入mysql的配置文件
const db = require('../../config/db');
const UUID = require('uuid');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const Barrage = Sequelize.import('../schema/barrage');
Barrage.sync({force: false}); //自动创建表
const Op = Sequelize.Op;
class BarrageModel {
    /**
     * 增加弹幕
     * @param barrage
     * @returns {Promise<boolean>}
     */
    static async create(barrage) {
        return await Barrage.create(barrage);
    }


    /**
     * 查询弹幕
     * @returns {Promise<*>}
     */
    static async getAll(pageSize,currentPage){
        return await Bill.findAndCountAll({
            'limit':pageSize,
            'offset':pageSize*(currentPage-1)
        });
    }
}

module.exports = BarrageModel;
