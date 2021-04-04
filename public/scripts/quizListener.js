//listens during the quiz
$(document).ready(function() {

      //clicking the write a new tweet slides the compose section down
  let downFlag = false;
  $(".right").on("click", function(event) {
    if (downFlag === false) {
      $(".new-tweet").slideDown();
      $("#tweet-text").focus();
      downFlag = true;
    } else {
      $(".new-tweet").slideUp();
      downFlag = false;
    }
  });

  
}