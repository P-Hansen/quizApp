const express = require('express');
const router = express.Router();


//GET /results/
router.get('/', (req, res) => {
    const templateVars = {};
    res.render('../views/liveResults', templateVars);
});


module.exports = router;