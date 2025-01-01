const { Sequelize } = require('sequelize');

// Configura aquí tu conexión de base de datos
const sequelize = new Sequelize('productividad', 'root', '', {
  host: '127.0.0.1',
  port:3306,
  dialect: 'mysql'
});

module.exports = sequelize;