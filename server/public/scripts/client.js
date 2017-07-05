$(document).ready(function() {
  console.log('jquery ready!');

  // process input form
  $("#inputForm").on("submit", function(e) {
    e.preventDefault();
    // console.log('submit event: ', e);

    var question = {};
    question.inputX = $("#inputX").val();
    question.inputY = $("#inputY").val();
    question.operation = $("#operation").val();
    console.log("sending question to server: ", question);

    $.ajax({
      url: "/math",
      type: "POST",
      data: question,
      success: function(response) {
        console.log('ajax response: ', response);
        // show the user the answer!
        $("#result").text(response.downtown);
      }
    });

  });



});
