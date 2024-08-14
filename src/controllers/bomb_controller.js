//HTTP Interaction 
const bombService = require('../services/bomb_service');

// Create bomb
async function createBomb(req, res) {
    try {
        const result = await bombService.createBomb(req.body.bomb_name, req.body.state );
        res.status(200).json({ message: "Bomb created:", result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error to create bomb' });
    }
}

// get bomb
async function getBomb(req, res) {
    try {
        const result = await bombService.getBomb(req.body.bomb_name, req.body.state );
        res.status(200).json({ message: "Bomb found:", result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Bomb not found.' });
    }
}

// on off bomb
async function onOffBomb(req, res) {
    try {
        const result = await bombService.onOffBomb(req.body.bomb_name, req.body.state );
        if (state == true) {
            res.status(200).json({ message: "Bomb on:", result });
        } else if (state == false) {
            res.status(200).json({ message: "Bomb off:", result });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Bomb not found.' });
    }
}

module.exports = {
    createBomb,
    getBomb,
    onOffBomb
};