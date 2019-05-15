// 引入mysql的配置文件
const db = require('../../config/db');
const UUID = require('uuid');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const Hero = Sequelize.import('../schema/hero');
Hero.sync({force: false}); //自动创建表
const Op = Sequelize.Op;
class HeroModule {
    /**
     * 查询式神
     * @returns {Promise<*>}
     */
    static async list(){
        let data =await Hero.findAndCountAll(
            {
                attributes: ['id', 'name', 'level','rarity']
            }
        );
        console.log(data);
        return  data;
    }

    /**
     * 批量添加式神
     * @param data
     * @returns {Promise<*>}
     */
    static async add(data){
        /*let ddata =await Hero.findAndCountAll(
            {
                attributes: ['id', 'name', 'level','rarity']
            }
        );*/
        console.log(data);
        return  data;
    }
}

module.exports = HeroModule;
