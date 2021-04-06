//listens during the quiz

$(document).ready(function() {
  const quizID = window.location.pathname.slice(7);
  let currentQuestion = -1;
  let questionTime = 5;
  //INSERT INTO quiz_attempts (user_id, quiz_id) VALUES (1,1);
  //INSERT INTO quiz_attempt_results (quiz_attempt, question_id, answer_id, total) VALUES (1,1,1,6);

  const questionTimer = (quiz) => {
    questionTime -= 1;
    document.getElementById("question-timer").innerHTML = questionTime;
    if (questionTime === 0) {
      questionTime = 16;
      currentQuestion++;
      document.getElementById("question").innerHTML = quiz[currentQuestion].question;
      document.getElementById("a").innerHTML = quiz[currentQuestion].correct_answer;
      document.getElementById("b").innerHTML = quiz[currentQuestion].incorrect_answers[0];
      document.getElementById("c").innerHTML = quiz[currentQuestion].incorrect_answers[1];
      document.getElementById("d").innerHTML = quiz[currentQuestion].incorrect_answers[2];
      //dp push
      console.log(document.getElementsByClassName("clicked")[0].id);
      //get id of the answer picked (b)
      //check to see if correct
      //add points to total
      //send update to the db (UPDATE quiz_attempt_results SET total = #newTotalPoints#)
      //reset buttons
      $(document.getElementsByClassName("clicked")).removeClass("clicked");
    }
  };

  const getQuiz = (id)=>{
    $.ajax({
      method:'get',
      url: `/quiz/${id}/data`
    })
    .then((quiz)=>{
      console.log("here is your new quiz", quiz);
      let myVar = setInterval(()=>{questionTimer(quiz)}, 1000);
    })
    .catch((err)=>{
      console.log(err.message);
    });
  };
  getQuiz(quizID);

  // db.query(`SELECT questions.*, answers.*
  // FROM quizzes
  // JOIN questions ON quizzes.id = questions.quiz_id
  // JOIN answers ON questions.id = answers.question_id
  // WHERE quizzes.id = $1;`, [quizID])
  // then((quiz)=>{
  //   let myVar = setInterval(questionTimer(quiz), 1000);
  // })

    //clicking the write a new tweet slides the compose section down
  $("button").on("click", function(event) {
      event.preventDefault();
      $(this).parent().children().removeClass("clicked");
      $(this).addClass("clicked");
  });

});