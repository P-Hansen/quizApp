// let questions = [];
//   fetch('https://opentdb.com/api.php?amount=1&category=15&type=multiple')
//   .then((res) => {
//     return res.json();
//   })
//   .then((apiQuestions) => {
//     // transform into format we want
//     questions = apiQuestions.results.map((apiQuestion) => {
//       // this creates object we store our question into
//         const formattedQuestion = {
//             question: apiQuestion.question,
//         };
//         // this gets the answers, spread operator to get an array of incorrect answers
//         const answerChoices = [...apiQuestion.incorrect_answers];
//         // this will put the answer in a random position
//         formattedQuestion.answer = Math.floor(Math.random() * 3) + 1;
//         // this will put the correct answer at the right index
//         answerChoices.splice(
//             formattedQuestion.answer - 1,
//             0,
//             apiQuestion.correct_answer
//         );
//         // this iterates through the answer choices and references each choice
//         answerChoices.forEach((answer, index) => {
//             formattedQuestion['Answer' + (index + 1)] = answer;
//         });
//         console.log(formattedQuestion)

//         return formattedQuestion;
//     });
//   })
// .catch((err) => {
//     console.error(err);
// });

// const api_url = 'https://opentdb.com/api.php?amount=10&category=15&type=multiple'
// async function getQuiz() {
//   let response = await fetch(api_url);
//   const data = await response.json();
//   console.log(data);
//   console.log(JSON.parse(body))
// }
// getQuiz();

// const request = require('request');


// const connectionString = 'postgres://labber:labber@localhost:8080/midterm' // your connection string

// app.get('/getdata/:id', function(req, res) {
//     if (!req.params.id) {
//        res.status(500);
//        res.send({"Error": "No ID"});
//     }


// request.get(
//   { url: "https://opentdb.com/api.php?amount=10&category=15&type=multiple" + req.params.id },
//   function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//       // get data from body ... e.g. title
//       const data = JSON.parse(body);
//       console.log(data)
//       const title = data.title || '';

//       // store in Postgresql
//       pg.pool(connectionString, (err, client, done) => {
//         done();
//         // Handle connection errors
//         if(err) {
//           console.log(err);
//           return res.status(500).json({success: false, data: err});
//         }
//         // SQL Query > Insert Data
//         client.query('INSERT INTO titles(id, title) values($1, $2)', [req.params.id, title]);
//         res.json({title: title});
//       })
//     }
//   }
// );
// });
