const express = require('express');
const router = express.Router();
const db = require('../db/dbConnection.js');


//GET /profile/
router.get('/', (req, res) => {
    const templateVars = {};
    res.render('../views/editProfile', templateVars);
});

// not in use
router.get('/login/', (req, res) => {
  res.redirect('/');
});

// const getUserByEmail = (email) => {
//   return db.query(`SELECT * FROM users WHERE email = $1;`, [email])
//     .then(data => data.rows[0])
//     .catch(err => err.message);
// };

// router.post('/login/', (req, res) => {

// })

module.exports = router;
