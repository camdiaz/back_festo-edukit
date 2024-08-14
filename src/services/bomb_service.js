// All about logic
const { Bomb }  = require('../../models');

async function createBomb(bomb_name, state) {
    return await Bomb.create({ bomb_name, state });
}

async function getBomb( bomb_name, state) {
    return await Bomb.getBomb({ where: { bomb_name, state } });
}

async function onOffBomb( bomb_name, state) {
    return await Bomb.onOffBomb({ where: { bomb_name, state } });
}

module.exports = {
    createBomb,
    getBomb,
    onOffBomb
}
