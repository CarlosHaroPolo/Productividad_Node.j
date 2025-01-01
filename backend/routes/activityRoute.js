// routes/activityRoute.js
const express = require('express');
const router = express.Router();

const {
    getAllActivities,
    getActivityById,
    createActivity,
    updateActivity,
    deleteActivity
} = require('../controllers/activityController');

// Definir las rutas para las operaciones CRUD
router.get('/', getAllActivities);        // Obtener todas las actividades
router.get('/:id', getActivityById);      // Obtener una actividad por ID
router.post('/', createActivity);         // Crear una nueva actividad
router.put('/:id', updateActivity);       // Actualizar una actividad existente
router.delete('/:id', deleteActivity);    // Eliminar una actividad

module.exports = router;