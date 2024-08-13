// All about logic
const { Tank }  = require('../../models');

async function createTank(tank_name, capacity, level) {
    return await Tank.create({ tank_name, capacity, level });
}

async function getTank( tank_name, capacity, level) {
    return await Tank.getTank({ where: { tank_name, capacity, level } });
}

module.exports = {
    createTank,
    getTank
};
