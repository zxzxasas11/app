// 引入mysql的配置文件
const db = require('../../config/db');
const UUID = require('uuid');

// 引入sequelize对象
const Sequelize = db.sequelize;


// 引入数据表模型
const Menu = Sequelize.import('../schema/menu');
Menu.sync({force: false}); //自动创建表
const Op = Sequelize.Op;
class MenuModel {
    /**
     * 查询所有
     * @param menu
     * @returns {Promise<boolean>}
     */
    static async getAll() {
        return await Menu.findAndCountAll();
    }


}

module.exports = MenuModel;
