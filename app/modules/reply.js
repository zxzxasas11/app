// 引入mysql的配置文件
const db = require('../../config/db');
const UUID = require('uuid');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const Reply = Sequelize.import('../schema/reply');
Reply.sync({force: false}); //自动创建表
const Op = Sequelize.Op;
class ReplyModel {
    /**
     * 增加回复
     * @param reply
     * @returns {Promise<boolean>}
     */
    static async create(reply) {
        return await Reply.create(reply);
    }

    /**
     * 查询所有
     * @returns 创建成功返回用户信息，失败返回错误信息
     */
    static async getAll(){
        try {
            //return await Sequelize.query('SELECT reply_id ,(SELECT COUNT(*) FROM reply as r  where r.replay_pid = rr.reply_id) as a FROM reply  as rr where rr.replay_pid=\'0\'')
            return await Reply.findAndCountAll({
                /*where:{
                    replyPid:0,
                    //replyId:r.reply_pid
                },
                includes:[
                    {
                        model:Reply,
                        as:'r',
                        attributes:[],
                    },
                ],
                raw: true,*/
            });
        }catch (e) {
            console.log(e);
        }

    }

}

module.exports = ReplyModel;
