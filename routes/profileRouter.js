const express = require('express');
const router = express.Router();
const db = require('../db/dbConnection.js');

//GET /profile/
router.get('/', (req, res) => {
    const templateVars = {};
    res.render('../views/editProfile', templateVars);
});

router.get('/login/:userId', (req, res) => {
  // if using cookie-session middleware
  req.session.user_id = req.params.userId;
  // redirect the user somewhere
  res.redirect('/');
});


module.exports = router;
