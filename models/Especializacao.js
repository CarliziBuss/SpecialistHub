const Sequelize = require('sequelize');
const sequelize = require('../sequelize');
const Usuario = require('./Usuario');

const Especializacao = sequelize.define('especializacao', {
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Especializacao.belongsTo(Usuario);

module.exports = Especializacao;