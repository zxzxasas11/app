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
        let {userId, code, password, username,createTime} = user;
        user.userId = UUID.v1().replace(/-/g,"");
        user.createTime = new Date();
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
        let data =await User.findAndCountAll({
            where:{
                username:{
                    [Op.like]: '%'+username+'%'
                }
            },
            order: [
                ['userId', 'DESC']
            ],
            //attributes: {exclude: ['createTime']}
            attributes:['userId','code','username']
        });
        return data;
    }
}

module.exports = UserModel;
