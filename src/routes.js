// File: routes.js
// Author: Reynaldo Dirksen

const express = require('express');
const carController = require('./controllers');
const authenticateToken = require('./middleware');

const router = express.Router();

// router.get('/', authenticateToken, carController.getCars);
router.get('/:id', authenticateToken, carController.getCarById);
router.post('/', authenticateToken, carController.createCar);
router.put('/:id', authenticateToken, carController.updateCar);
router.delete('/:id', authenticateToken, carController.deleteCar);

module.exports = router;
