// 引入mysql的配置文件
const db = require('../../config/db');
const UUID = require('uuid');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const User = Sequelize.import('../schema/user');
User.sync({force: false}); //自动创建表
const Op = Sequelize.Op;
class UserModel {
    /**
     * 创建用户
     * @param user
     * @returns {Promise<boolean>}
     */
    static async create(user) {
        /*let {userId, code, password, username,createTime} = user;
        user.userId = UUID.v1().replace(/-/g,"");
        user.createTime = new Date();
        await User.create(user);
        return true*/
        let {userId, code, password, username,createTime } = user;
        user.userId = UUID.v1().replace(/-/g,"");
        user.createTime = new Date();
        return await User.create(user);
    }


    /**
     * 查询用户
     * @returns {Promise<*>}
     */
    static async list(){
        return await User.findAndCountAll({attributes: ['userId', 'code','username']});
    }

    /**
     * chaxun
     * @param code
     * @returns {Promise<*>}
     */
    static async listByName(code){
        let data =  await User.findOne({
            where:{
                code
            },
        });
        return data;

    }

    /**
     * 根据userId删除
     * @param userId
     * @returns {Promise<*>}
     */
    static async deleteById(userId){
        await User.destroy({
            where:userId
        });
        return true;
    }

    /**
     * 更新用户硬币数
     * @param userId
     * @param coinNum
     * @returns {Promise<*>}
     */
    static async updateCoin(userId,coinNum){
        //根据userId 修改硬币
        await User.increment("coin",{by:coinNum,where:{userId}});
        //await Sequelize.query('UPDATE user SET coin = (coin+'+coinNum+') WHERE userId = "'+userId+'" ');
    }
}

module.exports = UserModel;
