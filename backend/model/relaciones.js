const ProductividadRecord = require('./recordModel');
const ProductividadRA = require('./r_aModel');
const activityModel = require('./activityModel');
const typeModel = require('./typeModel');

// Relaciones
activityModel.belongsTo(typeModel, { foreignKey: 'idType', as: 'fk_type' });



typeModel.hasMany(activityModel, { foreignKey: 'idType' });
ProductividadRA.belongsTo(ProductividadRecord, { foreignKey: 'idRecord' });
ProductividadRA.belongsTo(activityModel, { foreignKey: 'idActivity' });
ProductividadRecord.hasMany(ProductividadRA, { foreignKey: 'idRecord' });
activityModel.hasMany(ProductividadRA, { foreignKey: 'idActivity' });

module.exports = {
    ProductividadRecord,
    ProductividadRA,
    activityModel,
    typeModel
};