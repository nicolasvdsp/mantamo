const express = require('express');
const router = express.Router();
const divesController = require('../../../controllers/api/v1/dives');

router.get('/', divesController.getAll);
router.post('/', divesController.create);

module.exports = router;