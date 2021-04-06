const express = require('express');
const { Pool } = require('pg');
const router = express.Router();
const db = require('../db/dbConnection.js');

//GET /quiz/create
router.get('/create', (req, res) => {
    const templateVars = {};
    res.render('../views/createQuiz', templateVars);
});

// router.post('/create', (req, res) => { // will probably need to add some type of user_id to this field at some point
//   console.log("you're in the route!")
//   console.log("1111", req.body);
//   db.query(`
//   INSERT INTO quizzes (public, title, category, user_id)
//   VALUES ($1, $2, $3, $4)
//   RETURNING *;
//   `, [true, '123', 'random', 1]) // Does public always default to true?//
//   .then((RETURNING) => {
//     console.log(RETURNING);
//   })
// })

// router.post('/create', (req, res) => { // will probably need to add some type of user_id to this field at some point
//   let query = `
//   INSERT INTO questions (question, quiz_id)
//   VALUES ($1, $2)
//   RETURNING *;
// `;
//   let values = [req.body.question];

// })

// INSERT INTO questions (question, quiz_id)
// VALUES ($4, $5);
// [req.body.q1,1]
// INSERT INTO answers (correct_answer, incorrect_answer, question_id)
// VALUES ($6, $7, $8);
// [ req.body.a4, [req.body.a1, req.body.a2, req.body.a3], 1]

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
