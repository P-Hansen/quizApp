$(document).ready(function() {
  $.ajax({
    method: 'GET',
    url: `/quiz/all/public`
  })
  .then((rows) => {
    console.log("PQ", rows[0].title);
    for (const row in rows) {
      $(document.getElementById("public-name-of-quiz")).append(rows[row].title);
      $(document.getElementById("public-name-of-quiz")).append("<br>");
      $(document.getElementById("public-category-of-quiz")).append(rows[row].category);
      $(document.getElementById("public-category-of-quiz")).append("<br>");
      $(document.getElementById("public-quiz-id-number")).append(rows[row].id);
      $(document.getElementById("public-quiz-id-number")).append("<br>");
    }
  })

  // ASK MENTOR ABOUT HOW TO GET THIS TO WORK
  // $("#quiz-id-number").click(function (){
  //   let quizID = $(this).innerHTML;
  //   console.log("111111", quizID)
  //   // window.location.replace(`/quiz/:${quizID}`)
  // })

  $.ajax({
    method: 'GET',
    url: `/quiz/all/user`
  })
  .then((userQuizzes) => {
    console.log("PUBLIC QUIZZES", userQuizzes[0].title);
    for (const userQuiz in userQuizzes) {
      $(document.getElementById("user-name-of-quiz")).append(userQuizzes[userQuiz].title);
      $(document.getElementById("user-name-of-quiz")).append("<br>");
      $(document.getElementById("user-category-of-quiz")).append(userQuizzes[userQuiz].category);
      $(document.getElementById("user-category-of-quiz")).append("<br>");
      $(document.getElementById("user-quiz-id-number")).append(userQuizzes[userQuiz].id);
      $(document.getElementById("user-quiz-id-number")).append("<br>");
    }
  })

  $.ajax({
    method: 'GET',
    url: `/quiz/all/user/private`
  })
  .then((userPrivate) => {
    console.log("PRIVATE USER QUIZZES", userPrivate[0].title);
    for (const userPriv in userPrivate) {
      $(document.getElementById("user-private-name-of-quiz")).append(userPrivate[userPriv].title);
      $(document.getElementById("user-private-name-of-quiz")).append("<br>");
      $(document.getElementById("user-private-cat-of-quiz")).append(userPrivate[userPriv].category);
      $(document.getElementById("user-private-cat-of-quiz")).append("<br>");
      $(document.getElementById("user-private-quiz-id-number")).append(userPrivate[userPriv].id);
      $(document.getElementById("user-private-quiz-id-number")).append("<br>");
    }
  })

});

