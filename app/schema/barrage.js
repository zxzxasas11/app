const moment = require("moment");
module.exports = function(sequelize,DataTypes){
    return sequelize.define('barrage',{
            //主键id
            barrageId:{
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
                field: 'barrage_id'
            },
            //关联资源id
            resourceId:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'resource_id'
            },
            //弹幕内容
            content:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'content'
            },
            //交易时间
            creator:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'creator',
            },
            //创建时间
            createTime:{
                type: DataTypes.DATE,
                allowNull: true,
                field:'createTime',
            },
            //状态
            status:{
                type: DataTypes.INTEGER,
                allowNull: true,
                field: 'status',
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
