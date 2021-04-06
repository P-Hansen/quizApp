$(document).ready(function() {
  $("#create-quiz-button").on("click", function(event) {
    event.preventDefault();
    console.log("hello")
  })
  $.ajax({
    method:'post',
    url: `/quiz/create`,
  })
})
