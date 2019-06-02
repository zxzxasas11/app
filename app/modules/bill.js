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
     * 创建用户
     * @param bill
     * @returns {Promise<boolean>}
     */
    static async create(bill) {
        return await Bill.create(bill);
    }


}

module.exports = BillModel;
