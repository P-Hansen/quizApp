
$(document).ready(function() {
    const user_id = 1;
    $.ajax({
        method:'GET',
        url: `/results/:${user_id}`
      })
      .then((data)=>{
          console.log(data[0].total);
         // for (const record in data) {
            $(document.getElementById("results-container")).append(data[0].total);
          //}
          
      })

    $(".quizzes-completed").on("click", function(event) {
        console.log("you clicked me!");
        $(this).parent().children().removeClass("clicked");
        $(this).addClass("clicked");
    });
});