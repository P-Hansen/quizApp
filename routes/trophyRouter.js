const express = require('express');
const router = express.Router();



//GET /trophies/
router.get('/', (req, res) => {
    const templateVars = {};
    res.render('../views/trophyCase', templateVars);
});

module.exports = router;