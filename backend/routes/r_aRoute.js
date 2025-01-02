const express = require('express');
const router = express.Router();
const r_aController = require('../controllers/r_aController');

router.post('/', r_aController.createRA);
router.get('/', r_aController.getAllRAs);
router.get('/:id', r_aController.getRAById);
router.put('/ras/:id', r_aController.updateRA);
router.delete('/ras/:id', r_aController.deleteRA);

module.exports = router;


