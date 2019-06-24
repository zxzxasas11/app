const moment = require("moment");
module.exports = function(sequelize,DataTypes){
    return sequelize.define('article',{
            //帖子id
            articleId:{
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
                field: 'article_id'
            },
            //帖子标题
            title:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'title'
            },
            //帖子内容
            content:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'content'
            },
            //发帖人
            creator:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'creator'
            },
            //发帖时间
            createTime:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'createTime',
                get(){
                    return moment(this.getDataValue('createTime')).format('YYYY-MM-DD HH:mm:ss');
                }
            },
            //状态
            status:{
                type: DataTypes.STRING,
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
