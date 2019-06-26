// 引入mysql的配置文件
const db = require('../../config/db');
const UUID = require('uuid');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const Log = Sequelize.import('../schema/loginLog');
Log.sync({force: false}); //自动创建表
const Op = Sequelize.Op;
class LoginLogModel {
    /**
     * 增加登录记录
     * @param log
     * @returns {Promise<boolean>}
     */
    static async create(log) {
        let {userId,ipAddress}=log;
        log.loginTime =  new Date();
        log.id = UUID.v1().replace(/-/g,"");
        return await Log.create(log);
    }

    /**
     * 查询最近的一次登录记录
     * @param userId
     * @returns {Promise<*>}
     */
    static async getRecent(userId){
        return await Log.findOne({
            where:{
                userId
            },
            'order': [
                ['loginTime', 'DESC']
            ],
        })
    }
}

module.exports = LoginLogModel;
