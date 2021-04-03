const express = require('express');
const router = express.Router();


//GET /profile/
router.get('/', (req, res) => {
    const templateVars = {};
    res.render('../views/editProfile', templateVars);
});


module.exports = router;