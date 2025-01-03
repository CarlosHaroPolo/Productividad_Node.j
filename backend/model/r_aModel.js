// models/productividad_r_a.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const r_aModel = sequelize.define('r_aModel', {

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idRecord: {
        type: DataTypes.INTEGER,
        references: {
            model: 'records', // Nombre del modelo vinculado
            key: 'id'
        },
    },
    idActivity: {
        type: DataTypes.INTEGER,
        references: {
            model: 'activities', // Nombre del modelo vinculado
            key: 'id'
        },
    },
    hour: DataTypes.TIME    
}, {
    tableName: 'r_a',
    timestamps: false
});

module.exports = r_aModel;