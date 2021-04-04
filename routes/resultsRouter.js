const express = require('express');
const router = express.Router();
const db = require('../db/dbConnection.js');

//GET /results/trophies/
router.get('/trophies', (req, res) => {
    const templateVars = {};
    res.render('../views/trophyCase', templateVars);
});

//GET /results/
router.get('/', (req, res) => {
    const templateVars = {};
    res.render('../views/liveResults', templateVars);
});

module.exports = router;