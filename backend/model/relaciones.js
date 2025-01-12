const recordModel = require('./recordModel');
const r_aModel = require('./r_aModel');
const activityModel = require('./activityModel');
const typeModel = require('./typeModel');
const taskModel =  require('./taskModel');
// Relaciones
activityModel.belongsTo(typeModel, { foreignKey: 'idType', as: 'fk_type' });

recordModel.hasMany(r_aModel, { foreignKey: 'idRecord' , as: 'fk_record'});


typeModel.hasMany(activityModel, { foreignKey: 'idType' });
r_aModel.belongsTo(recordModel, { foreignKey: 'idRecord' , as: 'fk_record' });
r_aModel.belongsTo(activityModel, { foreignKey: 'idActivity', as: 'fk_activity'  });
activityModel.hasMany(r_aModel, { foreignKey: 'idActivity' });

module.exports = {
    recordModel,
    r_aModel,
    activityModel,
    typeModel,
    taskModel
};