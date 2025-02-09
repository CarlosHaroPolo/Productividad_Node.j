const { recordModel } = require('../model/relaciones');

// crear record
async function createRecord(req, res) {
    const { data } = req.body;  // Asume que 'data' contiene todos los campos necesarios para crear un record
    try {
        const newRecord = await recordModel.create(data);
        res.status(201).send(newRecord);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
// mostrar todo los record: 
async function getAllRecords(req, res) {
    try {
        const records = await recordModel.findAll();
        res.status(200).send(records);
    } catch (error) {
        res.status(500).send(error.message);
    }
}
// mostrar con id 
async function getRecordById(req, res) {
    const { id } = req.params;
    try {
        const record = await recordModel.findByPk(id);
        if (record) {
            res.status(200).send(record);
        } else {
            res.status(404).send("Record not found");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

//actualizar 
async function updateRecord(req, res) {
    const { id } = req.params;
    const { data } = req.body;
    try {
        const [updated] = await recordModel.update(data, { where: { id: id } }); // Intentar actualizar el registro
        if (updated) { // Si se actualizó al menos un registro
            const updatedRecord = await recordModel.findByPk(id); // Recuperar el registro actualizado
            if (updatedRecord) {
                res.status(200).send(updatedRecord); // Enviar el registro actualizado
            } else {
                res.status(404).send('Record not found after update'); // Manejo de caso donde el registro no se encuentra después de actualizar
            }
        } else {
            res.status(404).send("Record not found"); // Si no se encontró el registro para actualizar
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}


//dalate:
async function deleteRecord(req, res) {
    const { id } = req.params;
    try {
        const deleted = await recordModel.destroy({ where: { id: id } });
        if (deleted) {
            res.status(204).send("Record deleted");
        } else {
            res.status(404).send("Record not found");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}
module.exports = {
    createRecord,
    getAllRecords,
    getRecordById,
    updateRecord,
    deleteRecord
};