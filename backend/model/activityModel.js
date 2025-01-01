// models/productividad_activities.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const activityModel = sequelize.define('activityModel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    activity: DataTypes.STRING,
    description: DataTypes.STRING,
    idType: {
        type: DataTypes.INTEGER,
        references: {
            model: 'types', // Nombre del modelo vinculado
            key: 'id'
        }
    }
}, {
    tableName: 'activities',
    timestamps: false
});

module.exports = activityModel;