
$(document).ready(function() {
    const user_id = 1;
    //fill main box with all time results by defult
    $.ajax({
        method:'GET',
        url: `/results/all`
      })
      .then((data)=>{
        for (const record in data) {
            $(document.getElementById("results-container")).append(data[record].title);
            $(document.getElementById("results-container")).append('<br>');
            $(document.getElementById("results-container")).append(data[record].total);
            $(document.getElementById("results-container")).append('<br>');
        };
        $(document.getElementById("all-time")).addClass("clicked");
      });
      //populate the menu box with all quizzes taken
      $.ajax({
        method:'GET',
        url: `/results/user/quizzes`
      })
      .then((quizzes)=>{
          for (const record in quizzes) {
            console.log("What is this?", quizzes[record].title);
            $(document.getElementById("quizzes-done")).append(`<p class="quizzes-completed" data="${quizzes[record].id}">${quizzes[record].title}</p>`);
          }
      })
      .then(()=>{
        //listener for clicking quizzes on left side. displays them in main box
        $(".quizzes-completed").on("click", function(event) {
            $(this).parent().children().removeClass("clicked");
            $(this).addClass("clicked");
            let quizNumber = $(this)[0].getAttribute('data');
            $.ajax({
                method:'GET',
                url: `/results/${quizNumber}`
            })
            .then((data)=>{
                for (const record in data) {
                    $(document.getElementById("results-container")).empty();
                    $(document.getElementById("results-container")).append(data[record].title);
                    $(document.getElementById("results-container")).append('<br>');
                    $(document.getElementById("results-container")).append(data[record].total);
                    $(document.getElementById("results-container")).append('<br>');
                }; 
            });
        });
      })

      //clicking the all time button grabs all quiz results and displays them
      $("#all-time").on("click", function(event) {
        $.ajax({
            method:'GET',
            url: `/results/all`
          })
          .then((data)=>{
            $(document.getElementById("results-container")).empty();
            for (const record in data) {
                $(document.getElementById("results-container")).append(data[record].title);
                $(document.getElementById("results-container")).append('<br>');
                $(document.getElementById("results-container")).append(data[record].total);
                $(document.getElementById("results-container")).append('<br>');
            };
            $(this).parent().children().removeClass("clicked");
            $(document.getElementById("all-time")).addClass("clicked");
          });
      });

    // //clicking quizzes on left side displays them in main box
    // $(".quizzes-completed").on("click", function(event) {
    //     $(this).parent().children().removeClass("clicked");
    //     $(this).addClass("clicked");
    //     let quizNumber = 1;
    //     $.ajax({
    //         method:'GET',
    //         url: `/results/${quizNumber}`
    //       })
    //       .then((data)=>{
    //         for (const record in data) {
    //             $(document.getElementById("results-container")).empty();
    //             $(document.getElementById("results-container")).append(data[record].title);
    //             $(document.getElementById("results-container")).append('<br>');
    //             $(document.getElementById("results-container")).append(data[record].total);
    //             $(document.getElementById("results-container")).append('<br>');
    //         }; 
    //       });
    // });
});