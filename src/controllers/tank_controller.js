//HTTP Interaction 
const tankService = require('../services/tank_service');

// Create tank
async function createTank(req, res) {
    try {
        const result = await tankService.createTank(req.body.tank_name, req.body.capacity, req.body.level );
        res.status(200).json({ message: "Tank created:", result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error to create tank' });
    }
}

// get tank
async function getTank(req, res) {
    try {
        const result = await tankService.getTank(req.body.tank_name, req.body.capacity, req.body.level );
        res.status(200).json({ message: "Tank found:", result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Tank not found.' });
    }
}

module.exports = {
    createTank,
    getTank
};