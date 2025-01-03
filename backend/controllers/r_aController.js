
const { r_aModel, activityModel, recordModel } = require('../model/relaciones');

// crear :
async function createRA(req, res) {
    const { data } = req.body;  // Asume que 'data' contiene todos los campos necesarios
    try {
        const newRA = await r_aModel.create(data);
        res.status(201).send(newRA);
    } catch (error) {
        res.status(400).send(error.message);
    }
}



// listar 
async function getAllRAs(req, res) {
    try {
        const ras = await r_aModel.findAll({
            include: [{
                model: recordModel,
                as: 'fk_record', 
                attributes: ['totalHours','state'] 
            },
        {
            model: activityModel,
            as: 'fk_activity', 
            attributes: ['activity'] 
        }]
        });
        res.status(200).send(ras);
    } catch (error) {
        res.status(500).send(error.message);
    }
}


// actualizar 
async function getRAById(req, res) {
    const { id } = req.params;
    try {
        const ra = await r_aModel.findByPk(id, {
            include: [{
                model: recordModel,
                as: 'fk_record', // Asegúrate de que el alias 'fk_record' está definido en la configuración de las relaciones
                attributes: ['date', 'state']
            }, {
                model: activityModel,
                as: 'fk_activity', // Asegúrate de que el alias 'fk_activity' está definido en la configuración de las relaciones
                attributes: ['activity']
            }]
        });
        if (ra) {
            res.status(200).send(ra);
        } else {
            res.status(404).send("R_A not found");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function updateRA(req, res) {
    const { id } = req.params;
    const { data } = req.body;
    try {
        const [updated] = await r_aModel.update(data, { where: { id: id } });
        if (updated) {
            const updatedRA = await r_aModel.findByPk(id);
            res.status(200).send(updatedRA);
        } else {
            res.status(404).send("R_A not found");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}
async function deleteRA(req, res) {
    const { id } = req.params;
    try {
        const deleted = await r_aModel.destroy({ where: { id: id } });
        if (deleted) {
            res.status(204).send("R_A deleted");
        } else {
            res.status(404).send("R_A not found");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}
module.exports = {
    createRA,
    getAllRAs,
    getRAById,
    updateRA,
    deleteRA
};
