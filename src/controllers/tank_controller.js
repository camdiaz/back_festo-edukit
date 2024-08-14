//HTTP Interaction 
const tankService = require('../services/tank_service');
const sensorService = require('../services/sensor_service');

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

// difference between level sensor and tank level
async function differenceLevel(req, res) {
    try {
        const tank = await tankService.getTank(
            req.body.tank_name, 
            req.body.capacity, 
            req.body.level
        );
        
        const sensor = await sensorService.getValuesSensorById(req.body.sensor_id);
        
        if (sensor && sensor.level !== undefined && tank && tank.level !== undefined) {
            const result = tank.level - sensor.level;
            res.status(200).json({ message: "Difference level:", result });
        } else {
            res.status(404).json({ error: 'Could not calculate the difference. Check tank and sensor levels.' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error calculating the difference level.' });
    }
}


module.exports = {
    createTank,
    getTank,
    differenceLevel
};