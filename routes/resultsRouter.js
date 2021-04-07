const express = require('express');
const router = express.Router();
const db = require('../db/dbConnection.js');

//GET /results/live
router.get('/live', (req, res) => {
    const templateVars = {};
    res.render('liveResults', templateVars);
});

//GET /results/all READ
router.get('/all', (req, res) => {
    console.log("and now for results!")
    db.query(`SELECT quizzes.title, quiz_attempt_results.total
    FROM quiz_attempt_results
    JOIN quiz_attempts ON quiz_attempts.id = quiz_attempt_results.quiz_attempt_id
    JOIN quizzes ON quizzes.id = quiz_attempts.quiz_id
    WHERE quiz_attempts.user_id = $1`, [1])
    .then((data)=>{
        console.log("these are the quizzes you've taken", data.rows);
        res.send(data.rows);
    });
});

//GET /results/:id READ
router.get('/:id', (req, res) => {
    console.log("and now for results of quiz #", req.path.slice(1))
    db.query(`SELECT quizzes.title, quiz_attempt_results.total
    FROM quiz_attempt_results
    JOIN quiz_attempts ON quiz_attempts.id = quiz_attempt_results.quiz_attempt_id
    JOIN quizzes ON quizzes.id = quiz_attempts.quiz_id
    WHERE quiz_attempts.user_id = $1 AND quizzes.id = $2`, [1, req.path.slice(1)])
    .then((data)=>{
        console.log("these are the quizzes you've taken", data.rows);
        res.send(data.rows);
    });
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
    const templateVars = {user_id: req.session.user_id, name: req.session.name,};
    res.render('trophyCase', templateVars);
});



module.exports = router;