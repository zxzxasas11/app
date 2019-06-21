const moment = require("moment");
module.exports = function(sequelize,DataTypes){
    return sequelize.define('history',{
            //主键id
            historyId:{
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
                field: 'history_id'
            },
            //关联资源id
            resourceId:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'resource_id'
            },
            //浏览人
            creator:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'creator'
            },
            //浏览时间
            browseTime:{
                type: DataTypes.DATE,
                allowNull: true,
                field: 'browseTime',
                get() {
                    return moment(this.getDataValue('browseTime')).format('YYYY-MM-DD HH:mm:ss');
                }
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
