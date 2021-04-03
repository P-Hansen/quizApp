const express = require('express');
const router = express.Router();


//GET /quiz/create
router.get('/create', (req, res) => {
    const templateVars = {};
    res.render('../views/createQuiz', templateVars);
});


module.exports = router;