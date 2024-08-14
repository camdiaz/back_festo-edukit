//HTTP Interaction 
const sensorService = require('../services/sensor_service');

// Create sensor
async function createSensor(req, res) {
    try {
        const result = await sensorService.createSensor(req.body.sensor_name, req.body.level, req.body.type, req.body.unit, req.body.min, req.body.max);
        res.status(200).json({ message: "Sensor created:", result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error to create sensor' });
    }
}

// get sensor
async function getSensor(req, res) {
    try {
        const result = await sensorService.getSensor(req.body.sensor_name, req.body.level, req.body.type, req.body.unit, req.body.min, req.body.max);
        res.status(200).json({ message: "Sensor found:", result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Sensor not found.' });
    }
}

// get sensor values
async function getValuesSensor(req, res) {
    try {
        const sensorId = req.params.id;
        const result = await sensorService.getValuesSensorById(sensorId);
        
        if (result && result.level >= 0 && result.level <= 3) {
            res.status(200).json(result);
        } else {
            res.status(400).json({ error: 'Level value out of range (0-3).' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving sensor levels.' });
    }
}

module.exports = {
    createSensor,
    getSensor,
    getValuesSensor
};