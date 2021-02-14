const Sequelize = require('sequelize');

const sequelize = new Sequelize('storagecrud', 'matheus', 'Matheus12345**', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;