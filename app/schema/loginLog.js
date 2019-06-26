const moment = require("moment");
module.exports = function(sequelize,DataTypes){
    return sequelize.define('login_log',{
            //主键
            id:{
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
                field: 'id'
            },
            //用户
            userId:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'user_id'
            },
            //登陆时间
            loginTime:{
                type: DataTypes.DATE,
                allowNull: true,
                field: 'login_time',
                get(){
                    return moment(this.getDataValue('loginTime')).format('YYYY-MM-DD HH:mm:ss');
                }
            },
            //ip
            ipAddress:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'ip_address'
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
