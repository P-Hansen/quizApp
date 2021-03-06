const express = require('express');
const router = express.Router();
const db = require('../db/dbConnection.js');
const pg = require('pg');
const fetch = require("node-fetch");
const he = require('he');


//GET /quizzes
router.get('/', (req, res) => {
  let questions = [];
  fetch('https://opentdb.com/api.php?amount=1&category=15&type=multiple')
  .then((res) => {
    return res.json();
  })
  .then((apiQuestions) => {
    // transform into format we want
    questions = apiQuestions.results.map((apiQuestion) => {
      // this creates object we store our question into
        const formattedQuestion = {
            question: apiQuestion.question,
        };
        // this gets the answers, spread operator to get an array of incorrect answers
        const answerChoices = [...apiQuestion.incorrect_answers];
        // this will put the answer in a random position
        formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
        // this will put the correct answer at the right index
        answerChoices.splice(
            formattedQuestion.answer - 1,
            0,
            apiQuestion.correct_answer
        );
        // this iterates through the answer choices and references each choice
        answerChoices.forEach((answer, index) => {
            formattedQuestion['Answer' + (index + 1)] = answer;
        });
        // console.log(formattedQuestion)
        const templateVars = {
          question: he.decode(formattedQuestion.question),
          answer: formattedQuestion.answer,
          Answer1: formattedQuestion.Answer1,
          Answer2: formattedQuestion.Answer2,
          Answer3: he.decode(formattedQuestion.Answer3),
          Answer4: formattedQuestion.Answer4
        };
        res.render('../views/quizAPItest', templateVars);
        console.log(formattedQuestion);
        return formattedQuestion;
    });
  })
});

// router.post(/api/quizzes), (req, res) => {
//   db.query(
//     `INSERT INTO quizzes (public, category, user_id) VALUES ($1, $2, $3);
//     `
//   ), [query.category, query.question, query.];
// }

module.exports = router;
