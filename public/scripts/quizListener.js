//listens during the quiz

$(document).ready(function() {
  $(document.getElementById("questions-box")).hide();
  const quizID = window.location.pathname.slice(7);
  let currentQuestion = -1;
  let questionTime = 5;
  let totalPoints = 0;
  let answer = null;
  $.ajax({
    method:'POST',
    url: `/results`,
    data: {quizID}
  })

  const questionTimer = (quiz) => {
    questionTime -= 1;
    document.getElementById("question-timer").innerHTML = questionTime;
    if (questionTime === 0) {
      $(document.getElementById("questions-box")).show();
      try {
        //get id of the answer picked
        answer = document.getElementsByClassName("clicked")[0].id;
        console.log("answer picked:", answer);
        //reset buttons
        $(document.getElementsByClassName("clicked")).removeClass("clicked");
      }
      catch (err) {answer = null;};
      //add points to total if answer correct
      if (answer === 'a') {
        totalPoints += 10;
        document.getElementById("score").innerText = totalPoints;
        //send update to the db (UPDATE quiz_attempt_results SET total = #newTotalPoints#)
        $.ajax({
          method:'POST',
          url: `/results/${quizID}`,
          data: {totalPoints}
        });
      };
      //reset timer and increment question
      questionTime = 16;
      currentQuestion++;
      //check if quiz is done, if true go to results page
      if ((currentQuestion) === quiz.length) {
        window.location.replace(`/results/${quizID}`)
      } else {
        document.getElementById("quiz-length-bar-label").innerText = `${currentQuestion+1}/${quiz.length}`;
        $(document.getElementById("quiz-length-bar")).val(currentQuestion+1);
        document.getElementById("quiz-length-bar").max = quiz.length;
        console.log("how long is this>",quiz.length);
        //change question and answers
        document.getElementById("question").innerHTML = quiz[currentQuestion].question; 
        document.getElementById("a").innerHTML = quiz[currentQuestion].correct_answer;
        document.getElementById("b").innerHTML = quiz[currentQuestion].incorrect_answers[0];
        document.getElementById("c").innerHTML = quiz[currentQuestion].incorrect_answers[1];
        document.getElementById("d").innerHTML = quiz[currentQuestion].incorrect_answers[2];
      }
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

  //adds a class to the selected answer
  $("button").on("click", function(event) {
      event.preventDefault();
      $(this).parent().children().removeClass("clicked");
      $(this).addClass("clicked");
  });

});