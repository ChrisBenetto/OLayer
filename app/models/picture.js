const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Picture extends Model {};

Picture.init({
    
    picture_url: {
        type: DataTypes.TEXT,
        allowNull:false
    },
        sequelize,
        tableName:"picture"
});

module.exports = Picture;