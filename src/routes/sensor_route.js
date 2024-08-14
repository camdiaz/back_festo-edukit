const express = require('express');
const sensorController = require('../controllers/sensor_controller');
const router = express.Router();

// Documentation with swagger
/**
 * @openapi
 * components:
 *   schemas:
 *     Sensors:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         sensor_name:
 *           type: string
 *         level:
 *           type: float
 *         unity:
 *           type: string
 *         type:
 *           type: string
 *         min:
 *           type: float
 *         max:
 *          type: float
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

/**
 * @openapi
 * /api/get-sensor:
 *   get:
 *     tags:
 *       - Sensors
 *     summary: Get all Sensors
 *     description: Retrieve a list of all Sensor.
 *     responses:
 *       200:
 *         description: The sensor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/Sensors'
 */

/**
 * @openapi
 * /api/create-sensor:
 *   post:
 *     tags:
 *       - Sensors
 *     summary: Create a new sensor
 *     description: Registers a new sensor with the provided information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: The created sensor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/Sensors'
 */

/**
 * @openapi
 * /api/values-sensor/{id}:
 *   get:
 *     tags:
 *       - Sensors
 *     summary: Get a single Sensor
 *     description: Retrieve details of a specific Sensor by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique identifier of the Sensor.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Details of the Sensor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/Sensors'
*/

// These routes are not protected by authentication
router.post('/api/create-sensor', sensorController.createSensor);
router.post('/api/get-sensor', sensorController.getSensor);
router.post('/api/values-sensor', sensorController.getValuesSensor);

module.exports = router;