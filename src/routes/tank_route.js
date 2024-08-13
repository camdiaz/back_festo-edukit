const express = require('express');
const tankController = require('./../controllers/tank_controller');
const router = express.Router();

// These routes are not protected by authentication
router.post('/api/create-tank', tankController.createTank);
router.post('/api/level-tank', tankController.getTank);

module.exports = router;