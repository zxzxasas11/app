const moment = require("moment");
module.exports = function(sequelize,DataTypes){
    return sequelize.define('menu',{
            //menuId
            menuId:{
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            },
            //菜单父id
            menuPid:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'menu_pid',
            },
            //菜单名称
            menuName:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'menu_name',
            },
            //菜单url
            menuUrl:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'menu_url',
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
