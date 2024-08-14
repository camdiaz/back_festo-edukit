const express = require('express');
const bombController = require('./../controllers/bomb_controller');
const router = express.Router();

// Documentation with swagger
/**
 * @openapi
 * components:
 *   schemas:
 *     Bombs:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *         bomb_name:
 *           type: string
 *         state:
 *           type: boolean
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

/**
 * @openapi
 * /api/get-bomb:
 *   get:
 *     tags:
 *       - Bombs
 *     summary: Get all Bombs
 *     description: Retrieve a list of all Bombs.
 *     responses:
 *       200:
 *         description: A list of bombs.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#components/schemas/Bombs'
 */

/**
 * @openapi
 * /api/create:
 *   post:
 *     tags:
 *       - Bombs
 *     summary: Create a new bomb
 *     description: Registers a new bomb with the provided information.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - bomb_name
 *               - state
 *             properties:
 *               bomb_name:
 *                 type: string
 *                 description: The desired name for the new bomb.
 *               state:
 *                 type: boolean
 *                 description: To active or desactive the bomb.
 *             example:
 *               bomb_name: "Edukit Bomb"
 *               state: true
 *     responses:
 *       201:
 *         description: Bomb created successfully.
 *       400:
 *         description: Invalid input data.
 *       409:
 *         description: Bomb already exists.
 */

/**
 * @openapi
 * /api/on-off-bomb:
 *   post:
 *     tags:
 *       - Bombs
 *     summary: Activate or desactivate a bomb
 *     description: Registers on and off.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - state
 *             properties:
 *               state:
 *                 type: boolean
 *                 description: To active or desactive the bomb.
 *             example:
 *               state: true
 *     responses:
 *       201:
 *         description: Bomb created successfully.
 *       400:
 *         description: Invalid input data.
 *       409:
 *         description: Bomb already exists.
 */


// These routes are not protected by authentication
router.post('/api/create-bomb', bombController.createBomb);
router.post('/api/get-bomb', bombController.getBomb);
router.post('/api/on-off-bomb', bombController.onOffBomb);

module.exports = router;