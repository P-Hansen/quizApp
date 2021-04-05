//listens during the quiz

$(document).ready(function() {
  const quizID = window.location.pathname.slice(7);
  let currentQuestion = -1;
  let questionTime = 16;

  const questionTimer = (quiz) => {
    questionTime -= 1;
    console.log("times up!", questionTime);
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