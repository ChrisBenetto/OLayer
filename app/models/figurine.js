const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Figurine extends Model {};

Figurine.init({
    name: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    nb_upvote: DataTypes.INTEGER,
    nb_downvote: DataTypes.INTEGER,

        sequelize,
        tableName:"figurine"
});

module.exports = Figurine;