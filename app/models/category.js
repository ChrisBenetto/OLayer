const Sequelize = require('sequelize');
const sequelize = require('../database');

class Category extends Sequelize.Model{};

Category.init({
  content: {
    type: Sequelize.STRING,
    allowNull: false
  }
},{
  sequelize,
  tableName:'category'
});

module.exports = Category;