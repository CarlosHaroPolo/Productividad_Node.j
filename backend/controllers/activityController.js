// controllers/activityController.js
const { typeModel,activityModel } = require('../model/relaciones');

// Obtener todas las actividades
exports.getAllActivities = async (req, res) => {
    try {
        const activities = await activityModel.findAll({
            include: [{
                model: typeModel,
                as: 'fk_type', // 'Type' es un alias que puedes definir en tus relaciones si es necesario
                attributes: ['type'] // Ajusta esto para seleccionar los atributos específicos que deseas mostrar
            }]
        });
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
// Obtener una actividad por ID
exports.getActivityById = async (req, res) => {
    try {
        const activity = await activityModel.findByPk(req.params.id, {
            include: [{
                model: typeModel,
                as: 'fk_type', // Asegúrate de usar el alias correcto
                attributes: ['type'] // Incluye los atributos necesarios de typeModel
            }]
        });
        if (activity) {
            res.status(200).json(activity);
        } else {
            res.status(404).send('Activity not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Crear una nueva actividad
exports.createActivity = async (req, res) => {
    try {
        const newActivity = await activityModel.create(req.body);
        res.status(201).json(newActivity);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Actualizar una actividad existente
exports.updateActivity = async (req, res) => {
    try {
        const updatedActivity = await activityModel.update(req.body, {
            where: { id: req.params.id }
        });
        if (updatedActivity[0] > 0) {
            res.status(200).send('Activity updated successfully');
        } else {
            res.status(404).send('Activity not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Eliminar una actividad
exports.deleteActivity = async (req, res) => {
    try {
        const deleteResult = await activityModel.destroy({
            where: { id: req.params.id }
        });
        if (deleteResult) {
            res.status(200).send('Activity deleted successfully');
        } else {
            res.status(404).send('Activity not found');
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};