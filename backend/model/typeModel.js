// models/productividad_types.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const typeModel = sequelize.define('typeModel', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: DataTypes.STRING,
    description: DataTypes.STRING
}, {
    tableName: 'types',
    timestamps: false
});

module.exports = typeModel;