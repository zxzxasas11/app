const moment = require("moment");
module.exports = function(sequelize,DataTypes){
    return sequelize.define('bill',{
            //交易号
            billId:{
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false,
            },
            //订单id
            orderId:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'orderId'
            },
            //交易时间
            businessTime:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'businessTime'
            },
            //支付时间
            payTime:{
                type: DataTypes.STRING,
                allowNull: true,
                field:'payTime'
            },
            editTime:{
                type: DataTypes.STRING,
                allowNull: true,
                field:'editTime'
            },
            //交易来源
            tradeOrigin:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'tradeOrigin',
            },
            //交易类型
            tradeType:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'tradeType',
            },
            //商家名称
            storeName:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'storeName',
            },
            //商品名称
            goodsName:{
                type: DataTypes.STRING,
                allowNull: true,
                field: 'goodsName',
            },
            //金额
            amount:{
                type: DataTypes.DECIMAL,
                allowNull: true,
                field: 'amount',
            },
            //类型 收入OR支出
            payType:{
                type: DataTypes.INTEGER,
                allowNull: true,
                field: 'payType',
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
