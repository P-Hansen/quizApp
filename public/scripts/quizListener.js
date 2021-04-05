//listens during the quiz
$(document).ready(function() {

    let s = 16;
    const myTimer = () => {
      s -= 1;
      document.getElementById("question-timer").innerHTML = s;
    };
    let myVar = setInterval(myTimer, 1000);

      //clicking the write a new tweet slides the compose section down
    $("button").on("click", function(event) {
        event.preventDefault();
        $(this).parent().children().removeClass("clicked");
        $(this).addClass("clicked");
    });

});