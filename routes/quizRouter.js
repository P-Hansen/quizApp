const express = require('express');
const { Pool } = require('pg');
const router = express.Router();
const db = require('../db/dbConnection.js');

//GET /quiz/create
router.get('/create', (req, res) => {
    const templateVars = {};
    res.render('../views/createQuiz', templateVars);
});

router.post('/create', (req, res) => {
  console.log("you're in the route!")
  console.log("1111", req.body);
  // db.query(`
  // INSERT INTO quizzes (public, category, user_id)
  // VALUES ($1, $2, $3)
  // RETURNING *;

  // INSERT INTO questions (question, quiz_id)
  // VALUES ($4, $5)

  // INSERT INTO answers (correct_answer, incorrect_answer, question_id)
  // VALUES ($6, $7, $8)
  // `, [
  //   query.
  // ])
})


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
