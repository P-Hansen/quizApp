const express = require('express');
const router = express.Router();
const db = require('../db/dbConnection.js');

//GET /quiz/create
router.get('/create', (req, res) => {
    const templateVars = {};
    res.render('../views/createQuiz', templateVars);
});

//GET /quiz/:id/data
router.get('/:id/data', (req, res) => {
      db.query(`SELECT questions.*, answers.*
  FROM quizzes
  JOIN questions ON quizzes.id = questions.quiz_id
  JOIN answers ON questions.id = answers.question_id
  WHERE quizzes.id = $1;`, [req.params.id])
  .then((result)=>{
    res.send(result.rows);
  })
  .catch((err)=>{
    console.log(err.message);
  })
});

//GET /quiz/:id
router.get('/:id', (req, res) => {
    const templateVars = {};
    res.render('takeQuiz', templateVars);
});

//get the public quizzes
router.get("/", (req, res) => {
    db.query(`SELECT * FROM quizzes;`)
    .then(data => {
        const quizzes = data.rows;
        res.json({ quizzes });
    })
    .catch(err => {
        res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;