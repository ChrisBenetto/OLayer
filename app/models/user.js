const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class User extends Model {};

User.init({
    name: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    email: {
        type: DataTypes.TEXT,
        allowNull:false
    },
        sequelize,
        tableName:"user"
});

module.exports = User;