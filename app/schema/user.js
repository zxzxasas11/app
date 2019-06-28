const moment = require("moment");
module.exports = function(sequelize,DataTypes){
    return sequelize.define('user',{
            userId:{
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            },
            //账号
            code:{
                type: DataTypes.STRING,
                allowNull: false,
                field: 'code'
            },
            //密码
            password:{
                type: DataTypes.STRING,
                allowNull: false,
                field: 'password'
            },
            //用户名
            username:{
                type: DataTypes.STRING,
                allowNull: false,
                field:'username'
            },
            //创建时间
            createTime:{
                type: DataTypes.DATE,
                allowNull: false,
                field: 'createTime',
                get() {
                    return moment(this.getDataValue('createTime')).format('YYYY-MM-DD HH:mm:ss');
                }
            },
            power:{
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'power',
            },
            coin:{
                type: DataTypes.INTEGER,
                allowNull: false,
                field: 'coin',
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
