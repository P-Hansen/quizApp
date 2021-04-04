const express = require('express');
const router = express.Router();
const db = require('../db/dbConnection.js');

//GET /quiz/create
router.get('/create', (req, res) => {
    const templateVars = {};
    res.render('../views/createQuiz', templateVars);
});

//GET /quiz/:id
router.get('/:id', (req, res) => {
    //console.log("this is the route", req.params.id.slice(1));
    const quizID = req.params.id.slice(1);
    db.query(`SELECT questions.*, answers.*
    FROM quizzes
    JOIN questions ON quizzes.id = questions.quiz_id
    JOIN answers ON questions.id = answers.question_id
    WHERE quizzes.id = $1;`, [quizID])
    .then(data => {
        const quiz = data.rows;
        console.log(quiz);
        const templateVars = {quiz};
        res.render('../views/takeQuiz', templateVars);
    })
    .catch(err => {
        res
        .status(500)
        .json({ error: err.message });
    });
});

//get the public quizzes
router.get("/", (req, res) => {
    db.query(`SELECT * FROM quizzes;`)
    .then(data => {
        const quizzes = data.rows[0];
        res.json({ quizzes });
    })
    .catch(err => {
        res
        .status(500)
        .json({ error: err.message });
    });
  });

module.exports = router;