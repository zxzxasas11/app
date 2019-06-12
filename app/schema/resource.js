const moment = require("moment");
module.exports = function(sequelize,DataTypes){
    return sequelize.define('resource',{
            //menuId
            resourceId:{
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
                field:'resource_id'
            },
            resourceName:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'resource_name',
            },
            //备注
            content:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'content',
            },
            //菜单名称
            categoryId:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'category_id',
            },
            //资源路径
            url:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'category_url',
            },
            createTime:{
                type: DataTypes.DATE,
                allowNull: true,
                field: 'create_time',
            },
            creator:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'creator',
            },
            //状态
            status:{
                type: DataTypes.INTEGER,
                allowNull: true,
                field:'status',
            },
        }
        ,{
            /**
             * 如果为true，则表示名称和model相同，即user
             * 如果为fasle，mysql创建的表名称会是复数，即users
             * 如果指定的表名称本身就是复数，则形式不变
             */
            freezeTableName: true,
            timestamps: false,  //去除createAt updateAt
        }
    );
}
