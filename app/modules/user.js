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
        let {userId, code, password, username} = user;
        //let  reg = new RegExp("-", g);
        user.userId = UUID.v1();
        await User.create(user);
        return true
    }


    /**
     * 查询用户
     * @returns {Promise<*>}
     */
    static async list(){
        let data =await User.findAndCountAll({attributes: ['userId', 'password', 'code']});
        console.log(data);
        return  data;

    }

    /**
     * chaxun
     * @param username
     * @returns {Promise<*>}
     */
    static async listByName(username){
        let data =await User.findAll({
            where:{
                username/*:{
                    $like: '%'+username+'%'
                }*/
            }
        });
        console.log(data);
        return data;
    }
}

module.exports = UserModel;
