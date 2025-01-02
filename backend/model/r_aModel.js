// models/productividad_r_a.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const r_aModel = sequelize.define('r_aModel', {
    idRecord: {
        type: DataTypes.INTEGER,
        references: {
            model: 'records', // Nombre del modelo vinculado
            key: 'id'
        },
        primaryKey: true
    },
    idActivity: {
        type: DataTypes.INTEGER,
        references: {
            model: 'activities', // Nombre del modelo vinculado
            key: 'id'
        },
        primaryKey: true
    },
    hour: DataTypes.TIME    
}, {
    tableName: 'r_a',
    timestamps: false
});

module.exports = r_aModel;