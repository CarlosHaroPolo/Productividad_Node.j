const { DataTypes, Model } = require('sequelize');

// Configuración de la conexión a la base de datos
const sequelize = require('../database');

// Definición del modelo
class taskModel extends Model {}

taskModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  task: {
    type: DataTypes.STRING(80),
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null
  }
}, {
  sequelize, // instancia de conexión
  modelName: 'Task', // nombre del modelo
  tableName: 'tasks', // nombre de la tabla en la base de datos
  timestamps: false // no usar campos de timestamp automáticos
});

// Sincronizar el modelo con la base de datos
sequelize.sync();

module.exports = taskModel;