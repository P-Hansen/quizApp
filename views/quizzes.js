const express = require('express');
const router = express.Router();
const db = require('../db/dbConnection.js');
const fetch = require('node-fetch');
const pg = require('pg');

//GET /quizzes
router.get('/', (req, res) => {
  const templateVars = {};
  res.render('../views/quizAPItest', templateVars);
});

// const api_url = 'https://opentdb.com/api.php?amount=10&category=15&type=multiple'
// async function getQuiz() {
//   const response = await fetch(api_url);
//   const data = await response.json();
//   console.log(data);
//   // console.log(JSON.parse(body))
// }
// getQuiz();

// const connectionString = 'postgres://username:password@localhost/pg_demo_db' // your connection string

// app.get('/getdata/:id', function(req, res) {
//     if (!req.params.id) {
//        res.status(500);
//        res.send({"Error": "No ID"});
//     }


//     request.get(
//         { url: "https://opentdb.com/api.php?amount=10&category=15&type=multiple" + req.params.id },
//         function(error, response, body) {
//             if (!error && response.statusCode == 200) {
//                 // get data from body ... e.g. title
//                 const data = JSON.parse(body);
//                 const title = data.title || '';

//                 // store in Postgresql
//                 pg.connect(connectionString, (err, client, done) => {
//                     done();
//                     // Handle connection errors
//                     if(err) {
//                         console.log(err);
//                         return res.status(500).json({success: false, data: err});
//                     }
//                     // SQL Query > Insert Data
//                     client.query('INSERT INTO titles(id, title) values($1, $2)', [req.params.id, title]);

//                     res.json({title: title});
//                 })
//             }
//         }
//     );
// });

module.exports = router;
