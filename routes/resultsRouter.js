const express = require('express');
const router = express.Router();
const db = require('../db/dbConnection.js');

//GET /results/live
router.get('/live', (req, res) => {
    const templateVars = {};
    res.render('liveResults', templateVars);
});

//GET /results/:id READ
router.get('/:id', (req, res) => {
    console.log("and now for results!")
//     db.query(`SELECT questions.*, answers.*
//     FROM quizzes
//     JOIN questions ON quizzes.id = questions.quiz_id
//     JOIN answers ON questions.id = answers.question_id
//     WHERE quizzes.id = $1;`, [req.params.id])
//   .then((result)=>{
//     res.send(result.rows);
//   })
//   .catch((err)=>{
//     console.log(err.message);
//   })
    const templateVars = {};
    res.render('trophyCase', templateVars);
});

//POST /results/:id EDIT
router.post('/:id', (req, res) => {
    console.log("total score updated to", req.body.totalPoints);
    db.query(`UPDATE quiz_attempt_results SET total = $1
    WHERE quiz_attempt = $2;`, [req.body.totalPoints, 1]);
});

//POST /results/ DELETE
router.post('/:id/delete', (req, res) => {

});

//POST /results/ ADD
router.post('/', (req, res) => {
    console.log("you have started this quiz",req.body.quizID);
    db.query(`INSERT INTO quiz_attempts (user_id, quiz_id) VALUES (1,$1);`, [req.body.quizID]);
    db.query(`INSERT INTO quiz_attempt_results (quiz_attempt, question_id, answer_id, total) VALUES ($1,1,1,0);`, [1]);
});

//GET /results/ BROWSE
router.get('/', (req, res) => {
    const templateVars = {};
    res.render('trophyCase', templateVars);
});



module.exports = router;