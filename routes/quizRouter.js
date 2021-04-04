const express = require('express');
const router = express.Router();
const db = require('../db/dbConnection.js');

//GET /quiz/create
router.get('/create', (req, res) => {
    const templateVars = {};
    res.render('../views/createQuiz', templateVars);
});

//get the public quizzes
router.get("/", (req, res) => {
    console.log("I'm gonna go get it:");
    db.query(`SELECT * FROM quizzes;`)
    .then(data => {
        const users = data.rows;
        res.json({ users });
        console.log(data.rows);
    })
    .catch(err => {
        res
        .status(500)
        .json({ error: err.message });
    });
  });

module.exports = router;