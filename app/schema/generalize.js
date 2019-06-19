const moment = require("moment");
module.exports = function(sequelize,DataTypes){
    return sequelize.define('generalize',{
            //主键id
            generalizeId:{
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
                field: 'generalize_id'
            },
            //关联资源id
            resourceId:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'resource_id'
            },
            //是否收藏
            ifCollect:{
                type: DataTypes.INTEGER,
                allowNull: true,
                field: 'if_collect'
            },
            //是否点赞
            ifThumb:{
                type: DataTypes.INTEGER,
                allowNull: true,
                field: 'if_thumb'
            },
            //关联用户
            creator:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'creator'
            },
            //最后修改时间
            updateTime:{
                type: DataTypes.DATE,
                allowNull: true,
                field: 'updateTime',
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
