// All about logic
const { Sensor }  = require('../../models');

async function createSensor(sensor_name, level, unity, type, min, max) {
    return await Sensor.create({ sensor_name, level, unity, type, min, max });
}

async function getSensor(sensor_name, level, unity, type, min, max) {
    return await Sensor.findOne({ where: { sensor_name, level, unity, type, min, max } });
}

async function getValuesSensor( sensorId ) {
    return await Sensor.findByPk(sensorId);
}

module.exports = {
    createSensor,
    getValuesSensor
};
