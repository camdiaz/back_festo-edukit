const express = require('express');
const tankController = require('./../controllers/tank_controller');
const router = express.Router();

// Documentation with swagger
/**
 * @openapi
 * components:
 *   schemas:
 *     Tanks:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         tank_name:
 *           type: string
 *         capacity:
 *           type: float
 *         level:
 *           type: float
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

/**
 * @openapi
 * /api/get-tank:
 *   get:
 *     tags:
 *       - Tanks
 *     summary: Get all Tanks
 *     description: Retrieve a list of all tank.
 *     responses:
 *       200:
 *         description: A list of Tanks.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/Tanks'
 */

/**
 * @openapi
 * /api/create-tank:
 *   post:
 *     tags:
 *       - Tanks
 *     summary: Create a new tank
 *     description: Registers a new tank with the provided information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: The created material.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/Tanks'
 */

/**
 * @openapi
 * /api/difference-level/{id}:
 *   get:
 *     tags:
 *       - Tanks
 *     summary: Get the difference level between a tank and a sensor.
 *     description: Retrieve the difference level between a specific Tank and Sensor by their IDs.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The unique identifier of the Tank.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: sensor_id
 *         required: true
 *         description: The unique identifier of the Sensor.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Difference level between the tank and the sensor.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 result:
 *                   type: number
 *       404:
 *         description: Tank or Sensor not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

// These routes are not protected by authentication
router.post('/api/create-tank', tankController.createTank);
router.post('/api/get-tank', tankController.getTank);
router.post('/api/difference-level', tankController.differenceLevel);

module.exports = router;