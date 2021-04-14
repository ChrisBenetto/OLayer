const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Category extends Model {};

Category.init({
    
    content: {
        type: DataTypes.TEXT,
        allowNull:false
    },
        sequelize,
        tableName:"category"
});

module.exports = Category;