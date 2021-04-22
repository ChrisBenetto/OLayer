const Sequelize = require('sequelize');
const sequelize = require('../database');

class Picture extends Sequelize.Model {};

Picture.init({
    picture_url: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },{

    sequelize,
    tableName:"picture"
  });

module.exports = Picture;