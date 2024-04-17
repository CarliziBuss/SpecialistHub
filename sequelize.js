const Sequelize = require('sequelize');

const sequelize = new Sequelize('nome_do_banco_de_dados', 'usuario_do_banco', 'senha_do_banco', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;