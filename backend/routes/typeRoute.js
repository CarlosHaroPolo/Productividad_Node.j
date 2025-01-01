const express = require('express');
const router = express.Router();
const {
    getAllTypes,
    getTypeById,
    createType,
    updateType,
    deleteType
} = require('../controllers/typeController');

// Rutas del CRUD
router.get('/', getAllTypes); // Obtener todos los tipos
router.get('/:id', getTypeById); // Obtener un tipo por ID
router.post('/', createType); // Crear un nuevo tipo
router.put('/:id', updateType); // Actualizar un tipo por ID
router.delete('/:id', deleteType); // Eliminar un tipo por ID

module.exports = router;