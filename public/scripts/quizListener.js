//listens during the quiz
$(document).ready(function() {
    let currentQuestion = 0;
    let questionTime = 16;
    const myTimer = () => {
      questionTime -= 1;
      document.getElementById("question-timer").innerHTML = questionTime;
      if (questionTime === 0) {
        questionTime = 16;
        currentQuestion++;
        document.getElementById("a").innerHTML = '<%=quiz[1].correct_answer%>';
        //dp push
        
        
      }
    };
    let myVar = setInterval(myTimer, 1000);

      //clicking the write a new tweet slides the compose section down
    $("button").on("click", function(event) {
        event.preventDefault();
        $(this).parent().children().removeClass("clicked");
        $(this).addClass("clicked");
    });

});