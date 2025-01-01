// models/productividad_r_a.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const ProductividadRA = sequelize.define('ProductividadRA', {
    idRecord: {
        type: DataTypes.INTEGER,
        references: {
            model: 'ProductividadRecords', // Nombre del modelo vinculado
            key: 'id'
        }
    },
    idActivity: {
        type: DataTypes.INTEGER,
        references: {
            model: 'ProductividadActivities', // Nombre del modelo vinculado
            key: 'id'
        }
    },
    hour: DataTypes.TIME
}, {
    tableName: 'r_a',
    timestamps: false
});

module.exports = ProductividadRA;