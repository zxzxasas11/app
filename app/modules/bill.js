// 引入mysql的配置文件
const db = require('../../config/db');
const UUID = require('uuid');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const Bill = Sequelize.import('../schema/bill');
Bill.sync({force: false}); //自动创建表
const Op = Sequelize.Op;
class BillModel {
    /**
     * 创建账单 单条
     * @param bill
     * @returns {Promise<boolean>}
     */
    static async create(bill) {
        return await Bill.create(bill);
    }

    /**
     * 批量创建账单
     * @param bill
     * @returns {Promise<*>}
     */
    static async batch(bill){
        return await Bill.bulkCreate(bill);
    }

    /**
     * 查询用户
     * @returns {Promise<*>}
     */
    static async getAll(pageSize,currentPage){
        //let pageSize=8,currentPage=1;
        return await Bill.findAndCountAll({
            'limit':pageSize,
            'offset':pageSize*(currentPage-1)
        });
    }


}

module.exports = BillModel;
