const Sequelize = require('sequelize');
const sequelize = require('../database');

class Figurine extends Sequelize.Model {};

Figurine.init({
    name: {
        type: Sequelize.STRING,
        allowNull:false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull:false,
    },
    nb_upvote: Sequelize.INTEGER,
    nb_downvote: Sequelize.INTEGER,

},{
        sequelize,
        tableName:"figurine"
});
module.exports = Figurine;