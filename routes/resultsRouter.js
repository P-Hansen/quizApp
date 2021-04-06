const express = require('express');
const router = express.Router();
const db = require('../db/dbConnection.js');

//GET /results/:id READ
router.get('/:id', (req, res) => {
    const templateVars = {};
    res.render('../views/trophyCase', templateVars);
});

//POST /results/ EDIT
router.post('/:id', (req, res) => {

});

//POST /results/ DELETE
router.post('/:id/delete', (req, res) => {

});

//GET /results/live
router.get('/live', (req, res) => {
    const templateVars = {};
    res.render('../views/liveResults', templateVars);
});

//POST /results/ ADD
router.post('/', (req, res) => {

});

//GET /results/ BROWSE
router.get('/', (req, res) => {
    const templateVars = {};
    res.render('../views/trophyCase', templateVars);
});



module.exports = router;