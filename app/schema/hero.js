const moment = require("moment");
module.exports = function(sequelize,DataTypes){
    return sequelize.define('hero',{
            id:{
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: true,
            },
            //对应json里的id
            heroId:{
                type: DataTypes.STRING,
                allowNull: false,
                field: 'heroId'
            },
            //名称
            name:{
                type: DataTypes.STRING,
                allowNull: false,
                field: 'name'
            },
            //等级
            level:{
                type: DataTypes.INTEGER,
                allowNull: false,
                field:'level'
            },
            //星级
            star:{
                type: DataTypes.INTEGER,
                allowNull: true,
                field: 'star',
            },
            //稀有度
            rarity:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'rarity',
            },
            //技能
            skill:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'skill',
            },
            //创建时间
            createTime:{
                type: DataTypes.DATE,
                allowNull: true,
                field: 'createTime',
            },
            //持有人id
            ownerId:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'ownerId',
            },
        }
        ,{
            /**
             * 如果为true，则表示名称和model相同，即hero
             * 如果为fasle，mysql创建的表名称会是复数，即heroes
             * 如果指定的表名称本身就是复数，则形式不变
             */
            freezeTableName: true,
            timestamps: false,  //去除createAt updateAt
        }
    );
}
