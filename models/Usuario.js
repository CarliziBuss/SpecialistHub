const Sequelize = require('sequelize');
const sequelize = require('../sequelize');

const Usuario = sequelize.define('usuario', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
});

module.exports = Usuario;