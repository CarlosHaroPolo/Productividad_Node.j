// models/productividad_records.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const recordModel = sequelize.define('recordModel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    totalHours: DataTypes.FLOAT,
    date: DataTypes.DATE,
    state:DataTypes.INTEGER,
    day:DataTypes.INTEGER,
}, {
    tableName: 'records',
    timestamps: false
});

module.exports = recordModel;