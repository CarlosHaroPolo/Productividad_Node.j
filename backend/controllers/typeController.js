const { typeModel } = require('../model/relaciones');

// Obtener todos los registros
const getAllTypes = async (req, res) => {
    try {
        const types = await typeModel.findAll(); // Trae todos los registros
        res.json(types);
    } catch (error) {
        console.error('Error al obtener los tipos:', error);
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
};

// Obtener un registro por ID
const getTypeById = async (req, res) => {
    try {
        const { id } = req.params;
        const type = await typeModel.findByPk(id); // Busca por clave primaria

        if (type) {
            res.json(type);
        } else {
            res.status(404).json({ error: 'Tipo no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el tipo:', error);
        res.status(500).json({ error: 'Error al obtener el dato' });
    }
};

// Crear un nuevo registro
const createType = async (req, res) => {
    try {
        const { name, description } = req.body;
        const newType = await typeModel.create({ name, description }); // Crea un nuevo registro
        res.status(201).json(newType);
    } catch (error) {
        console.error('Error al crear el tipo:', error);
        res.status(500).json({ error: 'Error al crear el dato' });
    }
};

// Actualizar un registro existente
const updateType = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;

        const type = await typeModel.findByPk(id);

        if (type) {
            await type.update({ name, description }); // Actualiza el registro
            res.json(type);
        } else {
            res.status(404).json({ error: 'Tipo no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar el tipo:', error);
        res.status(500).json({ error: 'Error al actualizar el dato' });
    }
};

// Eliminar un registro
const deleteType = async (req, res) => {
    try {
        const { id } = req.params;
        const type = await typeModel.findByPk(id);

        if (type) {
            await type.destroy(); // Elimina el registro
            res.json({ message: 'Tipo eliminado correctamente' });
        } else {
            res.status(404).json({ error: 'Tipo no encontrado' });
        }
    } catch (error) {
        console.error('Error al eliminar el tipo:', error);
        res.status(500).json({ error: 'Error al eliminar el dato' });
    }
};

module.exports = {
    getAllTypes,
    getTypeById,
    createType,
    updateType,
    deleteType
};