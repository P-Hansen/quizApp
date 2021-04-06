const express = require('express');
const router = express.Router();
const db = require('../db/dbConnection.js');

//GET /results/live
router.get('/live', (req, res) => {
    const templateVars = {};
    res.render('liveResults', templateVars);
});

//GET /results/:id READ
router.get('/:id', (req, res) => {

});

//POST /results/ EDIT
router.post('/:id', (req, res) => {

});

//POST /results/ DELETE
router.post('/:id/delete', (req, res) => {

});

//POST /results/ ADD
router.post('/', (req, res) => {

});

//GET /results/ BROWSE
router.get('/', (req, res) => {
    const templateVars = {};
    res.render('trophyCase', templateVars);
});



module.exports = router;