const Sequelize = require('sequelize');

const sequelize = new Sequelize('bd_API_nodejs', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;