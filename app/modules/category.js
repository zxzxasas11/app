// 引入mysql的配置文件
const db = require('../../config/db');
const UUID = require('uuid');

// 引入sequelize对象
const Sequelize = db.sequelize;

// 引入数据表模型
const Category = Sequelize.import('../schema/category');
Category.sync({force: false}); //自动创建表
const Op = Sequelize.Op;
class CategoryModel {
    /**
     * 查询所有
     * @returns {Promise<boolean>}
     */
    static async getAll() {
        return await Category.findAndCountAll();
    }


    /**
     * 创建菜单
     * @param category
     * @returns {Promise<boolean>}
     */
    static async create(category) {
        let {categoryName,categoryPid,url} = category;
        category.categoryId = UUID.v1().replace(/-/g,"");
        category.status = 1;
        return await Category.create(category);
    }

    /**
     * 根据categoryPid查询
     * @param categoryPid
     * @returns {Promise<*>}
     */
    static async getByPid(categoryPid){
        return await Category.findAndCountAll({
            where:{
                /*categoryPid*/
                categoryPid
            },
        })
    }
}

module.exports = CategoryModel;
